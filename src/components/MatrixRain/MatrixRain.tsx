import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  opacity?: number;
  fontSize?: number;
  color?: string;
}

const MatrixRain = ({ opacity = 0.15, fontSize = 14, color = '#00ff41' }: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let columns: number;
    let drops: number[];

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFabcdef{}[]<>/\\|=+-*&^%$#@!';

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1).map(() => Math.random() * -100);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.fillStyle = `rgba(10, 10, 15, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Vary brightness for depth effect
        const brightness = Math.random();
        if (brightness > 0.95) {
          ctx.fillStyle = '#ffffff';
        } else if (brightness > 0.8) {
          ctx.fillStyle = color;
        } else {
          ctx.fillStyle = `rgba(0, 255, 65, ${0.3 + brightness * 0.4})`;
        }

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [fontSize, color]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity }}
    />
  );
};

export default MatrixRain;
