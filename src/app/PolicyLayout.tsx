'use client';

import React from 'react';
import Link from 'next/link';
import FluidBackground from './FluidBackground';

interface PolicyLayoutProps {
    title: string;
    children: React.ReactNode;
}

export default function PolicyLayout({ title, children }: PolicyLayoutProps) {
    return (
        <div style={{ minHeight: '100vh', position: 'relative', background: '#050505', color: '#fff', padding: '120px 20px 80px' }}>
            <FluidBackground />

            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: '60px' }}>
                    <Link href="/" style={{
                        color: 'rgba(255,255,255,0.4)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '40px'
                    }}>
                        <span style={{ fontSize: '1.2rem' }}>&lsaquo;</span> BACK TO HOME
                    </Link>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 900, marginBottom: '20px' }}>
                        {title}
                    </h1>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', borderRadius: '2px' }}></div>
                </div>

                <div className="glass-card" style={{
                    padding: '50px',
                    textAlign: 'left',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    lineHeight: '1.8',
                    fontSize: '1.1rem',
                    color: 'rgba(255,255,255,0.8)'
                }}>
                    {children}
                </div>

                <footer style={{ marginTop: '80px', textAlign: 'center', opacity: 0.3, fontSize: '0.8rem' }}>
                    &copy; 2008-2026 Rheehose (Rhee Creative). All rights reserved.
                </footer>
            </div>
        </div>
    );
}
