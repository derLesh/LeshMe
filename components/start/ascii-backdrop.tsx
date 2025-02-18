'use client';
import { useEffect, useRef } from 'react';

const ASCII_CHARS = ['@', '$', '+', '-', 'x', '=', '.'];

interface Particle {
    x: number;
    y: number;
    char: string;
    baseX: number;
    baseY: number;
}

export default function AsciiBackdrop() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            const scale = window.devicePixelRatio;
            canvas.width = window.innerWidth * scale;
            canvas.height = window.innerHeight * scale;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(scale, scale);
        };
        resize();
        window.addEventListener('resize', resize);

        const width = 70;
        const height = 40;
        const spacing = 40;

        const particles: Particle[] = [];
        const totalWidth = width * spacing;
        const totalHeight = height * spacing;
        const startX = (window.innerWidth - totalWidth) / 2;
        const startY = (window.innerHeight - totalHeight) / 2;

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                particles.push({
                    x: startX + x * spacing,
                    y: startY + y * spacing,
                    baseX: startX + x * spacing,
                    baseY: startY + y * spacing,
                    char: ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)]
                });
            }
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX + window.scrollX;
            mouse.current.y = e.clientY + window.scrollY;
        };

        const handleMouseLeave = () => {
            mouse.current.x = -1000;
            mouse.current.y = -1000;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        function animate() {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            ctx.fillStyle = '#666666';
            ctx.font = '24px monospace';

            particles.forEach(particle => {
                const dx = mouse.current.x - particle.x;
                const dy = mouse.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 100;

                // Berechnung nur durchführen, wenn die Maus in der Nähe ist
                if (distance < maxDistance) {
                    const force = 0.3;
                    const angle = Math.atan2(dy, dx);
                    particle.x -= Math.cos(angle) * force * (maxDistance - distance) * 0.5;
                    particle.y -= Math.sin(angle) * force * (maxDistance - distance) * 0.5;
                } else {
                    const force = 0.08;
                    particle.x += (particle.baseX - particle.x) * force;
                    particle.y += (particle.baseY - particle.y) * force;
                }

                ctx.fillText(particle.char, particle.x, particle.y);
            });

            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="absolute top-0 left-0 -z-10 opacity-30"
            style={{ 
                width: '100vw', 
                height: '100vh',
                touchAction: 'none'
            }} 
        />
    );
} 