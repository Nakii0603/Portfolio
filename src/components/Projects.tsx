import React from "react";
import { DarkModeType } from "../type/Types";
import { dashboard, aylay, pepsi, school } from "@/data/constants";

export default function Projects({ isDarkMode }: DarkModeType) {
  const redirectAylay = () => {
    window.open("https://www.aylay.mn/");
  };
  const redirectDashboard = () => {
    window.open("https://dashboard-sigma-navy-62.vercel.app/dashboard/users");
  };
  const redirectPepsi = () => {
    window.open("https://pepsi-porfolio.vercel.app/");
  };
  const redirectSchool = () => {
    window.open("https://school-web-eight-ashy.vercel.app/");
  };
  const redirectPepMobile = () => {
    window.open("https://apps.apple.com/mn/app/fizz-point/id6745452290");
  };
  const redirectAylayMobile = () => {
    window.open("https://apps.apple.com/mn/app/aylay/id6749126660");
  };
  return (
    <div
      id="project"
      className={`p-4 flex gap-3  flex-col items-center  ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <h2
        className={`text-[42px] font-semibold mb-[20px] max-md:text-[32px] max-md:mt-[12px]  ${
          isDarkMode ? "text-white" : ""
        }`}
      >
        Works
      </h2>
      <div className="flex justify-between gap-4 mb-12 max-xl:flex-col max-xl:gap-10 max-md:gap-4">
        <div className="flex gap-4 max-xl:gap-10 max-sm:flex-col max-md:gap-4">
          <div
            onClick={redirectDashboard}
            className={`bg-[#171721]  p-4 gap-4 flex flex-col rounded-[12px] w-[300px] h-[320px] ${
              isDarkMode
                ? "text-white project"
                : "bg-white border-[2px] projectWhite border-[#854ce6] border-[solid]"
            }`}
          >
            <div className="dashboard"></div>
            <div className="flex flex-wrap gap-3">
              {dashboard.map((item, index) => (
                <p
                  key={index}
                  className={`rounded-8px w-fit px-2 py-[2px] rounded-[50px] text-[#854CE6] bg-[#854CE615] ${
                    isDarkMode ? "text-[#854CE6] bg-[#854CE615]" : ""
                  }`}
                >
                  {item.tech}
                </p>
              ))}
            </div>
            <p
              className={` text-[20px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Admin dashboard
            </p>
          </div>
          <div
            onClick={redirectAylay}
            className={`bg-[#171721]  p-4 gap-4 flex flex-col rounded-[12px] w-[300px] h-[320px] ${
              isDarkMode
                ? "text-white project"
                : "bg-white projectWhite border-[2px] border-[#854ce6] border-[solid]"
            }`}
          >
            <div className="aylay"></div>
            <div className="flex flex-wrap gap-3">
              {aylay.map((item, index) => (
                <p
                  key={index}
                  className={`rounded-8px w-fit px-2 py-[2px] rounded-[50px] text-[#854CE6] bg-[#854CE615] ${
                    isDarkMode ? "text-[#854CE6] bg-[#854CE615]" : ""
                  }`}
                >
                  {item.tech}
                </p>
              ))}
            </div>
            <p
              className={` text-[20px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Aylay.mn
            </p>
          </div>
        </div>
        <div className="flex gap-4 max-xl:gap-10 max-sm:flex-col max-md:gap-4">
          <div
            onClick={redirectPepsi}
            className={`bg-[#171721]  p-4 gap-4 flex flex-col rounded-[12px] w-[300px] h-[320px] ${
              isDarkMode
                ? "text-white project"
                : "bg-white projectWhite border-[2px] border-[#854ce6] border-[solid]"
            }`}
          >
            <div className="pepsi"></div>
            <div className="flex flex-wrap gap-3">
              {pepsi.map((item, index) => (
                <p
                  key={index}
                  className={`rounded-8px w-fit px-2 py-[2px] rounded-[50px] text-[#854CE6] bg-[#854CE615] ${
                    isDarkMode ? "text-[#854CE6] bg-[#854CE615]" : ""
                  }`}
                >
                  {item.tech}
                </p>
              ))}
            </div>
            <p
              className={` text-[20px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Pepsi
            </p>
          </div>
          <div
            onClick={redirectSchool}
            className={`bg-[#171721]  p-4 gap-4 flex flex-col rounded-[12px] w-[300px] h-[320px] ${
              isDarkMode
                ? "text-white project"
                : "bg-white projectWhite border-[2px] border-[#854ce6] border-[solid]"
            }`}
          >
            <div className="school"></div>
            <div className="flex flex-wrap gap-3">
              {school.map((item, index) => (
                <p
                  key={index}
                  className={`rounded-8px w-fit px-2 py-[2px] rounded-[50px] text-[#854CE6] bg-[#854CE615] ${
                    isDarkMode ? "text-[#854CE6] bg-[#854CE615]" : ""
                  }`}
                >
                  {item.tech}
                </p>
              ))}
            </div>
            <p
              className={` text-[20px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              School website
            </p>
          </div>
          {/* <div
            onClick={redirectEcommerce}
            className={`bg-[#171721]  p-4 gap-4 flex flex-col rounded-[12px] w-[300px] ${
              isDarkMode ? "text-white project" : "bg-white projectWhite border-[2px] border-[#854ce6] border-[solid]"
            }`}
          >
            <div className="eCommerce"></div>
            <div className="flex flex-wrap gap-3">
              {ecommerce.map((item, index) => (
                <p
                  key={index}
                  className={`rounded-8px w-fit px-2 py-[2px] rounded-[50px] text-[#854CE6] bg-[#854CE615] ${
                    isDarkMode ? "text-[#854CE6] bg-[#854CE615]" : ""
                  }`}
                >
                  {item.tech}
                </p>
              ))}
            </div>
            <p className={` text-[20px] ${isDarkMode ? "text-white" : "text-black"}`}>ECommerce</p>
          </div> */}
          {/* <div
            onClick={redirectHRMS}
            className={`bg-[#171721] p-4 gap-4 flex flex-col rounded-[12px] w-[300px] ${
              isDarkMode ? "text-white project" : "bg-white projectWhite border-[2px] border-[#854ce6] border-[solid]"
            }`}
          >
            <div className="hrms"></div>
            <div className="flex flex-wrap gap-3">
              {hrms.map((item, index) => (
                <p
                  key={index}
                  className={`rounded-8px w-fit px-2 py-[2px] rounded-[50px] text-[#854CE6] bg-[#854CE615] ${
                    isDarkMode ? "text-[#854CE6] bg-[#854CE615]" : ""
                  }`}
                >
                  {item.tech}
                </p>
              ))}
            </div>
            <p className={` text-[20px] ${isDarkMode ? "text-white" : "text-black"}`}>HRMS</p>
          </div> */}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <div className=" cursor-pointer" onClick={redirectAylayMobile}>
          <img
            className="max-w-[300px] w-full justify-around"
            src="/aylayPhone.png"
            alt=""
          />
        </div>
        <div className=" cursor-pointer" onClick={redirectPepMobile}>
          <img
            className="max-w-[300px] w-full justify-around"
            src="/pepPhone.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
