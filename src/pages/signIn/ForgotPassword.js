import React from "react";
import CarouselComp from "./components/Carousel";
import IMAGE from "../../assets/Images/forgot_password.png";
import SaveButton from "../../components/button/SaveButton";
const ForgotPassword = () => {
  return (
    <>
      <div className="md:flex relative left-0 right-0 overflow-x-hidden">
        {/* {/ left design /} */}
        <div className="h-screen w-screen md:w-[50%] items-center">
          <div>
            <div>
              <CarouselComp />
            </div>
          </div>
        </div>
        {/* {/ right design /} */}
        <div className="flex justify-center items-center h-screen w-screen md:w-[50%]  bg-[#0072CE] ">
          <div className="lg:w-[420px] md:w-[330px] w-[250px] py-5 md:py-10 px-5 md:px-9 lg:px-10 rounded-[16px] shadow formFont bg-white md:h-auto">
            <div className="text-[#0072CE] text-md md:text-xl font-semibold">
              Forgot Password
            </div>
            <div className="text-[#A1A8CA] text-xs md:text-sm mt-2">
              Enter your registered email below to receive password reset
              instruction
            </div>
            <div className="flex justify-center items-center my-6">
              <img src={`${IMAGE}`} alt=" " />
            </div>
            <div class="relative z-0 w-full mb-5"></div>
            <div class="input_wrap">
              <input
                type="text"
                required
                className="border border-[#0072CE] text-[#0072CE] outline-none p-1 md:px-2 lg:px-3 py-1.5 md:py-2 text-[9px] md:text-[13px] rounded-md w-full md:mb-2 mb-0 font-[500] tracking-[0.5px]"
              />
              <label>Password</label>
            </div>

            <div className="text-center md:my-3 lg:my-4 my-3">
              <SaveButton
                title={"Reset password"}
                className={
                  "text-white bg-primary w-full px-1 md:px-2 py-1.5 md:py-2 lg:py-2.5 rounded-full  font-[500] text-xs md:text-[16px] tracking-wide"
                }
              />
            </div>
            <div className="text-[13px] font-semibold text-center">
              Remember password?{" "}
              <span className="text-[#0072CD]"> Sign in</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
