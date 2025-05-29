import React from "react";
import { profilePic } from "../assets";
import { aboutMe, resumeLink, socialMedia } from "../constants";
import { layout } from "../style";
import Button from "./Button";

const Footer = () => (
  <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4`}
    >
      <div className={`${layout.sectionInfo}`}>
        <h2 className="text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {aboutMe.name}
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          {aboutMe.tagLine}
        </p>
        <div className="flex flex-row mt-4">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              rel="noopener noreferrer"
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Resume PDF"
          >
            <Button styles="mt-10 mr-3" text="Resume" icon="AiOutlineFilePdf" />
          </a>
        </div>
      </div>

      <div className="md:ml-auto mt-10 md:mt-0">
        <img
          src={profilePic}
          alt="Sri Sudharsan"
          className="w-[200px] h-[200px] object-cover border-2 border-teal-200 rounded-full"
        />
      </div>
    </div>
  </footer>
);

export default Footer;
