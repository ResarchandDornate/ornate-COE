"use client";

import { useEffect, useRef } from "react";

// Animated constellation backdrop: drifting nodes linked by fading lines,
// with a subtle pull toward the pointer. Pure canvas, no deps.
// Honors prefers-reduced-motion by rendering a single static frame.
export default function ParticleField({ light = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Colour palette — tuned for a light or dark backdrop.
    const C = light
      ? {
          link: (op) => `rgba(234, 88, 12, ${op * 0.8})`,
          pointer: (op) => `rgba(244, 63, 94, ${op})`,
          node: "rgba(234, 88, 12, 0.85)",
          glow: "rgba(234, 88, 12, 0.45)",
          glowBlur: 4,
        }
      : {
          link: (op) => `rgba(96, 165, 250, ${op})`,
          pointer: (op) => `rgba(125, 211, 252, ${op})`,
          node: "rgba(224, 242, 255, 0.92)",
          glow: "rgba(234, 88, 12, 0.9)",
          glowBlur: 6,
        };

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const LINK_DIST = 140;
    const POINTER_DIST = 180;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let raf = 0;
    const pointer = { x: -9999, y: -9999, active: false };

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      // Density scales with area, capped so big screens stay performant.
      const count = Math.min(120, Math.max(36, Math.floor((width * height) / 12000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: Math.random() * 1.7 + 0.6,
      }));
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Links between nearby nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const op = (1 - dist / LINK_DIST) * 0.4;
            ctx.strokeStyle = C.link(op);
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        // Links to pointer
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < POINTER_DIST) {
            const op = (1 - dist / POINTER_DIST) * 0.6;
            ctx.strokeStyle = C.pointer(op);
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
      }

      // Nodes with a soft glow
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = C.node;
        ctx.shadowColor = C.glow;
        ctx.shadowBlur = C.glowBlur;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const step = () => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Gentle attraction toward the pointer
        if (pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < POINTER_DIST && dist > 1) {
            const pull = (1 - dist / POINTER_DIST) * 0.04;
            p.x += dx * pull;
            p.y += dy * pull;
          }
        }
      }
      render();
      raf = requestAnimationFrame(step);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    if (reduced) {
      render();
    } else {
      raf = requestAnimationFrame(step);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [light]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
