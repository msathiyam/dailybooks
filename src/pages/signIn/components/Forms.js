import React from "react";
import Logo from "../../../assets/Images/DbLogo.png";
import Wave from "../../../assets/Images/Wave.png";

const Forms = ({ child, labelsData }) => {
  return (
    <div className="lg:w-[420px] md:w-[330px] w-[270px] py-5 md:py-8 lg:py-10 px-5 md:px-9 rounded-[16px] shadow formFont bg-white  md:h-auto">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img
            src={`${Logo}`}
            alt=""
            className="w-[35px] md:w-[38.4px] h-[42px] md:h-[46.81px]"
          />
        </div>
        <div className="md:text-2xl text-xl text-[#0072CE] tracking-[5px] font-[600] md:mt-2 mt-1">
          {" "}
          {labelsData?.title}
        </div>
      </div>
      <div className="flex lg:mt-6 md:mt-4 mt-2">
        <div className="md:text-[14px] text-[12px] font-[400] leading-[17.64px] text-[#757575] mr-1 ">
          {labelsData?.welcomeText}
        </div>
        <div>
          {" "}
          <img src={`${Wave}`} alt="" />
        </div>
      </div>
      {child}
    </div>
  );
};

export default Forms;
