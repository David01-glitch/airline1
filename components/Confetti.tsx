'use client';
import { useEffect, useState } from 'react';
// (useState retained for the tick counter that drives the continuous loop)

const COLORS = ['#5b67f5', '#fb923c', '#10b981', '#f59e0b', '#ec4899', '#3b82f6', '#facc15', '#a855f7'];

// ───── Cracker confetti from the two bottom corners ─────
type Particle = {
  id: number;
  side: 'left' | 'right';
  color: string;
  size: number;
  dx: number; // vw
  dy: number; // vh
  rot: number;
  delay: number;
  shape: 'circle' | 'square' | 'rect';
};

function makeConfetti(): Particle[] {
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
        dx: dir * (15 + Math.random() * 55),
        dy: -(35 + Math.random() * 45),
        rot: Math.floor(Math.random() * 720 - 360),
        delay: Math.random() * 0.25,
        shape: (['circle', 'square', 'rect'] as const)[Math.floor(Math.random() * 3)],
      });
    }
  });
  return list;
}

// ───── Radial fireworks (multiple bursts) ─────
type Burst = {
  id: number;
  cx: number; // viewport % across
  cy: number; // viewport % from top
  color: string;
  delay: number;
  particles: { angle: number; distance: number; color: string }[];
};

function makeBursts(): Burst[] {
  const bursts: Burst[] = [];
  const positions = [
    { cx: 25, cy: 22 },
    { cx: 75, cy: 18 },
    { cx: 50, cy: 12 },
    { cx: 35, cy: 35 },
    { cx: 65, cy: 30 },
  ];
  positions.forEach((p, i) => {
    const baseColor = COLORS[i % COLORS.length];
    const count = 24;
    const particles = Array.from({ length: count }, (_, k) => {
      const angle = (k * 360) / count + Math.random() * 10;
      const distance = 14 + Math.random() * 10;
      const color = Math.random() < 0.4 ? COLORS[Math.floor(Math.random() * COLORS.length)] : baseColor;
      return { angle, distance, color };
    });
    bursts.push({
      id: i,
      cx: p.cx,
      cy: p.cy,
      color: baseColor,
      delay: i * 0.35,
      particles,
    });
  });
  return bursts;
}

export default function Confetti({ active = true }: { active?: boolean }) {
  const [tick, setTick] = useState(0);

  // Re-fire bursts every ~1.6s while active. Animations overlap slightly so it looks continuous.
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setTick((t) => t + 1), 1600);
    return () => clearInterval(id);
  }, [active]);

  if (!active) return null;

  // Particle batches are regenerated each tick (fresh CSS animations).
  const confetti = makeConfetti();
  const bursts = makeBursts();

  return (
    <div key={tick} className="pointer-events-none fixed inset-0 z-[80] overflow-hidden">
      {/* ── Popper emojis at bottom corners ── */}
      <div className="absolute bottom-2 left-2 text-5xl animate-bounce">🎆</div>
      <div className="absolute bottom-2 right-2 text-5xl animate-bounce">🎇</div>

      {/* ── Radial firework bursts ── */}
      {bursts.map((b) => (
        <div
          key={`burst-${b.id}`}
          style={{
            position: 'absolute',
            left: `${b.cx}%`,
            top: `${b.cy}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Bright center flash */}
          <span
            style={{
              position: 'absolute',
              left: '-12px',
              top: '-12px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
              opacity: 0,
              animation: `firework-flash-${b.id} 1.6s ease-out ${b.delay}s forwards`,
            }}
          />
          <style>{`
            @keyframes firework-flash-${b.id} {
              0% { opacity: 0; transform: scale(0.2); }
              20% { opacity: 1; transform: scale(1.4); }
              60% { opacity: 0.6; transform: scale(1); }
              100% { opacity: 0; transform: scale(0.6); }
            }
          `}</style>
          {b.particles.map((p, i) => {
            const rad = (p.angle * Math.PI) / 180;
            const dx = Math.cos(rad) * p.distance;
            const dy = Math.sin(rad) * p.distance;
            const animName = `firework-${b.id}-${i}`;
            return (
              <span
                key={i}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '6px',
                  height: '6px',
                  marginLeft: '-3px',
                  marginTop: '-3px',
                  borderRadius: '50%',
                  background: p.color,
                  boxShadow: `0 0 6px ${p.color}`,
                  opacity: 0,
                  animation: `${animName} 1.6s cubic-bezier(.15,.6,.3,1) ${b.delay}s forwards`,
                }}
              >
                <style>{`
                  @keyframes ${animName} {
                    0%   { transform: translate(0,0) scale(0.4); opacity: 1; }
                    60%  { opacity: 1; }
                    100% { transform: translate(${dx}vw, ${dy}vh) scale(1); opacity: 0; }
                  }
                `}</style>
              </span>
            );
          })}
        </div>
      ))}

      {/* ── Cracker confetti from the bottom corners ── */}
      {confetti.map((p) => {
        const isLeft = p.side === 'left';
        const animName = `confetti-${isLeft ? 'l' : 'r'}-${p.id}`;
        const startStyle: React.CSSProperties = {
          position: 'absolute',
          bottom: '0.5rem',
          [isLeft ? 'left' : 'right']: '0.5rem',
          width: `${p.size}px`,
          height: p.shape === 'rect' ? `${p.size * 0.5}px` : `${p.size}px`,
          backgroundColor: p.color,
          borderRadius: p.shape === 'circle' ? '50%' : '2px',
          opacity: 0,
          animation: `${animName} 2.6s cubic-bezier(.2,.6,.3,1) ${p.delay}s forwards`,
        };
        return (
          <span key={`c-${p.id}`} style={startStyle}>
            <style>{`
              @keyframes ${animName} {
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
