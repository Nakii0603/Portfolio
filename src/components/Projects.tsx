import React from "react";
import { DarkModeType } from "../type/Types";
import { blog, ecommerce, food, hrms } from "@/data/constants";

export default function Projects({ isDarkMode }: DarkModeType) {
  const redirectEcommerce = () => {
    window.open("https://ecommerce-mo.vercel.app/");
  };
  const redirectFood = () => {
    window.open("https://food-delivery-mo.vercel.app/");
  };
  const redirectBlog = () => {
    window.open("https://blogwebsite-ruddy.vercel.app/");
  };
  const redirectHRMS = () => {
    window.open("https://intern-hrms-dashboard-prod-pinecone-studio.vercel.app/employee-details");
  };
  return (
    <div
      id="project"
      className={`p-4 flex gap-3 w-[100vw] flex-col items-center  ${isDarkMode ? "bg-black" : "bg-white"}`}
    >
      <h2 className={`text-[20px]  ${isDarkMode ? "text-white" : ""}`}>Works</h2>
      <div className="flex justify-between gap-2">
        <div
          onClick={redirectEcommerce}
          className={`bg-[#171721] p-4 gap-4 flex flex-col rounded-[12px] w-[300px] ${isDarkMode ? "text-white" : ""}`}
        >
          <div className="eCommerce"></div>
          <div className="flex flex-wrap gap-3">
            {hrms.map((item, index) => (
              <p
                key={index}
                className={`rounded-8px w-fit px-2 py-[2px] rounded-[50px] ${
                  isDarkMode ? "text-[#854CE6] bg-[#854CE615]" : ""
                }`}
              >
                {item.tech}
              </p>
            ))}
          </div>
          <p className={` text-[20px] ${isDarkMode ? "text-white" : "text-black"}`}>ECommerce</p>
        </div>
        <div
          onClick={redirectFood}
          className={`bg-[#171721] p-4 gap-4 flex flex-col rounded-[12px] w-[300px] ${isDarkMode ? "text-white" : ""}`}
        >
          <div className="eCommerce"></div>
          <div className="flex flex-wrap gap-3">
            {food.map((item, index) => (
              <p
                key={index}
                className={`rounded-8px w-fit px-2 py-[2px] rounded-[50px] ${
                  isDarkMode ? "text-[#854CE6] bg-[#854CE615]" : ""
                }`}
              >
                {item.tech}
              </p>
            ))}
          </div>
          <p className={` text-[20px] ${isDarkMode ? "text-white" : "text-black"}`}>Food Delivery</p>
        </div>
        <div
          onClick={redirectBlog}
          className={`bg-[#171721] p-4 gap-4 flex flex-col rounded-[12px] w-[300px] ${isDarkMode ? "text-white" : ""}`}
        >
          <div className="eCommerce"></div>
          <div className="flex flex-wrap gap-3">
            {blog.map((item, index) => (
              <p
                key={index}
                className={`rounded-8px w-fit px-2 py-[2px] rounded-[50px] ${
                  isDarkMode ? "text-[#854CE6] bg-[#854CE615]" : ""
                }`}
              >
                {item.tech}
              </p>
            ))}
          </div>
          <p className={` text-[20px] ${isDarkMode ? "text-white" : "text-black"}`}>Blog site</p>
        </div>
        <div
          onClick={redirectHRMS}
          className={`bg-[#171721] p-4 gap-4 flex flex-col rounded-[12px] w-[300px] ${isDarkMode ? "text-white" : ""}`}
        >
          <div className="eCommerce"></div>
          <div className="flex flex-wrap gap-3">
            {ecommerce.map((item, index) => (
              <p
                key={index}
                className={`rounded-8px w-fit px-2 py-[2px] rounded-[50px] ${
                  isDarkMode ? "text-[#854CE6] bg-[#854CE615]" : ""
                }`}
              >
                {item.tech}
              </p>
            ))}
          </div>
          <p className={` text-[20px] ${isDarkMode ? "text-white" : "text-black"}`}>HRMS</p>
        </div>
      </div>
    </div>
  );
}
