'use client';

import { useState } from 'react';
import careersData from '@/data/careers.json';
import TextReveal from './TextReveal';

interface Job {
  title: string;
  description: string;
  applyUrl: string;
}

interface Department {
  department: string;
  jobs: Job[];
}

export default function CareersSection() {
  const departments: Department[] = careersData;
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [openJobKey, setOpenJobKey] = useState<string | null>(null);

  const toggleJob = (key: string) => {
    setOpenJobKey((prev) => (prev === key ? null : key));
  };

  const totalPositions = departments.reduce((acc, d) => acc + d.jobs.length, 0);

  const displayedDepts =
    selectedDept === 'all'
      ? departments
      : departments.filter((d) => d.department === selectedDept);

  return (
    <section
      id="careers"
      className="careers-section"
      style={{
        padding: '110px 0',
        backgroundColor: 'transparent',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <span className="section-tag">Talent &amp; Opportunity</span>
          <TextReveal as="h2" className="section-title" text="Careers" />
          <TextReveal
            as="p"
            className="section-subtitle"
            text="Join the team building one of the world's leading museum attractions."
          />
          <p className="section-subtitle" style={{ marginTop: '8px' }}>
            Send all inquiries and applications directly to:{' '}
            <a
              href="mailto:hr@newyorkautomuseum.com"
              style={{ color: '#E11D48', fontWeight: 800, textDecoration: 'underline' }}
            >
              hr@newyorkautomuseum.com
            </a>
          </p>
        </div>

        {/* Department Filter Pills */}
        {departments.length > 1 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
              marginBottom: '48px',
            }}
          >
            <button
              onClick={() => setSelectedDept('all')}
              style={{
                padding: '9px 18px',
                borderRadius: '9999px',
                border:
                  selectedDept === 'all'
                    ? '1px solid #E11D48'
                    : '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: selectedDept === 'all' ? '#E11D48' : 'rgba(18, 24, 36, 0.88)',
                color: selectedDept === 'all' ? '#FFFFFF' : '#94A3B8',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
              }}
            >
              All Departments ({totalPositions})
            </button>
            {departments.map((dept) => (
              <button
                key={dept.department}
                onClick={() => setSelectedDept(dept.department)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  border:
                    selectedDept === dept.department
                      ? '1px solid #E11D48'
                      : '1px solid rgba(255, 255, 255, 0.12)',
                  backgroundColor:
                    selectedDept === dept.department ? '#E11D48' : 'rgba(18, 24, 36, 0.88)',
                  color: selectedDept === dept.department ? '#FFFFFF' : '#94A3B8',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                }}
              >
                {dept.department} ({dept.jobs.length})
              </button>
            ))}
          </div>
        )}

        {/* Departments and Positions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {displayedDepts.map((dept) => (
            <div key={dept.department}>
              {/* Department Title */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    width: '4px',
                    height: '24px',
                    backgroundColor: '#E11D48',
                    borderRadius: '2px',
                  }}
                />
                <TextReveal
                  as="h3"
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                  }}
                  text={dept.department}
                />
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.14)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    padding: '2px 8px',
                    borderRadius: '6px',
                  }}
                >
                  {dept.jobs.length} open roles
                </span>
              </div>

              {/* Jobs Grid */}
              <div className="career-jobs-grid">
                {dept.jobs.map((job, jIdx) => {
                  const jobKey = `${dept.department}-${jIdx}`;
                  const isJobOpen = openJobKey === jobKey;
                  return (
                    <div
                      key={jobKey}
                      className="career-job-card"
                      style={{
                        backgroundColor: 'rgba(18, 24, 36, 0.88)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: isJobOpen ? '1px solid #E11D48' : '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '16px',
                        boxShadow: isJobOpen
                          ? '0 12px 32px rgba(225, 29, 72, 0.2)'
                          : '0 12px 36px rgba(0, 0, 0, 0.45)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            gap: '10px',
                            marginBottom: '12px',
                          }}
                        >
                          <TextReveal
                            as="h4"
                            style={{
                              fontSize: '1.25rem',
                              fontWeight: 800,
                              color: '#FFFFFF',
                              lineHeight: 1.3,
                            }}
                            text={job.title}
                          />
                        </div>

                        <TextReveal
                          as="p"
                          style={{
                            fontSize: '0.98rem',
                            color: '#94A3B8',
                            lineHeight: 1.75,
                            marginBottom: '20px',
                          }}
                          text={job.description}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: '16px',
                          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: '#64748B',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          New York City, NY
                        </span>
                        <a
                          href={job.applyUrl}
                          className="btn btn-primary btn-sm"
                          style={{
                            padding: '8px 16px',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                        >
                          Apply &rarr;
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
