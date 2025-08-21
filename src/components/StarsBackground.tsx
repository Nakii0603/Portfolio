import React from "react";

const StarsBackground = ({ isDarkMode }: any) => {
  if (!isDarkMode) return null;
  return <div className="stars"></div>;
};

export default StarsBackground;
