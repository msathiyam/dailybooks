import React from "react";
import "./index.css";

export default function Preference() {
  const data = [
    {
      name: "Frontend Website",
      description: "Enable access to show your frontend website.",
      value: true,
    },
    {
      name: "Multilingual System",
      description: "Enable access to active multilingual system.",
      value: false,
    },
    {
      name: "Google reCaptcha",
      description: "Enable to active reCaptcha for all public forms (Sign up, contacts).",
      value: true,
    },
    {
      name: "Registration System",
      description: "Enable to allow sign up users to your site.",
      value: true,
    },
    {
      name: "Email Verification",
      description: "Enable to allow email verification for registered users.",
      value: true,
    },
    {
      name: "Enable Payment",
      description: "Enable Payment = Your users need to complete their payment for access all features",
      value: true,
    },
    {
      name: "Delete Invoice",
      description: "Enable to allow delete invoice in user business.",
      value: false,
    },
    {
      name: "Discount",
      description: "Enable to active discount system",
      value: true,
    },
    {
      name: "Blogs",
      description: "Enable to show blogs option in frontend",
      value: true,
    },
    {
      name: "Faqs",
      description: "Enable to show FAQs option in frontend",
      value: true,
    },
  ];

  const handlePreference=(e)=>{
    console.log("Preference", !e.target.value);
  }

  return (
    <div className="pt-5">
      <div className="shadow-md hover:shadow-md  lg:w-2/3 md:w-2/3 px-4 divide-y">
        <div className="py-2 px-8">
          <h1 class="text-xl font-semibold">Preference</h1>
        </div>
        {data.map((item, i) => {
          return (
            <div className="flex items-center py-2 px-8">
              <div className="w-4/5">
                <h1 className="m-0 font-semibold">{item?.name}</h1>
                <p className="m-0 font-normal">{item?.description}</p>
              </div>
              <div className="w-1/5 text-right preference">
                <label class="switch">
                  <input onChange={handlePreference} type="checkbox" id="togBtn" defaultChecked={item?.value}/>
                  <div class="slider round"></div>
                </label>
              </div>
            </div>
          );
        })}
        <div className="py-4 px-8">
          <button className="w-full h-12 rounded-full ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white border-0 text-white">
            {/* <span><CheckOutlined /></span> */}
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
