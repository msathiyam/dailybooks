import React, { useEffect, useState } from "react";
import SaveButton from "../../components/button/SaveButton";
import CheckBox from "../../components/checkBox/CheckBox";
import InputField from "../../components/input-field/custom-input";
import CarouselComp from "./components/Carousel";
import Forms from "./components/Forms";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { SignUpAction } from "./redux/SigninSignup.action";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ErrorMessage,
  SuccessMessage,
  ToastError,
} from "../../components/alerts/DbAlerts";
import { post } from "../../api";
import { getAllLanguagelabels } from "../languages/redux/Languages.action";
const SignIn = () => {
  const [dataReg, setDataReg] = useState("");
  const dispatch = useDispatch();
  const param = useLocation();
  const navigate = useNavigate();
  const { state } = param;
  const LanguageDataLabels = useSelector(
    (state) => state.LanguageReducer.getAllLanguageLabels
  );
  const [languageLabels, setLanguageLabels] = useState([]);
  const labelsData = languageLabels[0]?.labels;

  useEffect(() => {
    dispatch(getAllLanguagelabels("Web.SignIn", "English", "0"));
    setLanguageLabels([LanguageDataLabels]);
  }, [LanguageDataLabels.length]);

  // validation schema
  const signInSchema = Yup.object({
    password: Yup.string().required(labelsData?.requiredError),
  });

  const initialValues = {
    password: "",
  };

  const { handleSubmit, errors, values, touched, handleBlur, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit: async (val) => {
        const response = await post(
          `${process.env.REACT_APP_API_URL}`,
          `${"v1/auth/verify-credentials"}`,
          {
            txnid: state.txnid,
            loginMobileNo: "",
            loginEmailId: state.email,
            password: val.password,
          }
        );
        const result = await response.response.data[0];
        sessionStorage.setItem("authToken", result?.AuthToken);
        if (result?.AuthToken < 0) {
          ToastError.fire({
            icon: "error",
            title: "Incorrect password",
          });
        } else {
          SuccessMessage();
          navigate("/home");
        }
      },
    });

  return (
    <>
      <div className="md:flex relative left-0 right-0 overflow-x-hidden">
        {/* left design */}
        <div className="h-screen w-screen md:w-[50%] items-center">
          <div>
            <div>
              <CarouselComp labelsData={labelsData} />
            </div>
          </div>
        </div>
        {/* right design */}
        <div className="flex justify-center items-center h-screen w-screen md:w-[50%]  bg-[#0072CE]  ">
          <form onSubmit={handleSubmit}>
            <Forms
              labelsData={labelsData}
              child={
                <>
                  <InputField
                    label={labelsData?.passwordLabel}
                    inputWrapper={"md:mt-4 mt-3 "}
                    placeholder={labelsData?.passwordPlaceholder1}
                    name={"password"}
                    type={"password"}
                    labelStyle={
                      "font-[600] md:text-[20px] text-[14px] text-[#333333] md:mb-4 lg:mb-5 mb-2"
                    }
                    inputStyle={
                      "border border-[#979797] text-[#979797] outline-none  p-1 md:px-2 py-1.5 md:py-2.5 text-[12px] md:text-[13px] rounded-md w-full mb-1 md:mb-1 font-[500] tracking-[0.5px]"
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <div className="form-error font-medium text-red-500 text-sm mb-3">
                      {errors.password}
                    </div>
                  )}
                  <div className="lg:flex lg:justify-between sm:flex sm:flex-row-reverse md:flex md:flex-row-reverse">
                    <div className="text-[#0072CE] lg:text-[13px] md:text-[11px] text-xs font-[600] cursor-pointer md:float-right sm:float-right mb-1 md:mb-2 lg:mb-0 ">
                      {" "}
                      {labelsData?.forgotPassword}
                    </div>
                    <CheckBox
                      title={labelsData?.rememberMeText}
                      className={
                        "text-[#333333] font-[600] md:text-[14px] text-[14px] lg:text-[14px]"
                      }
                    />
                  </div>
                  <div className="text-center md:mt-6 lg:mt-8 mt-4">
                    <SaveButton
                      title={labelsData?.signinButton}
                      className={
                        "text-white bg-primary w-full px-1 md:px-2 py-1.5 md:py-2  lg:py-2.5 rounded-md md:my-3 lg:mt-4 mt-2 font-[500] md:text-[16px] text-sm"
                      }
                    />
                  </div>
                </>
              }
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
