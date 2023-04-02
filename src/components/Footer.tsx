import React from "react";
import trusted from "./assets/icons/trusted.svg";
import shipping from "./assets/icons/shipping.svg";
import verified from "./assets/icons/verified.svg";

import facebook from "./assets/icons/facebook.svg";
import linkedin from "./assets/icons/linkedin.svg";
import youtube from "./assets/icons/youtube.svg";

import logo from "./assets/logo-white.svg";

import { nanoid } from "nanoid";

const details = [
  {
    id: nanoid(),
    desc: "TRUSTED BY 20,000+ COUPLES",
    icon: trusted,
  },
  {
    id: nanoid(),
    desc: "FREE US SHIPPING",
    icon: shipping,
  },
  {
    id: nanoid(),
    desc: "FDA-REGISTERED (HSA/FSA ELIGIBLE)",
    icon: verified,
  },
];

const socials = [facebook, youtube, linkedin];

function Footer() {
  return (
    <div className="bg-[#112D35] text-white relative bottom-0">
      <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-[112px] p-5 border-b border-gray-600">
        <div className="lg:flex hidden lg:flex-row flex-col items-center gap-[32px]">
          {details.map((item: any) => (
            <div key={item?.id} className="flex items-center gap-2">
              <img src={item?.icon} alt={item?.icon} />
              <p className="uppercase font-medium text-base">{item?.desc}</p>
            </div>
          ))}
        </div>

        <div className="lg:hidden flex flex-col gap-5">
          {details.map((item: any) => (
            <div key={item?.id} className="flex items-center gap-2">
              <img src={item?.icon} alt={item?.icon} />
              <p className="uppercase font-medium text-base">{item?.desc}</p>
            </div>
          ))}
        </div>
        <br />
        <div className="flex relative lg:left-[0.1px] left-[-95px] items-center gap-5 ">
          {socials.map((item) => (
            <img
              className="cursor-pointer"
              key={nanoid()}
              src={item}
              alt={item}
            />
          ))}
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-center lg:gap-[445px] items-center p-10">
        <div className="mt-[50px] lg:w-[112px] lg:block hidden ">
          <img src={logo} alt={logo} />
        </div>

        <div className="flex lg:flex-row flex-col lg:items-center gap-10">
          <img className="lg:hidden block w-[112px]" src={logo} alt={logo} />

          <div className="flex flex-col gap-2">
            <p className="font-bold text-base">Company</p>
            {["About", "Career", "Blog", "Contact"].map((item) => (
              <p key={nanoid()} className="text-base font-light opacity-80">
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-base">Support</p>

            {["FAQ", "Terms", "Privacy Policy", "Returns & Warranty"].map(
              (item: any) => (
                <p key={nanoid()} className="text-base font-light opacity-80">
                  {item}
                </p>
              )
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-base">Get in touch</p>
            {["+1 815-369-0989", "help@inito.com"].map((item: any) => (
              <p key={nanoid()} className="text-base font-light opacity-80">
                {item}
              </p>
            ))}

            <p className="lg:w-[231px] text-base font-light opacity-80">
              355 Bryant Street, Unit 403, San Francisco CA 94107
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
