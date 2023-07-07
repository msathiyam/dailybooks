import React, { useEffect, useState } from "react";
import SaveButton from "../../components/button/SaveButton";
// import CheckBox from "../../components/checkBox/CheckBox";
import InputField from "../../components/input-field/custom-input";
import CarouselComp from "./components/Carousel";
import Forms from "./components/Forms";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { post } from "../../client/api";
import { useDispatch, useSelector } from "react-redux";
// import { getAllLanguagelabels } from "../languages/redux/Languages.action";

const SignInSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const LanguageDataLabels = useSelector(
  //   (state) => state.LanguageReducer.getAllLanguageLabels
  // );
  const [inputType, setInputType] = useState("text");
  const [languageLabels, setLanguageLabels] = useState([]);
  const labelsData = languageLabels[0]?.labels;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = async (data) => {
    const response = await post(
      `${process.env.REACT_APP_API_URL}`,
      `${"v1/auth/register"}`,
      {
        MobileNo: inputType === "email" ? "" : data.phoneNumber,
        EmailID: inputType === "email" ? data.email : "",
      }
    );
    const result = await response.response.data.user[0];
    if (inputType === "email") {
      if (result.intUserStatus === -1) {
        navigate("/sign-up", {
          state: { txnid: result.varTxnID, email: data?.email },
        });
      } else if (result.intUserStatus >= 0) {
        navigate("/sign-in", {
          state: { txnid: result.varTxnID, email: data?.email },
        });
      }
    } else {
      navigate("/otp-verification", {
        state: { txnid: result.varTxnID, phoneNumber: data?.phoneNumber },
      });
    }
  };

  const onSelectType = (value) => {
    if (value && !isNaN(value)) {
      setInputType("text");
    } else {
      setInputType("email");
    }
  };

  // useEffect(() => {
  //   dispatch(getAllLanguagelabels("Web.SignIn", "English", "0"));
  //   setLanguageLabels([LanguageDataLabels]);
  // }, [LanguageDataLabels.length]);

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
        <div className="flex justify-center items-center h-screen w-screen md:w-[50%]  bg-[#0072CE] ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Forms
              labelsData={labelsData}
              child={
                <>
                  <Controller
                    name={inputType === "text" ? "phoneNumber" : "email"}
                    control={control}
                    rules={{
                      required: { value: true, message: "required field" },
                      pattern: {
                        value:
                          inputType === "text"
                            ? /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
                            : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "enter valid input",
                      },
                    }}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { invalid, isTouched, isDirty, error },
                      formState,
                    }) => (
                      <InputField
                        type={inputType}
                        name={inputType === "text" ? "phoneNumber" : "email"}
                        label={labelsData?.signup_signinLabel}
                        inputWrapper={"md:mt-3 mt-1 "}
                        placeholder={labelsData?.signup_signinPlaceholder}
                        onChange={(e) => {
                          onChange(e.target.value);
                          onSelectType(e?.target?.value);
                        }}
                        onBlur={onBlur}
                        labelStyle={
                          "font-[600] md:text-[20px] text-[14px] text-[#333333] md:mb-3 lg:mb-5 mb-2"
                        }
                        value={value}
                        inputStyle={
                          "border border-[#979797] text-[#979797] outline-none  p-1 md:px-2 py-1.5 md:py-2 text-[12px] md:text-[13px] rounded-md w-full mb-1.5 font-[500] tracking-[0.5px]"
                        }
                      />
                    )}
                  />

                  {errors?.[inputType === "text" ? "phoneNumber" : "email"] && (
                    <span style={{ color: "red" }}>{`${
                      errors?.[inputType === "text" ? "phoneNumber" : "email"]
                        .message
                    }`}</span>
                  )}
                  {/* <CheckBox
                    title={labelsData?.rememberMeText}
                    className={
                      "text-[#333333] font-[600] md:text-[14px] text-xs"
                    }
                  /> */}
                  <SaveButton
                    title={labelsData?.signup_signinButton}
                    type={"submit"}
                    className={
                      "text-white bg-primary w-full px-1 md:px-2 py-1.5 md:py-2 rounded-md md:my-3 lg:my-6 my-3 font-[500] md:text-[16px] text-sm"
                    }
                  />
                  <div className="font-[600] text-[10px] md:text-xs text-[#979797] text-center tracking-[0.5px] lg:px-10 md:px-6 px-2">
                    {labelsData?.signup_signinTerms}
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

export default SignInSignUp;
