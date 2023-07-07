import React,{ useState }  from 'react';
import { useNavigate } from "react-router-dom";
import dailybooks from "../../assets/Images/dailybooks_logo.png";
import register from "../../assets/Images/register.jpg";
import Button from "../../components/button";
import { validateEmail } from "../../utils/validationUtils";
import { STRINGS } from "../../constants/common-string";
import Google from "../../assets/Images/google.png";
import terolo from "../../assets/Images/bm.png";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorStates, setErrorStates] = useState({
    isValidName: false,
    isValidEmail: false,
    isValidPassword: false,
    userExists: false,
  });
  const handleChange = (e) => {
    setSignupData((preProps) => ({
      ...preProps,
      [e.target.name]: e.target.value,
    }));
  };
  const onSignupPress = (e) => {
    e.preventDefault();
    setErrorStates({ ...errorStates, userExists: false });

    if (
      signupData.name === "" &&
      signupData.email === "" &&
      signupData.password === ""
    ) {
      setErrorStates({
        isValidName: true,
        isValidEmail: true,
        isValidPassword: true,
        userExists: false,
      });
    } else if (signupData.name === "") {
      setErrorStates({ ...errorStates, isValidName: true });
    } else if (signupData.email === "" || !validateEmail(signupData.email)) {
      setErrorStates({ ...errorStates, isValidEmail: true });
    } else if (signupData.password === "" || signupData.password.length < 8) {
      setErrorStates({ ...errorStates, isValidPassword: true });
    } else {
      setLoading(true);
      setTimeout(() => {
        const data = {
          name: signupData.name,
          email: signupData.email,
          password: signupData.password,
        };

        setLoading(false);
      }, 3000);
    }
  };
  return (
    <>
      <div className='absolute md:absolute lg:absolute xl:absolute inset-0 items-center lg:flex lg:flex-col sm:flex sm:flex-col lg:mt-0 sm:mt-20'>
       <img
        className="mt-24  w-50 h-14"
        src={dailybooks}
        alt="Terolo logo"
      />
      <h1 className='font-bold text-3xl	py-3'>
      SaaS Business & Accounting Software
      </h1>
      <h6 className='text-base'><span className='font-bold'>DailyBooks</span> helps Entrepreneurs to manage their business & finances</h6>
   
      </div>

      <div className='flex grid grid-cols-2 mt-52'>
      <img
        className=" pl-20"
        src={register}
        alt="Terolo logo"
      />
      <div className='mt-20 px-32'>
      <div>
      
      <div className="">
        <div className="w-full  lg:w-96 sm:w-96 items-center justify-center flex flex-col px-8 rounded-xl  shadow-none md:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] lg:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] xl:shadow-[0px_0px_10px__rgba(94,108,132,0.1)]  relative">
          <div className="w-full text-center py-5">
            <text className="text-xl font-semibold text-center text-primary">
              {STRINGS.SIGN_UP}
            </text>
          </div>
          <div className="w-full mt-32 md:mt-0 lg:mt-0 flex-grow">
            <form>
              <div className="relative lg:mb-5 sm:mb-10 mb-5">
              <label
                  for="floating_outlined"
                  className="font-bold "
                >
                  {STRINGS.NAME}
                </label>
                <input
                  className="h-10 block px-2.5 pb-2.5 pt-4 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  name="name"
                  type="name"
                  id="floating_outlined"
                  value={signupData.name}
                  placeholder="Enter name "
                  onChange={handleChange}
                />
               
              </div>

              <div className="relative lg:mb-5 sm:mb-10 mb-5">
              <label
                  for="floating_outlined"
                  className="font-bold"
                >
                  {STRINGS.EMAIL}
                </label>
                <input
                  className="h-10 block px-2.5 pb-2.5 pt-4 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  name="email"
                  type="email"
                  id="floating_outlined"
                  value={signupData.email}
                  placeholder="Enter your email "
                  onChange={handleChange}
                />
               
              </div>

              <div className="relative mb-5">
              <label
                  for="floating_outlined"
                  className="font-bold"
                >
                  {STRINGS.PASSWORD}
                </label>
                <input
                  className="h-10 block px-2.5 pb-2.5 pt-4 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  name="password"
                  type="password"
                  id="floating_outlined"
                  value={signupData.password}
                  placeholder="password "
                  onChange={handleChange}
                />
               
              </div>

            
              <Button
                loading={loading}
                buttonClass={"mx-0 mt-5 "}
                buttonStyle={
                  "w-full h-10 items-center justify-center font-semibold font-sm rounded-md bg-primary text-white"
                }
                buttonText={"Get Started"}
                onClick={(e) => onSignupPress(e)}
              />
            </form>
            {errorStates.userExists && (
              <div className="items-center justify-center mb-2 flex z-10">
                <p className="text-red-500 font-semibold leading-normal">
                  {STRINGS.USER_BYEMAIL_EXISTS}
                </p>
              </div>
            )}
            <div className="items-center justify-center flex z-10">
              <text className="text-sm text-textcolor font-semibold leading-normal mt-6 mb-7">
                {STRINGS.ALREADY_HAVE_ACCOUNT}
                <button
                  className="cursor-pointer text-sm font-semibold text-primary transition-colors hover:text-primary"
                  type="button"
                  onClick={() => navigate("/")}
                >
                  {STRINGS.SIGN_IN}
                </button>
              </text>
            </div>
          </div>
        </div>
      
      </div>
    </div>

          </div>
    </div>
    </>
  )
}
