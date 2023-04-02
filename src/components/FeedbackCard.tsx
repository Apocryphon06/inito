import { Rating } from "@mui/material";
import React from "react";
import particles from "./assets/shapes/particles.svg";
import infinity from "./assets/shapes/infinity.svg";

function FeedbackCard() {
  return (
    <React.Fragment>
      <div className="flex justify-end relative top-[60px] right-[50px]">
        <img src={particles} alt={particles} />
      </div>
      <div className="flex lg:w-[1190px] lg:m-auto lg:flex-row flex-col-reverse justify-around lg:items-center bg-[#F7F7FE] lg:p-5 p-7 lg:gap-0 gap-5 rounded-[40px] lg:h-[193px] m-5">
        <div className="">
          <div className="relative left-[-15px]">
            <Rating value={5} sx={{ scale: "0.8" }} />
          </div>
          <p className="text-base font-semibold text-[#112D35]">
            Krista William
          </p>
          <p className="text-sm font-medium text-[#88969A]">May 22, 2021</p>
        </div>

        <div className="lg:w-[805px]">
          <p className="text-lg font-bold text-[#112D35]">
            Inito tells you all you need to monitor your fertility
          </p>
          <p className="text-base text-[#3F555D] mt-[13px]">
            "I made comparisons with other brands to allow me to choose the
            better product better. Inito tests all three of the hormones - LH,
            Estrogen, and Progesterone all in one stick. How can other products
            ignore measuring progesterone? It’s a no brainer! You guys are tops.
            I highly recommend <span className="font-bold">Inito</span>"
          </p>
        </div>
      </div>

      <div className="relative lg:top-[-123px] top-[-144px] lg:left-[50px] left-[20px]"> 
        <img src={infinity} alt={infinity} className="rounded-bl-[40px]" />
      </div>
    </React.Fragment>
  );
}

export default FeedbackCard;
