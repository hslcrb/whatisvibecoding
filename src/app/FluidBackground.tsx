'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FluidBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef(new THREE.Vector2(0, 0));

    useEffect(() => {
        if (!containerRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

        const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      varying vec2 vUv;

      void main() {
        vec2 p = vUv * 2.0 - 1.0;
        p.x *= uResolution.x / uResolution.y;

        vec2 m = uMouse * 2.0 - 1.0;
        m.x *= uResolution.x / uResolution.y;

        float t = uTime * 0.15;
        float dist = length(p - m);
        float mouseEffect = smoothstep(0.8, 0.0, dist) * 0.4;
        
        vec3 col1 = vec3(0.439, 0.0, 1.0); // #7000FF
        vec3 col2 = vec3(0.0, 1.0, 0.82); // #00FFD1
        vec3 col3 = vec3(0.1, 0.0, 0.3);  // Deep Purple
        vec3 col4 = vec3(0.0, 0.0, 0.0);  // Black

        float v1 = sin(p.x * 2.0 + t + mouseEffect) * 0.5 + 0.5;
        float v2 = cos(p.y * 1.2 - t * 0.7 + mouseEffect) * 0.5 + 0.5;
        float v3 = sin(length(p) * 1.5 + t * 0.4) * 0.5 + 0.5;

        vec3 color = mix(col3, col1, v1);
        color = mix(color, col2, v2);
        color = mix(color, col4, v3 * 0.6);
        
        // Add subtle highlight near mouse
        color += vec3(0.0, 0.5, 0.5) * exp(-dist * 4.0);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            },
            vertexShader,
            fragmentShader,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX / window.innerWidth;
            mouseRef.current.y = 1.0 - (e.clientY / window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        const animate = (time: number) => {
            material.uniforms.uTime.value = time * 0.001;
            // Smoothly interpolate mouse position
            material.uniforms.uMouse.value.lerp(mouseRef.current, 0.05);
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -2,
                pointerEvents: 'none',
                opacity: 0.7,
            }}
        />
    );
};

export default FluidBackground;
