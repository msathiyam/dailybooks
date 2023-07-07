import React, { useEffect, useState } from "react";
import './header.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import User from '../../assets/Images/user.png';
import { useDispatch, useSelector } from "react-redux";
import { refundDate  } from "./action";
import { searchRefunds } from "../../pages/Finance/refunds/refund.action";

export default function Header(props) {
  const dispatch = useDispatch();
  const [showSideBar, setShowSideBar] = useState(true);
  const [dateRange, setDateRange] = useState({
    from: "",
    to: ""
  })
  // const [fromDate, setFromDate] = useState(null);
  // const [toDate, setToDate] = useState(null);

  const { RangePicker } = DatePicker;
  const dateFormat = 'YYYY/MM/DD';
  const handleRangeData = (dates, dateStrings) => {
    if (dates) {
      setDateRange({ ...dateRange,
        ...{from: dateStrings[0]},
        ...{to: dateStrings[1]}
      });
      console.log('first From: ', dates[0], ', to: ', dates[1]);
      console.log('second From: ', dateStrings[0], ', to: ', dateStrings[1]);
    } else {
      console.log('Clear');
      // setFromDate(null);
      // setToDate(null);
      setDateRange((preprops) => ({ ...preprops, from: "", to: ""}));
    }
  };
  useEffect(() => {
      dispatch(refundDate(dateRange));
  }, [dispatch, dateRange])

  // useEffect(() => {
  //   let searchText = "";
  //   let fromDate = dateRange.from;
  //   let toDate = dateRange.to;
  //   dispatch(searchRefunds(searchText, fromDate, toDate))
  // }, [dispatch, dateRange])

  return (
    <div className="hidden md:block lg:block xl:block 2xl:block">
      <div className="flex  h-16 justify-between border-b  border-bordercolor ">
        <div className="flex ml-10 relative items-center ">
          <input
            className="h-10 border border-solid rounded pr-8 pl-10 outline-none w-full"
            placeholder="Search"
          />

          <div className="left-[10px] absolute ">
            <i className="ri-search-line items-center ri-lg"></i>
          </div>
        </div>
        <div className=" right-[43px] items-center md:mx-0 flex py-2  relative ">
          <Space
            direction="vertical py-2  border-r border-solid border-bordercolor"
            size={12}
          >
            <RangePicker
              // defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat}
              bordered={false}
              onChange={handleRangeData}
            />
          </Space>
          <i className="ri-notification-line ri-lg ml-10 text-blue-500"></i>
          <div className="group relative ml-10 mt-1 hover:bg-[#FAFAFA]">
            <button className="text-black rounded w-[32px]   leading-[48px]">
              <img src={User} className="rounded-lg" alt="user" />
            </button>
            <nav
              tabindex="0"
              className="absolute z-[9999] right-0 text-left dropdown-bg w-40 border-solid border-2 invisible transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1"
            >
              <ul className="py-1 PX-5">
                <li>
                  <a href="/" className="block px-4 py-2 ">
                    <i className="ri-user-line ri-lg mr-1.5 align-sub"></i>
                    My Account
                  </a>
                </li>
                <li>
                  <a href="/Settings" className="block px-4 py-2 ">
                    <i className="ri-settings-5-line ri-lg mr-1.5 align-sub"></i>
                    Settings
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2">
                    <i className="ri-logout-circle-r-line  ri-lg mr-1.5 align-sub"></i>
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}