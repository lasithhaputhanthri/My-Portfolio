import { useEffect, useRef } from "react";
import styles from "./InteractiveDotGrid.module.css";

const InteractiveDotGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates (client coords)
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    let isRunning = false;
    let settleCountdown = 60; // frames to keep running after mouse stops moving

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        render();
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      settleCountdown = 60;
      startAnimation();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
      settleCountdown = 60;
      startAnimation();
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      settleCountdown = 60;
      startAnimation();
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Grid configuration
    const spacing = 32; // Grid spacing in px
    const baseRadius = 1.6; // Increased rest dot radius for clear visibility
    const maxDistance = 160; // Wider interaction field around cursor
    const maxDisplacement = 7.0; // Responsive physical wave displacement

    // Detect theme
    let isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.getAttribute("data-theme") === "dark";
      settleCountdown = 60;
      startAnimation();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const render = () => {
      // Smooth fluid lerp for mouse tracking
      const dxMouse = mouse.targetX - mouse.x;
      const dyMouse = mouse.targetY - mouse.y;
      mouse.x += dxMouse * 0.10;
      mouse.y += dyMouse * 0.10;

      ctx.clearRect(0, 0, width, height);

      // Clean, elegant monochromatic palette with solid visibility
      // Dark mode: crisp white/silver dots
      // Light mode: crisp slate dots
      const rgb = isDark ? "255, 255, 255" : "30, 41, 59";
      const baseAlpha = isDark ? 0.16 : 0.15;
      const maxExtraAlpha = isDark ? 0.35 : 0.28; // clearly illuminates near cursor

      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      const maxDistSq = maxDistance * maxDistance;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = i * spacing;
          const originY = j * spacing;

          const dx = originX - mouse.x;
          const dy = originY - mouse.y;
          const distSq = dx * dx + dy * dy;

          let posX = originX;
          let posY = originY;
          let radius = baseRadius;
          let alpha = baseAlpha;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const linearFactor = 1 - dist / maxDistance; // 1 at center, 0 at boundary
            // Smoothstep curve for seamless, continuous transition
            const smooth = linearFactor * linearFactor * (3 - 2 * linearFactor);

            // Wave displacement away from cursor
            const angle = Math.atan2(dy, dx);
            const displacement = smooth * maxDisplacement;
            posX = originX + Math.cos(angle) * displacement;
            posY = originY + Math.sin(angle) * displacement;

            // Expand dot and smoothly boost illumination near cursor
            radius = baseRadius + smooth * 1.2;
            alpha = baseAlpha + smooth * maxExtraAlpha;
          }

          ctx.beginPath();
          ctx.arc(posX, posY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb}, ${alpha.toFixed(3)})`;
          ctx.fill();
        }
      }

      // Check if mouse is stationary and animation can idle to save CPU
      if (Math.abs(dxMouse) < 0.1 && Math.abs(dyMouse) < 0.1 && !mouse.active) {
        settleCountdown--;
      }

      if (settleCountdown > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    };

    // Initial render
    startAnimation();

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.dotGridCanvas} aria-hidden="true" />;
};

export default InteractiveDotGrid;
