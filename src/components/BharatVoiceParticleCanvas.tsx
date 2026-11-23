"use client";

import React, { useEffect, useRef } from "react";

export default function BharatVoiceParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrameId: number = 0;
    let isVisible = true;
    let isTabActive = true;

    // Pause animation when scrolled out of view to preserve 100% CPU/GPU performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && isTabActive && !animationFrameId) {
          render();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isVisible && isTabActive && !animationFrameId) {
        render();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const resize = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resize, { passive: true });
    resize();

    // Responsive strand counts for ultra-smooth 60fps performance on all devices
    const isMobile = width < 768;
    const config = {
      strandCount: isMobile ? 22 : 34,
      dotsPerStrand: isMobile ? 24 : 30,
      twist: 2.3,
      speed: 0.006,
      floorRadius: Math.min(width * 0.35, 380),
      waistRadius: Math.min(width * 0.15, 160),
      crownRadius: Math.min(width * 0.38, 410),
      waistAt: 0.52,
      cometCount: isMobile ? 8 : 14,
    };

    // Comets travelling along strands (Royal Gold and Vibrant Blue)
    const comets: Array<{
      strandIdx: number;
      t: number;
      speed: number;
      size: number;
      isGold: boolean;
    }> = [];

    for (let i = 0; i < config.cometCount; i++) {
      comets.push({
        strandIdx: Math.floor(Math.random() * config.strandCount),
        t: Math.random(),
        speed: 0.0025 + Math.random() * 0.003,
        size: 2.0 + Math.random() * 1.4,
        isGold: i % 2 === 0,
      });
    }

    let time = 0;
    let mouseX = width * 0.65;
    let mouseY = height * 0.45;
    let targetMouseX = width * 0.65;
    let targetMouseY = height * 0.45;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const render = () => {
      if (!isVisible || !isTabActive) {
        animationFrameId = 0;
        return;
      }

      time += 1;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const isDesktop = width > 1024;
      const centerX = isDesktop ? width * 0.68 : width * 0.5;
      const centerY = height * 0.48;
      const totalHeight = height * 0.88;

      // Draw 3D Waving Strands
      for (let i = 0; i < config.strandCount; i++) {
        const baseAngle =
          (i / config.strandCount) * Math.PI * 2 + time * config.speed;
        const isGoldStrand = i % 3 === 0;

        ctx.beginPath();

        for (let step = 0; step <= config.dotsPerStrand; step++) {
          const t = step / config.dotsPerStrand;

          // Hyperboloid radius equation: waist pinch
          const distFromWaist = Math.abs(t - config.waistAt);
          const r =
            config.waistRadius +
            Math.pow(distFromWaist * 2.1, 1.8) *
              (config.floorRadius - config.waistRadius);

          // Twist angle with height + organic wave
          const angle =
            baseAngle +
            t * config.twist +
            Math.sin(time * 0.02 + t * 4) * 0.15;

          const x3d = Math.cos(angle) * r;
          const z3d = Math.sin(angle) * r;
          const y3d = (t - 0.5) * totalHeight;

          let screenX = centerX + x3d;
          let screenY = centerY + y3d + z3d * 0.22;

          // Gentle Mouse Repulsion Field (from Bharat Voice)
          const dx = screenX - mouseX;
          const dy = screenY - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 180;
          if (dist < repelRadius && dist > 1) {
            const force = (1 - dist / repelRadius) * 35;
            screenX += (dx / dist) * force;
            screenY += (dy / dist) * force;
          }

          if (step === 0) {
            ctx.moveTo(screenX, screenY);
          } else {
            ctx.lineTo(screenX, screenY);
          }

          // Glowing Dots on Strands
          if (step % 5 === 0) {
            const depthAlpha =
              0.15 +
              ((z3d + config.floorRadius) / (config.floorRadius * 2)) * 0.55;

            ctx.fillStyle = isGoldStrand
              ? `rgba(212, 175, 55, ${depthAlpha * 0.7})`
              : `rgba(56, 189, 248, ${depthAlpha * 0.65})`;
            ctx.fillRect(screenX - 1, screenY - 1, 2, 2);
          }
        }

        ctx.strokeStyle = isGoldStrand
          ? "rgba(212, 175, 55, 0.08)"
          : "rgba(56, 189, 248, 0.07)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw Flowing Comets (High-performance concentric dual-arc glow)
      comets.forEach((c) => {
        c.t += c.speed;
        if (c.t > 1) {
          c.t = 0;
          c.strandIdx = Math.floor(Math.random() * config.strandCount);
        }

        const baseAngle =
          (c.strandIdx / config.strandCount) * Math.PI * 2 + time * config.speed;
        const distFromWaist = Math.abs(c.t - config.waistAt);
        const r =
          config.waistRadius +
          Math.pow(distFromWaist * 2.1, 1.8) *
            (config.floorRadius - config.waistRadius);
        const angle = baseAngle + c.t * config.twist;

        const x3d = Math.cos(angle) * r;
        const z3d = Math.sin(angle) * r;
        const y3d = (c.t - 0.5) * totalHeight;

        let sx = centerX + x3d;
        let sy = centerY + y3d + z3d * 0.22;

        const dx = sx - mouseX;
        const dy = sy - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 1) {
          const f = (1 - dist / 180) * 35;
          sx += (dx / dist) * f;
          sy += (dy / dist) * f;
        }

        // Outer Aura (Hardware fast)
        ctx.beginPath();
        ctx.arc(sx, sy, c.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = c.isGold
          ? "rgba(212, 175, 55, 0.2)"
          : "rgba(56, 189, 248, 0.2)";
        ctx.fill();

        // Inner Core (Crisp & luminous)
        ctx.beginPath();
        ctx.arc(sx, sy, c.size, 0, Math.PI * 2);
        ctx.fillStyle = c.isGold
          ? "rgba(254, 240, 138, 0.95)"
          : "rgba(224, 242, 254, 0.95)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
