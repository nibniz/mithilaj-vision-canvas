import { useEffect, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  opacity: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const trailIdRef = { current: 0 };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailIdRef.current++,
        opacity: 1,
      };

      setTrail((prev) => [...prev.slice(-10), newPoint]);

      // Fade out trail points
      setTimeout(() => {
        setTrail((prev) =>
          prev.map((point) =>
            point.id === newPoint.id
              ? { ...point, opacity: point.opacity * 0.7 }
              : point
          )
        );
      }, 100);

      // Remove after fade
      setTimeout(() => {
        setTrail((prev) => prev.filter((point) => point.id !== newPoint.id));
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: point.x,
            top: point.y,
            opacity: point.opacity * (1 - index / trail.length),
            transform: `translate(-50%, -50%) scale(${1 - index * 0.1})`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;

