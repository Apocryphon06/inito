import React from "react";
import logo from "./assets/logo.svg";
import menu from "./assets/icons/menu.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="lg:px-[90px] px-5 flex flex-row justify-between items-center py-8">
      <img onClick={() => navigate("/")} className="cursor-pointer" src={logo} alt={logo} />

      <div className="lg:flex hidden items-center gap-10">
        {["About", "Stories", "Blog", "FAQ", "Contacts"].map((item: any) => (
          <p className="text-xl font-light text-[#112D35] cursor-pointer">
            {item}
          </p>
        ))}

        <button className="bg-cyan w-[202px] h-[50px] text-white font-medium rounded-full ">
          Get the inito kit
        </button>
      </div>

      <img className="lg:hidden block cursor-pointer" src={menu} alt={menu} />
    </div>
  );
}

export default Header;
