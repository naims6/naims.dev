"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Point {
  x: number;
  y: number;
  age: number;
  opacity: number;
}

export default function MousePencilEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const requestRef = useRef<number>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Add a new point
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        opacity: 1,
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Pencil color based on theme
      // Graphite/Darker feel
      const color =
        resolvedTheme === "dark"
          ? "rgba(200, 200, 200," // Silver/Grey for dark mode
          : "rgba(30, 30, 30,"; // Deep charcoal for light mode

      // Update and filter points
      pointsRef.current = pointsRef.current.filter((p) => {
        p.age += 1;
        p.opacity = Math.max(0, 1 - p.age / 35); // Slightly faster fade
        return p.opacity > 0;
      });

      if (pointsRef.current.length > 1) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Group segments to minimize state changes
        for (let i = 1; i < pointsRef.current.length; i++) {
          const p1 = pointsRef.current[i - 1];
          const p2 = pointsRef.current[i];

          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 80) {
            const alpha = 0.5 * p2.opacity; // More visible
            ctx.strokeStyle = `${color} ${alpha})`;
            ctx.lineWidth = (1 + Math.sin(p2.age * 0.2) * 0.2) * p2.opacity; // Subtle pressure variation

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Minimal jitter for performance - only for very fresh points
            if (p2.age < 5) {
              ctx.fillStyle = `${color} ${alpha * 0.2})`;
              ctx.fillRect(
                p2.x + (Math.random() - 0.5) * 4,
                p2.y + (Math.random() - 0.5) * 4,
                1,
                1,
              );
            }
          }
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mounted, resolvedTheme]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      style={{
        mixBlendMode: resolvedTheme === "dark" ? "plus-lighter" : "multiply",
      }}
    />
  );
}
