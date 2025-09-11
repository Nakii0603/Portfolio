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
      className={`group relative cursor-pointer rounded-[12px] w-[300px] h-[320px] transition-all duration-300 overflow-hidden
        ${
          isDarkMode
            ? "bg-[#171721] text-white project"
            : "bg-white border-[2px] projectWhite border-[#854ce6] border-solid"
        }`}
    >
      {/* CONTENT WRAPPER — hover үед дотоод контентыг бүдгэрүүлнэ */}
      <div className="p-4 gap-4 flex flex-col h-full transition-all duration-300 group-hover:blur-sm group-hover:scale-[0.99]">
        {/* Thumbnail / Hero */}
        <div className={imageClass}></div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-3 z-10">
          {tech.map((item, index) => (
            <p
              key={index}
              className="rounded-[50px] w-fit px-2 py-[2px] text-[#854CE6] bg-[#854CE615]"
            >
              {item.tech}
            </p>
          ))}
        </div>

        {/* Title */}
        <p
          className={`text-[20px] ${
            isDarkMode ? "text-white" : "text-black"
          } z-10`}
        >
          {title}
        </p>
      </div>

      {/* HOVER OVERLAY — ард тал ба картын арын бүхнийг бүдэгрүүлнэ */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bg-black/60 backdrop-blur-md`}
      />

      {/* DESCRIPTION PANEL — доороос гарч ирнэ */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 opacity-0
                   group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300
                   p-4"
      >
        <div className="rounded-[10px] backdrop-blur-sm bg-black/50 p-3">
          <p className="text-white text-sm leading-snug">{desc}</p>
        </div>
      </div>
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
      className={`p-4 flex gap-3 flex-col items-center ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <h2
        className={`text-[42px] font-semibold mb-[20px] max-md:text-[32px] max-md:mt-[12px] ${
          isDarkMode ? "text-white" : ""
        }`}
      >
        Works
      </h2>

      <div className="flex flex-wrap gap-4 justify-center lg:justify-center">
        {/* LEFT: 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Admin dashboard"
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
            title="Pepsi"
            tech={pepsi}
            imageClass="pepsi"
            onClick={redirectPepsi}
            isDarkMode={isDarkMode}
            desc={blurbs.pepsi}
          />

          <ProjectCard
            title="School website"
            tech={school}
            imageClass="school"
            onClick={redirectSchool}
            isDarkMode={isDarkMode}
            desc={blurbs.school}
          />
        </div>

        {/* RIGHT: phones */}
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          <div className="cursor-pointer" onClick={redirectAylayMobile}>
            <img
              className="max-w-[320px] w-full object-contain"
              src="/aylayPhone.png"
              alt="Aylay Phone"
            />
          </div>
          <div className="cursor-pointer" onClick={redirectPepMobile}>
            <img
              className="max-w-[320px] w-full object-contain"
              src="/pepPhone.png"
              alt="Pepsi Phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
