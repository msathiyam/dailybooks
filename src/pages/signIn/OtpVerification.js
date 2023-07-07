import React, { useEffect, useState } from "react";
import SaveButton from "../../components/button/SaveButton";
import CarouselComp from "./components/Carousel";
import Logo from "../../assets/images/DbLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";
import { SignUpAction } from "./redux/SigninSignup.action";
import { ErrorMessage, SuccessMessage } from "../../components/alerts/DbAlerts";
import { ToastError } from "../../components/alerts/DbAlerts";
import { post } from "../../api";
import { API_BASE_URL } from "../languages/redux/Languages.constants";
import { getAllLanguagelabels } from "../languages/redux/Languages.action";
const OtpVerification = () => {
  const param = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  const LanguageDataLabels = useSelector(
    (state) => state.LanguageReducer.getAllLanguageLabels
  );
  const [languageLabels, setLanguageLabels] = useState([]);
  const labelsData = languageLabels[0]?.labels;
  const handleSubmit = async () => {
    const data = {
      txnid: param.state.txnid,
      loginMobileNo: param.state.phoneNumber,
      loginEmailId: "",
      password: OTP,
    };
    const response = await post(
      `${process.env.REACT_APP_API_URL}`,
      `${"v1/auth/verify-credentials"}`,
      data
    );
    const result = await response.response.data[0];
    if (response) {
      sessionStorage.setItem("authToken", result?.AuthToken);
    }
    if (result?.AuthToken < 0) {
      ToastError.fire({
        icon: "error",
        title: "Please enter valid otp",
      });
    } else {
      SuccessMessage();
      navigate("/home");
    }
  };

  useEffect(() => {
    dispatch(getAllLanguagelabels("Web.SignIn", "English", "0"));
    setLanguageLabels([LanguageDataLabels]);
  }, [LanguageDataLabels.length]);

  return (
    <>
      <div className="md:flex relative left-0 right-0  overflow-x-hidden">
        {/* left design */}
        <div className="h-screen w-screen md:w-[50%] items-center">
          <div>
            <div>
              <CarouselComp labelsData={labelsData} />
            </div>
          </div>
        </div>
        {/* right design */}
        <div className="flex justify-center items-center h-screen w-screen md:w-[50%]  bg-[#0072CE]">
          <div className="lg:w-[420px] md:w-[330px] w-[270px] py-5 md:py-10 px-5 md:px-9 rounded-[16px] shadow formFont bg-white md:h-auto">
            <div className="flex flex-col justify-center items-center">
              <div>
                <img
                  src={`${Logo}`}
                  alt=""
                  className="w-[35px] md:w-[38.4px] h-[42px] md:h-[46.81px] "
                />
              </div>
              <div className="md:text-2xl text-xl text-[#0072CE] tracking-[5px] font-[600] md:mt-2 mt-1">
                {" "}
                {labelsData?.title}
              </div>
            </div>
            <div>
              <div className="md:mt-8 mt-6 font-semibold md:text-xl text-[16px]">
                {labelsData?.otpLabel1}
              </div>
              <div className="md:text-text-sm  text-[#979797] my-3 capitalize">
                {" "}
                {labelsData?.otpLabel2}
              </div>
              <div>
                <OTPInput
                  value={OTP}
                  onChange={setOTP}
                  autoFocus
                  OTPLength={4}
                  otpType="number"
                  disabled={false}
                  maxTime={false}
                  inputStyles={{
                    border: " 1px solid #979797",
                    "border-radius": "3px",
                    height: "36px",
                    width: "36px",
                  }}
                />
              </div>

              <div className="flex justify-between capitalize text-[#0072CE] md:text-[14px] text-[12px] mt-5 ">
                <div
                  className="hover:cursor-pointer"
                  onClick={() => {
                    navigate("/signin-signup");
                  }}
                >
                  {labelsData?.changePhoneNo}
                </div>
                <div className="hover:cursor-pointer">
                  {labelsData?.resendCode}{" "}
                </div>
              </div>
              <div className="text-center md:mt-6 lg:mt-8 mt-4">
                <SaveButton
                  title={labelsData?.submitButton}
                  onClick={handleSubmit}
                  className={
                    "text-white bg-primary w-full px-2 md:py-2 py-1.5 rounded-md  font-[500] md:text-[16px] text-sm tracking-wide"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
