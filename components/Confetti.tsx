'use client';
import { useEffect, useState } from 'react';

const COLORS = ['#5b67f5', '#fb923c', '#10b981', '#f59e0b', '#ec4899', '#3b82f6', '#facc15', '#a855f7'];

type Particle = {
  id: number;
  side: 'left' | 'right';
  color: string;
  size: number;
  dx: number; // horizontal velocity (vw)
  dy: number; // vertical velocity (vh)
  rot: number;
  delay: number;
  shape: 'circle' | 'square' | 'rect';
};

function makeParticles(): Particle[] {
  const list: Particle[] = [];
  let id = 0;
  (['left', 'right'] as const).forEach((side) => {
    for (let i = 0; i < 35; i++) {
      const dir = side === 'left' ? 1 : -1;
      list.push({
        id: id++,
        side,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 6 + Math.floor(Math.random() * 8),
        dx: dir * (15 + Math.random() * 55), // 15–70 vw
        dy: -(35 + Math.random() * 45),      // -35 to -80 vh (upward)
        rot: Math.floor(Math.random() * 720 - 360),
        delay: Math.random() * 0.25,
        shape: (['circle', 'square', 'rect'] as const)[Math.floor(Math.random() * 3)],
      });
    }
  });
  return list;
}

export default function Confetti() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setParticles(makeParticles());
    const t = setTimeout(() => setShow(false), 3200);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden">
      {/* Sparkle bursts from the bottom corners */}
      <div className="absolute bottom-2 left-2 text-5xl animate-ping">🎉</div>
      <div className="absolute bottom-2 right-2 text-5xl animate-ping">🎊</div>

      {particles.map((p) => {
        const isLeft = p.side === 'left';
        const startStyle: React.CSSProperties = {
          position: 'absolute',
          bottom: '0.5rem',
          [isLeft ? 'left' : 'right']: '0.5rem',
          width: `${p.size}px`,
          height: p.shape === 'rect' ? `${p.size * 0.5}px` : `${p.size}px`,
          backgroundColor: p.color,
          borderRadius: p.shape === 'circle' ? '50%' : '2px',
          opacity: 0,
          animation: `confetti-${isLeft ? 'l' : 'r'}-${p.id} 2.4s cubic-bezier(.2,.6,.3,1) ${p.delay}s forwards`,
        };
        return (
          <span key={p.id} style={startStyle}>
            <style>{`
              @keyframes confetti-${isLeft ? 'l' : 'r'}-${p.id} {
                0%   { transform: translate(0,0) rotate(0deg); opacity: 1; }
                70%  { opacity: 1; }
                100% { transform: translate(${p.dx}vw, ${p.dy}vh) rotate(${p.rot}deg); opacity: 0; }
              }
            `}</style>
          </span>
        );
      })}
    </div>
  );
}
