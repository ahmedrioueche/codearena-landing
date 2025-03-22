"use client";
import React from "react";

const StarBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Stars */}
      {Array.from({ length: 70 }).map((_, i) => {
        const duration = Math.random() * 40 + 30; // Random duration between 30s and 70s (slower)
        const delay = Math.random() * 5; // Random delay between 0s and 5s
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `twinkle ${
                Math.random() * 5 + 5
              }s infinite ${delay}s, moveX ${duration}s linear infinite ${delay}s`,
            }}
          />
        );
      })}

      {/* Larger Stars */}
      {Array.from({ length: 10 }).map((_, i) => {
        const duration = Math.random() * 40 + 30; // Random duration between 30s and 70s (slower)
        const delay = Math.random() * 5; // Random delay between 0s and 5s
        return (
          <div
            key={`large-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${
                Math.random() * 7 + 3
              }s infinite ${delay}s, moveX ${duration}s linear infinite ${delay}s`,
            }}
          />
        );
      })}

      {/* Asteroids/Planets */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={`asteroid-${i}`}
          className="absolute bg-gradient-to-br from-gray-400 to-gray-700 rounded-full blur-sm opacity-30"
          style={{
            width: `${Math.random() * 30 + 15}px`,
            height: `${Math.random() * 30 + 15}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Nebula Effect */}
      <div
        className="absolute blur-3xl opacity-20"
        style={{
          width: "70%",
          height: "60%",
          top: "5%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(114, 9, 183, 0.3) 0%, rgba(76, 201, 240, 0.1) 70%, rgba(1, 28, 55, 0) 100%)",
        }}
      />
      <div
        className="absolute blur-3xl opacity-10"
        style={{
          width: "50%",
          height: "40%",
          bottom: "10%",
          left: "5%",
          background:
            "radial-gradient(circle, rgba(76, 201, 240, 0.2) 0%, rgba(114, 9, 183, 0.1) 70%, rgba(1, 28, 55, 0) 100%)",
        }}
      />

      {/* Global style for animations */}
      <style jsx global>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes moveX {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
