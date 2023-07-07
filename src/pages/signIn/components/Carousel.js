import { Carousel } from "antd";
import React from "react";
import IMAGE1 from "../../../assets/Images/Adhere compliances.png";
import IMAGE2 from "../../../assets/Images/Manage your income.png";
import IMAGE3 from "../../../assets/Images/Track your payments.png";

const CarouselComp = ({ labelsData }) => {
  return (
    <Carousel autoplay className="h-screen bg-[#E1E9F4]">
      <div className="m-auto  md:top-8 top-4">
        <h1 className="md:text-[30px] text-[23px] text-[#0072CE] font-[600] text-center mt-7 md:mt-5 lg:mt-10">
          {labelsData?.onBoarding1}
        </h1>
        <div className="bg-white h-[300px] w-[300px] border rounded-[50%] m-auto md:h-[320px] md:w-[320px] lg:h-[400px] lg:w-[400px] mb-[30px] shadow-lg relative top-8 md:top-6">
          <img
            src={IMAGE1}
            className="m-auto md:w-auto md:h-auto h-[170px]  w-[170px] lg:mt-20 mt-12 md:mt-12"
            alt=""
          />
        </div>
      </div>

      <div className="m-auto  md:top-8 top-4">
        <h1 className="md:text-[30px] text-[23px] text-[#0072CE] font-[600] text-center mt-7 md:mt-5 lg:mt-10">
          {labelsData?.onBoarding2}
        </h1>
        <div className="bg-white h-[300px] w-[300px] border rounded-[50%] m-auto md:h-[320px] md:w-[320px] lg:h-[390px] lg:w-[390px] mb-[30px] shadow-lg relative top-8 md:top-6">
          <img
            src={IMAGE2}
            className="m-auto md:w-auto md:h-auto h-[170px]  w-[170px] lg:mt-20 mt-12 md:mt-12"
            alt=""
          />
        </div>
      </div>
      <div className="m-auto  md:top-8 top-4">
        <h1 className="md:text-[30px] text-[23px] text-[#0072CE] font-[600] text-center mt-7 md:mt-5 lg:mt-10">
          {labelsData?.onBoarding3}
        </h1>
        <div className="bg-white h-[300px] w-[300px] border rounded-[50%] m-auto md:h-[320px] md:w-[320px] lg:h-[390px] lg:w-[390px] mb-[30px] shadow-lg relative top-8 md:top-6">
          <img
            src={IMAGE3}
            className="m-auto md:w-auto md:h-auto h-[170px]  w-[170px] lg:mt-20 mt-12 md:mt-12"
            alt=""
          />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComp;
