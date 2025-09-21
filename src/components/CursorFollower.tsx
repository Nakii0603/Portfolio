"use client";
import { useEffect, useState } from "react";

interface CursorFollowerProps {
  isDarkMode: boolean;
}

export default function CursorFollower({ isDarkMode }: CursorFollowerProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      >
        <div
          className={`w-4 h-4 rounded-full ${
            isDarkMode
              ? "bg-purple-400 shadow-lg shadow-purple-400/50"
              : "bg-purple-600 shadow-lg shadow-purple-600/50"
          }`}
        />
      </div>

      {/* Outer glow */}
      <div
        className={`fixed pointer-events-none z-40 transition-opacity duration-500 ${
          isVisible ? "opacity-30" : "opacity-0"
        }`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
      >
        <div
          className={`w-10 h-10 rounded-full ${
            isDarkMode
              ? "bg-purple-500 shadow-2xl shadow-purple-500/30"
              : "bg-purple-400 shadow-2xl shadow-purple-400/30"
          } blur-sm`}
        />
      </div>

      {/* Large outer ring */}
      <div
        className={`fixed pointer-events-none z-30 transition-opacity duration-700 ${
          isVisible ? "opacity-20" : "opacity-0"
        }`}
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
        }}
      >
        <div
          className={`w-16 h-16 rounded-full border-2 ${
            isDarkMode
              ? "border-purple-400 shadow-2xl shadow-purple-400/20"
              : "border-purple-500 shadow-2xl shadow-purple-500/20"
          } blur-sm`}
        />
      </div>
    </>
  );
}
