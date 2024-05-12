import React from "react";

export default function Articles({ isDarkMode }:any) {
  return (
    <div>
      <div>fghj</div>
      <div>fghj</div>
      <p className={`${isDarkMode ? "text-black" : "text-white"}`}>Project</p>
    </div>
  );
}
