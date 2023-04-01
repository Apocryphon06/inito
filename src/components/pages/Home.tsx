// import React from "react";
import Header from "../Header";
import hero from "../assets/images/hero.svg";

import thisWeek from "../assets/brands/thisWeek.svg";
import entrepreneur from "../assets/brands/entrepreneur.svg";
import forbes from "../assets/brands/forbes.svg";
import bloomberg from "../assets/brands/bloomberg.svg";
import washington from "../assets/brands/washington.svg";

const Separator = () => {
  return (
    <div className="flex lg:justify-start justify-center items-center my-5">
      <svg
        width="261"
        height="7"
        viewBox="0 0 261 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="261" height="7" rx="3.5" fill="#1F94AA" />
      </svg>
    </div>
  );
};

function Home() {
  return (
    <div>
      <Header />
      <div className="grid lg:grid-flow-col grid-flow-row justify-between items-center bg-[#F7F7FE]">
        <div className="relative lg:left-[90px] p-5 lg:text-start text-center ">
          <p className="lg:text-5xl text-4xl text-[#112D35] lg:w-[493px] font-bold">
            Track your fertility hormones at home, <br />
            in 5 minutes.
          </p>
          <Separator />
          <p className="text-base text-[#112D35] lg:w-[400px] font-light">
            Get accurate results of Estrogen, LH and Progesterone with Inito,
            the all-in-one, FDA-registered fertility monitor.
          </p>

          <br />
          <button className="bg-cyan text-white font-medium text-base rounded-full w-[167px] h-[51px]">
            Learn more
          </button>
        </div>
        <img src={hero} alt={hero} />
      </div>

      <div className="mt-[120px]">
        <p className="uppercase text-2xl text-[#c4c4c4] text-center">
          As Seen on
        </p>

        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-[150px] gap-10 my-10">
          <img src={thisWeek} alt={thisWeek} />
          <img src={entrepreneur} alt={entrepreneur} />
          <img src={forbes} alt={forbes} />
          <img src={bloomberg} alt={bloomberg} />
          <img src={washington} alt={washington} />
        </div>
      </div>
    </div>
  );
}

export default Home;
