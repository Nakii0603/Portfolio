// components/Footer.tsx
"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer
      className={`w-full py-6 mt-10 ${
        isDarkMode ? "bg-[#111]" : "bg-gray-100"
      } transition-colors`}
    >
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col items-center justify-center text-center">
        <p
          className={`text-sm mb-4 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          © {new Date().getFullYear()} Таны нэр. Бүх эрх хуулиар хамгаалагдсан.
        </p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Nakii0603"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-blue-500 transition-colors ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-blue-500 transition-colors ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            <FaLinkedin />
          </a>
          <a
            href="nakii.munkh@gmail.com"
            className={`hover:text-blue-500 transition-colors ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
