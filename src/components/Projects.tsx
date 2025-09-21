import React from "react";
import { DarkModeType } from "../type/Types";
import { dashboard, aylay, pepsi, school } from "@/data/constants";

type CardProps = {
  title: string;
  tech: { tech: string }[];
  imageClass: string; // .dashboard, .aylay, .pepsi, .school
  onClick: () => void;
  isDarkMode: boolean;
  desc: string;
};

function ProjectCard({
  title,
  tech,
  imageClass,
  onClick,
  isDarkMode,
  desc,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer rounded-2xl w-full max-w-[350px] min-w-[300px] flex-shrink-0 h-[400px] transition-all duration-500 overflow-hidden transform hover:scale-105 hover:-translate-y-2
        ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500/50"
            : "bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200 hover:border-purple-500/50 shadow-lg hover:shadow-2xl"
        }`}
    >
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>

      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <div
          className={`${imageClass} w-full h-full transition-transform duration-500 group-hover:scale-110`}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-6 flex flex-col h-[calc(100%-12rem)]">
        {/* Title */}
        <h3
          className={`text-xl font-bold mb-3 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30"
            >
              {item.tech}
            </span>
          ))}
          {tech.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-500/20 text-gray-400 border border-gray-500/30">
              +{tech.length - 3}
            </span>
          )}
        </div>

        {/* Description preview */}
        <p
          className={`text-sm leading-relaxed flex-1 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {desc.length > 100 ? `${desc.substring(0, 100)}...` : desc}
        </p>
      </div>

      {/* Hover overlay with full description */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 flex items-center justify-center p-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">{desc}</p>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
              >
                {item.tech}
              </span>
            ))}
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
            View Project
          </button>
        </div>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-40"></div>
    </div>
  );
}

export default function Projects({ isDarkMode }: DarkModeType) {
  const redirectAylay = () => window.open("https://www.aylay.mn/");
  const redirectDashboard = () =>
    window.open("https://dashboard-sigma-navy-62.vercel.app/dashboard/users");
  const redirectPepsi = () => window.open("https://pepsi-porfolio.vercel.app/");
  const redirectSchool = () =>
    window.open("https://school-web-eight-ashy.vercel.app/");
  const redirectPepMobile = () =>
    window.open("https://apps.apple.com/mn/app/fizz-point/id6745452290");
  const redirectAylayMobile = () =>
    window.open("https://apps.apple.com/mn/app/aylay/id6749126660");

  // Товч танилцуулгууд (хүсвэл constants руу гаргаж болно)
  const blurbs = {
    dashboard:
      "Админы зориулалттай аналитик платформ. Хэрэглэгчийн удирдлага, real-time үзүүлэлт, борлуулалтын тайлан болон Chart.js-ийн динамик графикуудтай Next.js дээр бүтээгдсэн уян dashboard. Менежмент болон дата-д суурилсан шийдвэр гаргахад дэмжлэг үзүүлнэ.",

    aylay:
      "Монголын аялал жуулчлалд зориулсан ухаалаг travel платформ. Offline газрын зураг, AI-д суурилсан маршрутын санал болголт, зардлын тооцоолол, аяллын зөвлөгөө, аялалд бэлтгэх жагсаалт зэрэг иж бүрэн боломжтой. Аялагчид интернетгүй нөхцөлд ч найдвартай ашиглах боломжтой.",

    pepsi:
      "GN Beverages-ийн 'Fizz Point' брэндийн танилцуулга болон landing page прототип. Кампанит ажлын UI/UX туршилтын шийдэл, хэрэглэгчийн урамшуулал цуглуулах урсгал, лоялти онооны танилцуулга бүхий туршилтын загвар.",

    school:
      "Сургуулийн болон боловсролын хөтөлбөрийн танилцуулгын вэб сайт. Элсэлтийн мэдээлэл, хичээлийн хуваарь, мэдээ мэдээллийн модуль, онлайн бүртгэлийн хэсэгтэй. Сурагч, эцэг эх, багш нарт зориулсан нэг цогц мэдээллийн платформ.",
  };

  return (
    <div
      id="project"
      className={`relative py-20 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 ${
            isDarkMode ? "bg-purple-500" : "bg-blue-500"
          } blur-2xl`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-10 ${
            isDarkMode ? "bg-blue-500" : "bg-purple-500"
          } blur-2xl`}
        ></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-6xl font-bold mb-4 ${
              isDarkMode
                ? "bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 bg-clip-text text-transparent"
            }`}
            style={{ lineHeight: "1.2" }}
          >
            My Projects
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A showcase of my recent work and projects that demonstrate my skills
            and passion for development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <ProjectCard
            title="Admin Dashboard"
            tech={dashboard}
            imageClass="dashboard"
            onClick={redirectDashboard}
            isDarkMode={isDarkMode}
            desc={blurbs.dashboard}
          />

          <ProjectCard
            title="Aylay.mn"
            tech={aylay}
            imageClass="aylay"
            onClick={redirectAylay}
            isDarkMode={isDarkMode}
            desc={blurbs.aylay}
          />

          <ProjectCard
            title="Pepsi Campaign"
            tech={pepsi}
            imageClass="pepsi"
            onClick={redirectPepsi}
            isDarkMode={isDarkMode}
            desc={blurbs.pepsi}
          />

          <ProjectCard
            title="School Website"
            tech={school}
            imageClass="school"
            onClick={redirectSchool}
            isDarkMode={isDarkMode}
            desc={blurbs.school}
          />
        </div>

        {/* Mobile Apps Section */}
        <div className="text-center">
          <h3
            className={`text-2xl lg:text-3xl font-bold mb-8 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Mobile Applications
          </h3>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={redirectAylayMobile}
            >
              <div
                className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                  isDarkMode ? "shadow-purple-500/20" : "shadow-gray-500/20"
                }`}
              >
                <img
                  className="w-64 h-auto object-contain"
                  src="/aylayPhone.png"
                  alt="Aylay Mobile App"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold">Aylay Mobile</span>
                </div>
              </div>
            </div>

            <div
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={redirectPepMobile}
            >
              <div
                className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                  isDarkMode ? "shadow-blue-500/20" : "shadow-gray-500/20"
                }`}
              >
                <img
                  className="w-64 h-auto object-contain"
                  src="/pepPhone.png"
                  alt="Fizz Point Mobile App"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold">Fizz Point</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
