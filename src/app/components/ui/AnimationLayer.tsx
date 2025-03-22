"use client";
import React, { useEffect } from "react";

const AnimationLayer = () => {
  const asteroidDurations = Array.from(
    { length: 6 },
    () => `${8 + Math.random() * 5}s`
  );

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      {/* Falling Asteroids */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {asteroidDurations.map((duration, i) => (
          <div
            key={i}
            className="asteroid"
            style={{
              top: `-${20 + Math.random() * 10}%`,
              left: `${Math.random() * 90}%`,
              animationDuration: duration,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .asteroid {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
          animation: fall linear infinite;
        }

        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimationLayer;
