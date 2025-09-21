import React, { useEffect, useState } from "react";

const StarsBackground = ({ isDarkMode }: any) => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!isDarkMode) {
      setStars([]);
      return;
    }

    // Generate consistent stars using a seeded approach
    const generateStars = () => {
      const starsArray = [];
      for (let i = 0; i < 150; i++) {
        // Use a simple seeded random function for consistency
        const seed = i * 12345;
        const random1 = (Math.sin(seed) * 10000) % 1;
        const random2 = (Math.sin(seed + 1) * 10000) % 1;
        const random3 = (Math.sin(seed + 2) * 10000) % 1;
        const random4 = (Math.sin(seed + 3) * 10000) % 1;
        const random5 = (Math.sin(seed + 4) * 10000) % 1;

        const size = Math.abs(random1) * 4 + 2; // 2-6px
        const left = Math.abs(random2) * 100;
        const top = Math.abs(random3) * 100;
        const animationDelay = Math.abs(random4) * 3; // 0-3s delay
        const animationDuration = Math.abs(random5) * 4 + 2; // 2-6s duration

        starsArray.push(
          <div
            key={i}
            className="star"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${animationDelay}s`,
              animationDuration: `${animationDuration}s`,
            }}
          />
        );
      }
      return starsArray;
    };

    setStars(generateStars());
  }, [isDarkMode]);

  if (!isDarkMode) return null;

  return <div className="stars-background">{stars}</div>;
};

export default StarsBackground;
