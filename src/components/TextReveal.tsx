'use client';

import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';

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
  stagger = 0.035,
  duration = 0.6,
  delay = 0,
  coloredWords,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  const isParagraph = Component === 'p';

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
    // If it's a paragraph, skip animation completely for fast, instant reading
    if (isParagraph || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const words = containerRef.current?.querySelectorAll('.gsap-reveal-word');
      if (!words || words.length === 0) return;

      gsap.fromTo(
        words,
        {
          y: '100%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          duration,
          stagger,
          delay,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isParagraph, rawText, duration, stagger, delay]);

  // If paragraph, render immediately as clean, standard <p> without any reveal animation delay
  if (isParagraph) {
    return (
      <p className={className} style={style}>
        {rawText || children}
      </p>
    );
  }

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
                ...(isDivider ? { color: customColor || '#E11D48', fontWeight: 300 } : {}),
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
