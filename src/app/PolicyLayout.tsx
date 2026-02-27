'use client';

import React from 'react';
import Link from 'next/link';
import FluidBackground from './FluidBackground';

interface PolicyLayoutProps {
    title: string;
    children: React.ReactNode;
}

export default function PolicyLayout({ title, children }: PolicyLayoutProps) {
    React.useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    return (
        <div style={{ minHeight: '100vh', position: 'relative', background: 'var(--bg-color)', color: 'var(--text-color)', padding: '120px 20px 80px' }}>
            <FluidBackground />

            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: '60px' }}>
                    <Link href="/" style={{
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '40px',
                        transition: 'color 0.3s ease'
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
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    lineHeight: '1.8',
                    fontSize: '1.1rem',
                    color: 'var(--text-color)',
                    opacity: 0.9
                }}>
                    {children}
                </div>

                <footer style={{ marginTop: '80px', textAlign: 'center', color: 'var(--text-muted)', opacity: 0.3, fontSize: '0.8rem' }}>
                    &copy; 2008-2026 Rheehose (Rhee Creative). All rights reserved.
                </footer>
            </div>
        </div>
    );
}
