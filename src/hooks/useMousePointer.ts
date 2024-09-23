import { useState, useEffect } from "react";

const useMousePointer = () => {
  const [mousePointer, setMousePointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMovement = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      setMousePointer({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  return mousePointer;
};

export default useMousePointer;
