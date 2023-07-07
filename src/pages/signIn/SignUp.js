import React, { useEffect, useState } from "react";
import SaveButton from "../../components/button/SaveButton";
import CheckBox from "../../components/checkBox/CheckBox";
import InputField from "../../components/inputField/InputField";
import CarouselComp from "./components/Carousel";
import Forms from "./components/Forms";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { SignUpAction } from "./redux/SigninSignup.action";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllLanguagelabels } from "../languages/redux/Languages.action";
import { SuccessMessage } from "../../components/alerts/DbAlerts";
import { post } from "../../api";

const SignUp = () => {
  const params = useLocation();
  const { email, txnid } = params.state;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LanguageDataLabels = useSelector(
    (state) => state.LanguageReducer.getAllLanguageLabels
  );
  const [languageLabels, setLanguageLabels] = useState([]);
  const labelsData = languageLabels[0]?.labels;

  useEffect(() => {
    dispatch(getAllLanguagelabels("Web.SignIn", "English", "0"));
    setLanguageLabels([LanguageDataLabels]);
  }, [LanguageDataLabels.length]);

  const signUpSchema = Yup.object({
    password: Yup.string().required(labelsData?.requiredError),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], `${labelsData?.confirmPasswordErr}`)
      .required(labelsData?.requiredError),
  });

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (val) => {
        try {
          const response = await post(
            `${process.env.REACT_APP_API_URL}`,
            `${"v1/auth/verify-credentials"}`,
            {
              txnid: txnid,
              loginMobileNo: "",
              loginEmailId: email,
              password: val.password,
            }
          );
          const result = await response.response.data[0];
          if (response) {
            sessionStorage.setItem("authToken", result?.AuthToken);
            if (result?.AuthToken >= 0 || "Generate Token") {
              SuccessMessage();
            }
          }
          navigate("/home");
        } catch (err) {
          navigate("/serverError");
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
        <div className="flex justify-center items-center h-screen w-screen md:w-[50%] bg-[#0072CE] ">
          <form onSubmit={handleSubmit}>
            <Forms
              labelsData={labelsData}
              child={
                <>
                  <InputField
                    label={labelsData?.passwordLabel}
                    inputWrapper={"md:mt-3 mt-1"}
                    placeholder={labelsData?.passwordPlaceholder1}
                    type={"password"}
                    name={"password"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    labelStyle={
                      "font-[600] md:text-[20px] text-[14px] md:mb-3 lg:mb-5 mb-1"
                    }
                    inputStyle={
                      "border border-[#979797] text-[#979797] outline-none  p-1 md:px-2 py-1.5 md:py-2 text-[12px] md:text-[13px] rounded-md w-full mb-2 font-[500] tracking-[0.5px]"
                    }
                  />
                  {errors.password && touched.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password}
                    </span>
                  )}
                  <InputField
                    inputWrapper={"md:mt-3 mt-1 "}
                    placeholder={labelsData?.confirmPasswordPlaceholder}
                    type={"password"}
                    name={"confirmPassword"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputStyle={
                      "border border-[#979797] text-[#979797] outline-none  p-1 md:px-2 py-1.5 md:py-2 text-[12px] md:text-[13px] rounded-md w-full md:mb-2 mb-1 font-[500] tracking-[0.5px]"
                    }
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <span className="text-red-500 text-sm">
                      {errors.confirmPassword}
                    </span>
                  )}

                  <CheckBox
                    title={labelsData?.rememberMeText}
                    className={
                      "text-[#333333] font-[600] md:text-[14px] text-xs"
                    }
                  />
                  <SaveButton
                    title={labelsData?.signupButton}
                    className={
                      "text-white bg-primary w-full px-1 md:px-2 py-1.5 md:py-2.5 rounded-md md:my-3 lg:my-6 my-2 font-[500] md:text-[16px] text-xs"
                    }
                  />
                  <div className="font-[600] text-[10px] md:text-xs text-[#979797] text-center tracking-[0.5px] lg:px-10 md:px-6 px-2">
                    {labelsData?.signupTerms}
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

export default SignUp;
