import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
  
    <div className="md:w-[672px] mx-auto lg:pt-36 ">
      <header className="flex-col">
        <h1 className="text-center tracking-[-0.012em] font-extrabold  text-5xl leading-[48px]">
          Information you need during on-call emergencies
        </h1>

        <h5 className="text-md mt-6  font-normal text-[#D9D9D9] leading-[18px] text-center ">
          Quickly link new on-call tickets to similar past incidents and their
          solutions. All directly in Slack the moment an incident happens.
        </h5>
      </header>
      <button className="bg-[#FAFAFA] my-12 px-4 py-1 flex items-center justify-center text-center max-w-fit rounded-[6px] mx-auto ">
        <span className="flex">
          <p className="text-[#18181B]">Get Started</p>
          <svg
            width="6"
            className="dark:text-white my-2 ml-2.5"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9L5 5L1 1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* hero image */}
      
    </div>
    <Image width={1024} height={623} className="mx-auto" src="/images/image.png" alt="Programming Pathshala"/>
    </>
  );
};

export default Hero;
