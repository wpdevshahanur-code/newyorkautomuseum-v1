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
      style={{
        padding: '110px 0',
        backgroundColor: '#F8FAFC',
        borderBottom: '1px solid #E2E8F0',
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
              style={{ color: '#DC2626', fontWeight: 800, textDecoration: 'underline' }}
            >
              hr@newyorkautomuseum.com
            </a>
          </p>
        </div>

        {/* Department Filter Pills */}
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
                  ? '1px solid #DC2626'
                  : '1px solid #CBD5E1',
              backgroundColor: selectedDept === 'all' ? '#DC2626' : '#FFFFFF',
              color: selectedDept === 'all' ? '#FFFFFF' : '#334155',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
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
                    ? '1px solid #DC2626'
                    : '1px solid #CBD5E1',
                backgroundColor:
                  selectedDept === dept.department ? '#DC2626' : '#FFFFFF',
                color: selectedDept === dept.department ? '#FFFFFF' : '#334155',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
              }}
            >
              {dept.department} ({dept.jobs.length})
            </button>
          ))}
        </div>

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
                    backgroundColor: '#DC2626',
                    borderRadius: '2px',
                  }}
                />
                <TextReveal
                  as="h3"
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    letterSpacing: '-0.02em',
                  }}
                  text={dept.department}
                />
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#64748B',
                    backgroundColor: '#E2E8F0',
                    padding: '2px 8px',
                    borderRadius: '6px',
                  }}
                >
                  {dept.jobs.length} open roles
                </span>
              </div>

              {/* Jobs Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                  gap: '18px',
                }}
              >
                {dept.jobs.map((job, jIdx) => {
                  const jobKey = `${dept.department}-${jIdx}`;
                  const isJobOpen = openJobKey === jobKey;
                  return (
                    <div
                      key={jobKey}
                      className="career-job-card"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: isJobOpen ? '1px solid #DC2626' : '1px solid #E2E8F0',
                        borderRadius: '14px',
                        boxShadow: isJobOpen
                          ? '0 10px 30px rgba(220, 38, 38, 0.08)'
                          : '0 2px 10px rgba(15, 23, 42, 0.03)',
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
                            marginBottom: '10px',
                          }}
                        >
                          <TextReveal
                            as="h4"
                            style={{
                              fontSize: '1.15rem',
                              fontWeight: 800,
                              color: '#0F172A',
                              lineHeight: 1.3,
                            }}
                            text={job.title}
                          />
                        </div>

                        <TextReveal
                          as="p"
                          style={{
                            fontSize: '0.92rem',
                            color: '#475569',
                            lineHeight: 1.7,
                            marginBottom: '16px',
                          }}
                          text={job.description}
                        />
                      </div>

                      <div
                        style={{
                          paddingTop: '16px',
                          borderTop: '1px solid #F1F5F9',
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
                          Manhattan, NY
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
