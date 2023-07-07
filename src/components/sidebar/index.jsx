import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import dashbord from "../../assets/Images/dashboard.svg";
import performance from "../../assets/Images/performance-chart.svg";
import subscription from "../../assets/Images/subscription.svg";
import people from "../../assets/Images/people.svg";
import notification from "../../assets/Images/notification.svg";
import customers from "../../assets/Images/customers.svg";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { Tooltip } from "antd";
import Dailybooks from "../../assets/Images/dailybooks_logo.png";
import Payments from "../../assets/Images/payments.svg";
import Refund from "../../assets/Images/refund.svg";
import PaymentGrievances from "../../assets/Images/paymentGrievances.svg";
import Report from "../../assets/Images/report.svg";
import Tickets from "../../assets/Images/tickets.svg";
import Complaints from "../../assets/Images/complaints.svg";
import WebsiteSettings from "../../assets/Images/website-settings.svg";
import Appearence from "../../assets/Images/appearence.svg";
import PaymentSetting from "../../assets/Images/payment-settings.svg";
import License from "../../assets/Images/license.svg";
import Discount from "../../assets/Images/discount.svg";
import BusinessCategories from "../../assets/Images/business-categories.svg";
import Language from "../../assets/Images/language.svg";
import Logout from "../../assets/Images/logout.svg";
import AccordionMenu from "./components/accordionMenu";
import "./sidebar.css";

const analyticsMenu = [
  {
    id: 1,
    name: "dashboard",
    path: "dashboard",
    image: dashbord,
  },
  {
    id: 2,
    name: "performance",
    path: "Performance",
    image: performance,
  },
];

const analyticsMenu1 = [
  {
    name: "analytics",
    subMenu: [
      {
        id: 1,
        name: "dashboard",
        path: "dashboard",
        image: dashbord,
      },
      {
        id: 2,
        name: "performance",
        path: "Performance",
        image: performance,
      },
    ],
  },
  {
    name:"Sales",
    subMenu:[
      {
        id: 1,
        name: "customers",
        path: "customer",
        image: customers,
      },
      {
        id: 2,
        name: "subscriptions",
        path: "subscription",
        image: subscription,
      },
      {
        id: 3,
        name: "orders",
        path: "order",
        image: people,
      },
    ]
  },
  {
    name:"Finance",
    subMenu:[
      {
        id: 1,
        name: "payments",
        path: "payment",
        image: Payments,
      },
      {
        id: 2,
        name: "refunds",
        path: "refund",
        image: Refund,
      },
      {
        id: 3,
        name: "payment grievances",
        path: "paymentgrievances",
        image: PaymentGrievances,
      },
      {
        id: 4,
        name: "reports",
        path: "report",
        image: Report,
      },
    ]
  },
  {
    name:"Help desk",
    subMenu:[
      {
        id: 1,
        name: "tickets",
        path: "ticket",
        image: Tickets,
      },
      {
        id: 2,
        name: "complaint",
        path: "complaints",
        image: Complaints,
      },
    ]
  },
  {
    name:"Notifications",
    subMenu:[
      {
        id: 1,
        name: "web notifications",
        path: "Web-notification",
        image: notification,
      },
      {
        id: 2,
        name: "mobile notifications",
        path: "mobile-motifications",
        image: notification,
      },
    ]
  },
  {
    name:"Settings",
    subMenu:[
      { name: "Website Settings", path: "/website", image: WebsiteSettings },
      { name: "Appearance", path: "/appearance", image: Appearence },
      { name: "Preferences", path: "/preferences", image: Complaints },
      { name: "Payment Settings", path: "/pyment-settings", image: PaymentSetting },
      { name: "License", path: "/license", image: License },
      { name: "Discount", path: "/discount", image: Discount },
      { name: "Business Categories", path: "/business-categories", image: BusinessCategories},
      { name: "language", path: "/languages", image: Language },
      { name: "Users", path: "/users", image: Complaints },
      { name: "Features", path: "/features", image: Complaints },
      { name: "Company", path: "/company", image: Complaints },
      { name: "Testimonial", path: "/testimonial", image: Complaints },
      { name: "Contact", path: "/contact", image: Complaints },
      { name: "Country", path: "/Country", image: Complaints },
    ]
  }
];

const creationsMenu = [
  {
    id: 1,
    name: "customers",
    path: "customer",
    image: customers,
  },
  {
    id: 2,
    name: "subscriptions",
    path: "subscription",
    image: subscription,
  },
  {
    id: 3,
    name: "orders",
    path: "order",
    image: people,
  },
];

const AdministrationMenu = [
  {
    id: 1,
    name: "payments",
    path: "payment",
    image: Payments,
  },
  {
    id: 2,
    name: "refunds",
    path: "refund",
    image: Refund,
  },
  {
    id: 3,
    name: "payment grievances",
    path: "paymentgrievances",
    image: PaymentGrievances,
  },
  {
    id: 4,
    name: "reports",
    path: "report",
    image: Report,
  },
];

const SettingMenu = [
  {
    id: 1,
    name: "tickets",
    path: "ticket",
    image: Tickets,
  },
  {
    id: 2,
    name: "complaint",
    path: "complaints",
    image: Complaints,
  },
];

const settingsMenu = [
  { name: "Website Settings", path: "/website", image: WebsiteSettings },
  { name: "Appearance", path: "/appearance", image: Appearence },
  { name: "Preferences", path: "/preferences", image: Complaints },
  { name: "Payment Settings", path: "/pyment-settings", image: PaymentSetting },
  { name: "License", path: "/license", image: License },
  { name: "Discount", path: "/discount", image: Discount },
  { name: "Business Categories", path: "/business-categories", image: BusinessCategories},
  { name: "language", path: "/languages", image: Language },
  { name: "Users", path: "/users", image: Complaints },
  { name: "Features", path: "/features", image: Complaints },
  { name: "Company", path: "/company", image: Complaints },
  { name: "Testimonial", path: "/testimonial", image: Complaints },
  { name: "Contact", path: "/contact", image: Complaints },
  { name: "Country", path: "/Country", image: Complaints },
];

const Webapp = [
  {
    id: 1,
    name: "web notifications",
    path: "Web-notification",
    image: notification,
  },
  {
    id: 2,
    name: "mobile notifications",
    path: "mobile-motifications",
    image: notification,
  },
];

const Signout = [
  {
    id: 1,
    name: "Change password",
    path: "change-password",
    image: dashbord,
  },
  // {
  //   id: 2,
  //   name: "Logout",
  //   path: "logout",
  //   image: performance,
  // },
];
// const dropDownList = [
//   {
//     id: 1,
//     name: "Show archived",
//     image: archivedIcon,
//   },
//   {
//     id: 2,
//     name: "Layout size & style",
//     image: layoutIcon,
//   },
//   {
//     id: 3,
//     name: "Dark side(Bar)",
//     image: darkbarIcon,
//   },
// ];

export default function SideBar() {
  const { height, width } = useWindowDimensions();
  const location = useLocation();
  const current_path = location.pathname;
  const [showSideBar, setShowSideBar] = useState(true);
  const [isSettingsMenu, setIsSettingsMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      {showSideBar ? (
        <div className="sidebar_styles sticky ">
          <div className="md:w-72 w-80 border-r overflow-y-auto border-gray-200 h-screen bg-white flex flex-col scroll-style">
            <div className=" p-7 hidden md:block sm:block lg:block  ">
              <div className="flex items-center bg-white justify-between">
                <img
                  src={Dailybooks}
                  alt="Dailybooks logo"
                  className="w-40 h-10"
                />
                <div className="flex items-center ">
                  <div
                    className="cursor-pointer content-end "
                    onClick={() => setShowSideBar(false)}
                  >
                    <i className="ri-arrow-left-s-line text-2xl"></i>
                    <i className="ri-arrow-left-s-line text-2xl -ml-4"></i>
                  </div>
                </div>
              </div>
            </div>
            <AccordionMenu menuName="ANALYTICS" items={analyticsMenu1} />
            <div className="pl-5 mb-1">
              {/* <span className="pl-2 text-[12px]  font-medium text-[#6E78AC]	hover:text-[#3761EE]">HELP DESK</span> */}
              {Signout
                // .slice(0, showLess.showLength)
                .map((sideMenu, index) => {
                  return (
                    <div
                      className={`
                  ${
                    current_path.includes(sideMenu.path)
                      ? "border-r-4 font-Jakarta border-[#3761EE] w-25 text-[#21304F] font-medium"
                      : " flex font-Jakarta text-[#21304F]	hover:text-[#3761EE] font-medium"
                  }`}
                    >
                      <div className="p-2 flex flex-row items-center text-[12px]">
                        <img
                          src={sideMenu.image}
                          alt={`sideMenu.image ${index}`}
                        />
                        <Link
                          className="ml-3 w-40 uppercase"
                          to={`/${sideMenu.path}`}
                        >
                          {sideMenu.name}
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="pl-5 mb-4">
              <div
                onClick={handleLogout}
                className="font-Jakarta text-[#21304F] font-medium"
              >
                <div className="p-2 flex flex-row items-center text-[12px]">
                  <img src={Logout} alt={`logout`} />
                  <Link className="ml-3 w-40 uppercase" to={"#"}>
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {width > 446 ? (
            <div className="overflow-auto w-12 items-center border-r border-gray-200 h-screen bg-white flex flex-col p-5">
              <div
                className="cursor-pointer rotate-180"
                onClick={() => setShowSideBar(true)}
              >
                <i className="ri-arrow-left-s-line text-2xl"></i>
                <i className="ri-arrow-left-s-line text-2xl -ml-4"></i>
              </div>
              {analyticsMenu.map((item) => {
                return (
                  <div key={item.id} className="hidden sm:block  p-4 bg-none">
                    <Tooltip title={`${item.name}`} placement="right">
                      <img
                        className="max-w-none "
                        src={item.image}
                        alt={`item-${item.id}`}
                      />
                    </Tooltip>
                  </div>
                );
              })}
              {creationsMenu.map((item) => {
                return (
                  <div key={item.id} className="hidden sm:block  p-4 bg-none">
                    <Tooltip title={`${item.name}`} placement="right">
                      <img
                        className="max-w-none "
                        src={item.image}
                        alt={`item-${item.id}`}
                      />
                    </Tooltip>
                  </div>
                );
              })}
              {AdministrationMenu.map((item) => {
                return (
                  <div key={item.id} className="hidden sm:block  p-4 bg-none">
                    <Tooltip title={`${item.name}`} placement="right">
                      <img
                        className="max-w-none w-5"
                        src={item.image}
                        alt={`item-${item.id}`}
                      />
                    </Tooltip>
                  </div>
                );
              })}
              {settingsMenu.map((item) => {
                return (
                  <div key={item.id} className="hidden sm:block  p-4 bg-none">
                    <Tooltip title={`${item.name}`} placement="right">
                      <img
                        className="max-w-none w-5"
                        src={item.image}
                        alt={`item-${item.id}`}
                      />
                    </Tooltip>
                  </div>
                );
              })}
              {Signout.map((item) => {
                return (
                  <div key={item.id} className="hidden sm:block  p-4 bg-none">
                    <Tooltip title={`${item.name}`} placement="right">
                      <img
                        className="max-w-none w-5"
                        src={item.image}
                        alt={`item-${item.id}`}
                      />
                    </Tooltip>
                  </div>
                );
              })}

              <div className="hidden sm:block  p-4 bg-none">
                <Tooltip title="Logout" placement="right">
                  <img className="max-w-none w-5" src={Logout} alt="logout" />
                </Tooltip>
              </div>
            </div>
          ) : (
            <div
              className="cursor-pointer rotate-180"
              onClick={() => setShowSideBar(true)}
            >
              <i className="ri-arrow-left-s-line text-2xl"></i>
              <i className="ri-arrow-left-s-line text-2xl -ml-4"></i>
            </div>
          )}
        </>
      )}
    </>
  );
}
