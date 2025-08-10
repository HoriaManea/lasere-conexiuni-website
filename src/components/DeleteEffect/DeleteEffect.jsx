import { useState, useEffect } from "react";
import Particles from "react-tsparticles";

export default function DeleteEffect() {
  const [clickPos, setClickPos] = useState(null);

  useEffect(() => {
    if (clickPos) {
      const timeout = setTimeout(() => setClickPos(null), 1000);
      return () => clearTimeout(timeout);
    }
  }, [clickPos]);

  const handleClick = (e) => {
    console.log("Clicked at:", e.clientX, e.clientY);
    setClickPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <style>{`
        .pulse {
          position: fixed;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(0, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          animation: pulseAnimation 1s ease-out;
          pointer-events: none;
          z-index: 1000000;
        }

        @keyframes pulseAnimation {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }
      `}</style>

      <div
        onClick={handleClick}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          cursor: "pointer",
          pointerEvents: "none",
          zIndex: 999999,
        }}
      >
        {clickPos && (
          <>
            <div
              className="pulse"
              style={{
                left: clickPos.x,
                top: clickPos.y,
              }}
            />
            <div
              style={{
                position: "fixed",
                left: clickPos.x,
                top: clickPos.y,
                width: 150,
                height: 150,
                pointerEvents: "auto",
                transform: "translate(-50%, -50%)",
                zIndex: 1000000,
              }}
            >
              <Particles
                options={{
                  fullScreen: false,
                  particles: {
                    number: { value: 30, density: { enable: false } },
                    color: { value: ["#00ffff", "#00bfff", "#00e5ff"] },
                    shape: { type: "circle" },
                    opacity: {
                      value: 0.8,
                      animation: { enable: true, speed: 2, minimumValue: 0 },
                    },
                    size: {
                      value: { min: 2, max: 5 },
                      animation: { enable: true, speed: 6, minimumValue: 0.1 },
                    },
                    move: {
                      enable: true,
                      speed: 12,
                      direction: "none",
                      random: true,
                      straight: false,
                      outModes: { default: "destroy" },
                      attract: { enable: false },
                    },
                  },
                  emitters: {
                    direction: "none",
                    life: { count: 1, duration: 0.5 },
                    rate: { quantity: 30, delay: 0 },
                    size: { width: 150, height: 150 },
                    position: { x: 50, y: 50 },
                  },
                }}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
