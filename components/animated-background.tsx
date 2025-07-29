"use client";

import { useEffect } from "react";

export default function AnimatedBackground() {
  useEffect(() => {
    const canvas = document.getElementById("tech-canvas") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particles for network effect
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles - responsive to screen size
    const particleCount = Math.floor((canvas.width * canvas.height) / 45000);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.25,
      });
    }

    // Binary rain effect
    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Floating code symbols
    const codeSymbols = [
      "{}",
      "[]",
      "<>",
      "/>",
      "()",
      ";;",
      "&&",
      "||",
      "==",
      "!=",
      "=>",
      "++",
      "--",
      "⌗",
      "⌫",
      "⌥",
      "",
      "ⓒ",
      "π",
      "⌘",
      "⌥",
      "⌃",
      "⌥",
    ];
    const floatingSymbols: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      symbol: string;
      opacity: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    // Create floating symbols - responsive to screen size
    const symbolCount = Math.floor((canvas.width * canvas.height) / 120000);
    for (let i = 0; i < symbolCount; i++) {
      floatingSymbols.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        opacity: Math.random() * 0.35 + 0.25,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    let glitchTime = 0;
    let lastGlitch = Date.now();

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Get CSS custom property value for primary color
      const primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim();

      // Convert HSL to RGB for canvas
      const hslMatch = primaryColor.match(/(\d+)\s+(\d+)%\s+(\d+)%/);
      let r = 100,
        g = 100,
        b = 255; // fallback blue

      if (hslMatch) {
        const h = parseInt(hslMatch[1]) / 360;
        const s = parseInt(hslMatch[2]) / 100;
        const l = parseInt(hslMatch[3]) / 100;

        // HSL to RGB conversion
        const hue2rgb = (p: number, q: number, t: number) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };

        const adjustedL = Math.min(l + 0.1, 0.8);
        const q =
          adjustedL < 0.5 ? adjustedL * (1 + s) : adjustedL + s - adjustedL * s;
        const p = 2 * adjustedL - q;

        r = Math.round(hue2rgb(p, q, h + 1 / 3) * 255);
        g = Math.round(hue2rgb(p, q, h) * 255);
        b = Math.round(hue2rgb(p, q, h - 1 / 3) * 255);
      }

      // Draw and update particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity})`;
        ctx.fill();

        // Draw connections to nearby particles
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.65;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Floating code symbols
      floatingSymbols.forEach((symbol) => {
        symbol.x += symbol.vx;
        symbol.y += symbol.vy;
        symbol.rotation += symbol.rotationSpeed;

        // Wrap around
        if (symbol.x < -50) symbol.x = canvas.width + 50;
        if (symbol.x > canvas.width + 50) symbol.x = -50;
        if (symbol.y < -50) symbol.y = canvas.height + 50;
        if (symbol.y > canvas.height + 50) symbol.y = -50;

        // Draw symbol
        ctx.save();
        ctx.translate(symbol.x, symbol.y);
        ctx.rotate(symbol.rotation);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${symbol.opacity})`;
        ctx.font = "16px monospace";
        ctx.textAlign = "center";
        ctx.fillText(symbol.symbol, 0, 0);
        ctx.restore();
      });

      // Glitch effect
      const now = Date.now();
      if (now - lastGlitch > 3000 + Math.random() * 5000) {
        glitchTime = 200;
        lastGlitch = now;
      }

      if (glitchTime > 0) {
        // Random glitch rectangles
        for (let i = 0; i < 5; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const w = Math.random() * 100 + 50;
          const h = Math.random() * 20 + 5;

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.08)`;
          ctx.fillRect(x, y, w, h);
        }
        glitchTime -= 16;
      }

      // Grid overlay
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.04)`;
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Animate original blobs
    const blobs = document.querySelectorAll(".blob");
    const animateBlobs = () => {
      blobs.forEach((blob, index) => {
        const time = Date.now() * 0.0003;
        const x =
          Math.sin(time + index) * 30 + Math.sin(time * 1.5 + index) * 10;
        const y =
          Math.cos(time + index) * 20 + Math.cos(time * 0.8 + index) * 8;
        const scale = 1 + Math.sin(time * 2 + index) * 0.03;

        // Add slight glitch effect to blobs
        const glitchX = glitchTime > 0 ? (Math.random() - 0.5) * 5 : 0;
        const glitchY = glitchTime > 0 ? (Math.random() - 0.5) * 5 : 0;

        (blob as HTMLElement).style.transform = `translate(${x + glitchX}px, ${
          y + glitchY
        }px) scale(${scale})`;
      });
    };

    const blobInterval = setInterval(animateBlobs, 100);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(blobInterval);
    };
  }, []);

  return (
    <div className="animated-background js-only" aria-hidden="true">
      <canvas
        id="tech-canvas"
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
    </div>
  );
}
