import React from 'react';

const FloatingFlowers = () => {
  // Generate 20 flowers with random positions and animations
  const flowers = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute animate-float opacity-15"
          style={{
            left: flower.left,
            top: flower.top,
            animationDelay: flower.animationDelay,
            transform: `rotate(${flower.rotation}deg) scale(${flower.scale})`,
          }}
        >
          <svg
            width="48"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 4C12 4 14 6 14 8C14 10 12 12 12 12C12 12 10 10 10 8C10 6 12 4 12 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 12C12 12 14 14 14 16C14 18 12 20 12 20C12 20 10 18 10 16C10 14 12 12 12 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12C4 12 6 14 8 14C10 14 12 12 12 12C12 12 10 10 8 10C6 10 4 12 4 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 12C12 12 14 10 16 10C18 10 20 12 20 12C20 12 18 14 16 14C14 14 12 12 12 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingFlowers;