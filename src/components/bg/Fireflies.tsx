"use client";

import React, { useEffect, useRef } from "react";

interface Firefly {
  x: number;
  y: number;
  size: number;
  baseSize: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacitySpeed: number;
}

export default function Fireflies() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let fireflies: Firefly[] = [];
    const count = 50;
    const interactionRadius = 120;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initFireflies();
    };

    const initFireflies = () => {
      fireflies = [];
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 0.8;
        fireflies.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: size,
          baseSize: size,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random(),
          opacitySpeed: Math.random() * 0.015 + 0.005,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fireflies.forEach((p) => {
        // Normal movement
        p.x += p.speedX;
        p.y += p.speedY;

        // Pulse opacity
        p.opacity += p.opacitySpeed;
        if (p.opacity > 1 || p.opacity < 0.2) {
          p.opacitySpeed *= -1;
        }

        // Mouse interaction
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let currentSize = p.baseSize;
        let currentGlow = 4;

        if (distance < interactionRadius) {
          // Flee effect: apply force away from mouse
          const force = (interactionRadius - distance) / interactionRadius;
          const angle = Math.atan2(dy, dx);

          p.x += Math.cos(angle) * force * 4;
          p.y += Math.sin(angle) * force * 4;

          // Hover visual enhancement
          currentSize = p.baseSize * (1 + force * 0.8);
          currentGlow = 6 + force * 10;
        }

        // Boundary wrap
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Render
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);

        ctx.shadowBlur = currentGlow;
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * (distance < interactionRadius ? 0.9 : 0.6)})`;
        ctx.fill();

        // Reset shadow for next particles to avoid accumulation if needed (context internal)
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{ filter: "blur(0.3px)" }}
    />
  );
}
