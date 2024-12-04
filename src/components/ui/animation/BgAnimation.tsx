'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HexGridAnimation = () => {
  const hexGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hexagons = hexGridRef.current?.querySelectorAll('.hexagon');

    if (hexagons) {
      gsap.to(hexagons, {
        scale: 1.2,
        yoyo: true,
        repeat: -1,
        stagger: {
          grid: [50, 50], // Adjust for grid size
          from: 'center',
          amount: 3,
        },
        duration: 2,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <div className="hex-grid" ref={hexGridRef}>
      {[...Array(100)].map((_, i) => (
        <div key={i} className="hexagon" />
      ))}
      <style jsx>{`
        .hex-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
          gap: 5px;
          justify-content: center;
          align-items: center;
        }
        .hexagon {
          width: 5px;
          height: 5px;
          background: linear-gradient(45deg, #6a5acd, #ff1493);
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default HexGridAnimation;
