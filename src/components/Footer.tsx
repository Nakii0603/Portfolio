// components/Footer.tsx
"use client";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/Nakii0603",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/natsagdorj",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:nakii.munkh@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "https://www.facebook.com/nakii.nakii.589/",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "https://twitter.com/nakii_dev",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/nakii_dev",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <footer
      className={`relative py-16 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-0 left-1/4 w-32 h-32 rounded-full opacity-10 ${
            isDarkMode ? "bg-purple-500" : "bg-blue-500"
          } blur-2xl`}
        ></div>
        <div
          className={`absolute bottom-0 right-1/4 w-40 h-40 rounded-full opacity-10 ${
            isDarkMode ? "bg-blue-500" : "bg-purple-500"
          } blur-2xl`}
        ></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        <div className="text-center">
          {/* Main Content */}
          <div className="mb-12">
            <h3
              className={`text-3xl font-bold mb-4 ${
                isDarkMode
                  ? "bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 bg-clip-text text-transparent"
              }`}
            >
              Let's Connect
            </h3>
            <p
              className={`text-lg max-w-2xl mx-auto mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Ready to collaborate or have a project in mind? Let's discuss how
              we can work together to bring your ideas to life.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode
                    ? "bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/30 hover:border-purple-500/30"
                    : "bg-white/50 hover:bg-gray-100/50 border border-gray-200/30 hover:border-purple-500/30"
                } backdrop-blur-sm`}
                title={link.name}
              >
                <link.icon
                  className={`text-2xl transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } ${link.color}`}
                />

                {/* Tooltip */}
                <div
                  className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDarkMode
                      ? "bg-gray-800 text-white"
                      : "bg-gray-900 text-white"
                  }`}
                >
                  {link.name}
                  <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                      isDarkMode ? "border-t-gray-800" : "border-t-gray-900"
                    }`}
                  ></div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div
            className={`p-6 rounded-2xl mb-8 ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20"
                : "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200/50"
            }`}
          >
            <p
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Get in Touch
            </p>
            <a
              href="mailto:nakii.munkh@gmail.com"
              className={`text-lg transition-colors duration-300 hover:scale-105 ${
                isDarkMode
                  ? "text-purple-300 hover:text-purple-200"
                  : "text-purple-600 hover:text-purple-700"
              }`}
            >
              nakii.munkh@gmail.com
            </a>
          </div>

          {/* Copyright */}
          <div
            className={`pt-8 border-t ${
              isDarkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              © 2024 Natsagdorj. All rights reserved. Built with Next.js and
              Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
