import React from "react";
import comingSoonImg from "../../assets/Images/ComingSoon.svg";

const CommingSoon = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-6 px-4">
      <div className="md:w-[35%] h-1/2 xs:w-[70%] mb-2 mt-7">
        <img className="" src={comingSoonImg} alt="Coming soon page" />
      </div>

      <div className="md:text-5xl xs:text-3xl text-black font-bold mt-14 text-center mb-3">
       Coming soon!
      </div>
      <div className="mb-3 text-base text-gray-500  opacity-[0.8] font-medium my-4 md:w-[40%] xs:w-[50%] text-center">
      We are working to release this feature shortly. Please bear with us.
      </div>
       

    </div>
  );
};
export default CommingSoon;
