'use client';

import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger once on client
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export interface TextRevealProps {
  text?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  duration?: number;
  delay?: number;
  threshold?: string;
  reverse?: boolean;
  toggleActions?: string;
  coloredWords?: Record<string, string>;
  triggerElement?: string | HTMLElement | null;
}

export default function TextReveal({
  text,
  children,
  as: Component = 'h2',
  className = '',
  style = {},
  stagger,
  duration,
  delay = 0,
  threshold = 'top 88%',
  reverse = true,
  toggleActions,
  coloredWords,
  triggerElement,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  const isParagraph = Component === 'p';
  const effectiveStagger = stagger ?? (isParagraph ? 0.04 : 0.075);
  const effectiveDuration = duration ?? (isParagraph ? 0.85 : 1.0);

  // Extract raw text from text prop or children
  let rawText = text || '';
  if (!rawText && children) {
    if (typeof children === 'string') {
      rawText = children;
    } else if (Array.isArray(children)) {
      rawText = children
        .map((child) => (typeof child === 'string' ? child : ''))
        .filter(Boolean)
        .join(' ');
    }
  }

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const words = containerRef.current?.querySelectorAll('.gsap-reveal-word');
      if (!words || words.length === 0) return;

      const triggerTarget =
        (typeof triggerElement === 'string'
          ? document.querySelector(triggerElement)
          : triggerElement) || containerRef.current;

      gsap.fromTo(
        words,
        {
          y: '110%',
          opacity: 0,
          rotateX: -15,
        },
        {
          y: '0%',
          opacity: 1,
          rotateX: 0,
          duration: effectiveDuration,
          stagger: effectiveStagger,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: triggerTarget,
            start: threshold,
            toggleActions:
              toggleActions || (reverse ? 'play none none reverse' : 'play none none none'),
            invalidateOnRefresh: true,
          },
        }
      );
    }, containerRef);

    // Refresh ScrollTrigger once DOM layout and images settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [rawText, effectiveStagger, effectiveDuration, delay, threshold, reverse, toggleActions, triggerElement]);

  const words = rawText.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return (
      <Component ref={containerRef} className={className} style={style}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      ref={containerRef}
      className={`text-reveal-container ${className}`}
      style={{
        ...style,
        perspective: '800px',
      }}
    >
      {words.map((word, index) => {
        const isDivider = word === '|';
        const customColor = coloredWords?.[word];
        return (
          <span
            key={`${word}-${index}`}
            className="text-reveal-mask"
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'top',
              lineHeight: '1.25',
              paddingBottom: '0.08em',
              marginRight: index === words.length - 1 ? '0' : '0.28em',
            }}
          >
            <span
              className="gsap-reveal-word"
              style={{
                display: 'inline-block',
                willChange: 'transform, opacity',
                ...(customColor ? { color: customColor } : {}),
                ...(isDivider ? { color: customColor || '#DC2626', fontWeight: 300 } : {}),
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
