'use client';

import React from 'react';

interface AntigravityLogoProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    style?: React.CSSProperties;
}

const AntigravityLogo: React.FC<AntigravityLogoProps> = ({ size = 'md', className = '', style = {} }) => {
    const heights = {
        sm: '20px',
        md: '24px',
        lg: '32px'
    };

    const fontSizes = {
        sm: '0.9rem',
        md: '1.2rem',
        lg: '1.6rem'
    };

    return (
        <div
            className={`antigravity-logo-container no-interaction img-protect ${className}`}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                ...style
            }}
            onContextMenu={(e) => e.preventDefault()}
        >
            <img
                src="/antigravity_logo.webp"
                alt="Antigravity Logo"
                style={{ height: heights[size], width: 'auto' }}
                onDragStart={(e) => e.preventDefault()}
                draggable="false"
            />
            <span
                className="antigravity-text"
                style={{
                    fontSize: fontSizes[size],
                    lineHeight: 1
                }}
            >
                Google Antigravity
            </span>
        </div>
    );
};

export default AntigravityLogo;
