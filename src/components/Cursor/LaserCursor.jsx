import { useEffect, useState } from "react";

export default function LaserCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: "20px",
        height: "20px",
        background: "rgba(0,255,255,0.8)",
        borderRadius: "50%",
        boxShadow: "0 0 10px cyan, 0 0 20px cyan, 0 0 40px cyan",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.05s linear",
        zIndex: 9999,
      }}
    />
  );
}
