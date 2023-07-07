/** @format */

import React from "react";
// import TCS from "../../../assets/Images/tcs.jpg";
import { useState } from "react";
import Projectdetails from "./project-details";
import CompanyDetails from "./company-details";
import { useDispatch } from "react-redux";
import { createOrders } from "../orders.action";

function AddOrders({ setOpen }) {

  const dispatch = useDispatch();

  const [projectDetails, setProjectDetails] = useState(true);
  const [companyDetails, setCompanyDetails] = useState(false);
  const [fileInvoice, setFileInvoice] = useState(null);
  const [profileImg, setProfileImg] = useState(null);
  const [profilePhoto,setProfilePhoto]=useState("");
  const [fileName,setFileName]=useState("");
  const [fileNameInvoice,setFileNameInvoice]=useState("");
  const [companyName, setCompanyName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [info, setInfo] = useState("");
  const [invoice, setInvoice] = useState("");
  const [status, setStatus] = useState("");

  

  const changeButtonState = () => {
    const orderData = {
      profilePhoto,
      fileName,
      fileNameInvoice,
      companyName,
      invoiceNumber,
      info,
      invoice,
      status,
      // Add more properties as needed
    };

    // Dispatch the action with the data payload
    dispatch(createOrders(orderData));

    // Reset the form inputs
    setProfilePhoto("");
    setFileName("");
    setFileNameInvoice("");
    setCompanyName("");
    setInvoiceNumber("");
    setInfo("");
    setInvoice("");
    setStatus("");
    

  }
  
  

  
  return (
    <>
      <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
        <i
          class="ri-close-line ri-1x absolute z-40 left-50 bottom-450 "
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>
      <div className="lg:mt-5 mt-2 lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
        <div className=" items-center justify-between sm:flex-col md:flex-row mb-5 lg:hidden md:hidden sm:hidden">
          <div className="flex flex-col">
            <div className="text-[#22314F] sm:text-lg font-bold text-sm ">
              Estore - Ecommerce App Development{" "}
            </div>
            <div className="flex md:my-0 xs:my-2 items-center">
              {/* <div className="w-[20px] h-[20px] rounded  mr-2">
                <img
                  src={`${TCS}`}
                  alt=""
                  className="w-[100%] h-[100%] rounded "
                />
              </div> */}
              <div className="lg:my-0 md:my-2 sm:my-1 my-2">
                {" "}
                California , USA
              </div>
            </div>
          </div>
          {/* <div className="flex">
            <button
              className="bg-gray-200 text-red-600 text-center py-1 px-4 mr-[12px] rounded-[4px]"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel{" "}
            </button>
            <button className="bg-blue-600 text-white text-center py-1 px-4  rounded-[4px]"
             onClick={() => changeButtonState()}
            >
              Save{" "}
            </button>
          </div> */}
        </div>
        <div className="sm:w-[30%] xs:w-[100%] border border-gray-400 flex flex-col md:py-[30px] lg:p-8 sm:p-3 p-2 ">
          <div className="flex justify-center">
            {/* <ProfilePicker /> */}
            <div className="flex justify-center items-center w-full mb-[18px]">
              <label
                for="dropzone-file"
                className="flex flex-col justify-center items-center w-full h-[180px] bg-gray-50 rounded-md border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100"
              >
                <div className="flex flex-col justify-center items-center pt-5 pb-6 relative">
                  <div className="text-primary mb-4">
                    {profileImg ? `${profileImg}` : " No file choosen"}
                  </div>
                  <button className="bg-primary text-white py-1 px-2 rounded-sm">
                    {" "}
                    Browse Files
                  </button>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="absolute top-13 hidden  "
                    onChange={(e) => {
                      setProfileImg(e.target.files[0].name);
                    }}
                    // value={profilePhoto}
                    // onChange={(e) => setProfilePhoto(e.target.value)}
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="relative z-0 mb-8">
            <label
              for="pfrofilephoto"
              className="block mb-2 text-sm font-medium text-textcolor"
            >
              PROFILEPHOTO{" "}
            </label>
            <input
              value={profilePhoto}
              onChange={(e) => setProfilePhoto(e.target.value)}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder="Profile Name"
            />
            <label
              for="filename"
              className="block mb-2 text-sm font-medium text-textcolor"
            >
              FILENAME{" "}
            </label>
            <input
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder="File Name"
            />
            <label
              for="filenameinvoice"
              className="block mb-2 text-sm font-medium text-textcolor"
            >
              FILENAMEINVOICE{" "}
            </label>
            <input
              value={fileNameInvoice}
              onChange={(e) => setFileNameInvoice(e.target.value)}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder="Filename Invoice"
            />
            <label
              for="companyname"
              className="block mb-2 text-sm font-medium text-textcolor"
            >
              COMPANYNAME{" "}
            </label>
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder="Comapny name"
            />
            <label
              for="invoicenumber"
              className="block mb-2 text-sm font-medium text-textcolor"
            >
              INVOICENUMBER{" "}
            </label>
            <input
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder="Invoice Number"
            />
            <label
              for="info"
              className="block mb-2 text-sm font-medium text-textcolor"
            >
              INFO{" "}
            </label>
            <input
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder="Info"
            />
            <label
              for="invoice"
              className="block mb-2 text-sm font-medium text-textcolor"
            >
              INVOICE{" "}
            </label>
            <input
              value={invoice}
              onChange={(e) => setInvoice(e.target.value)}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder="Invoice"
            />
            <label
              for="status"
              className="block mb-2 text-sm font-medium text-textcolor"
            >
              STATUS{" "}
            </label>
            <input
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder="Comapny name"
            />
          
          </div>

          <div className="text-textcolor font-medium text-sm mb-2 ">
            Information
            <input
              type="text"
            
              className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder="Summary"
            />
          </div>

          <div className="text-[#22314F] font-bold text-md mt-6 mb-3">
            {" "}
            Invoice (if Alredy paid)
          </div>
          <div className="w-[100%] border border-dashed border-blue-600 flex md:flex-row sm:flex-col justify-between items-center py-1 px-1 text-blue-600">
            <div className="text-primary text-[12px]">
              {fileInvoice ? `${fileInvoice} ` : "No file chosen"}
            </div>
            <div>
              <label for={"dropzone-file2"}>
                <div className="bg-primary text-white py-1 px-[6px] rounded-sm text-[12px] cursor-pointer">
                  Browse Files
                </div>
                <input
                  id="dropzone-file2"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    setFileInvoice(e.target.files[0].name);
                  }}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="md:w-[70%] xs:w-[100%] md:ml-8 sm:ml-4 xs:mt-4 sm:mt-0 md:mt-0 mt-5">
          <div className="lg:flex items-center justify-between  md:flex-row hidden md:block sm:block">
            <div className="flex flex-col">
              <div className="text-[#22314F] text-lg font-bold ">
                Estore - Ecommerce App Development{" "}
              </div>
              <div className="flex md:my-0 xs:my-2 items-center">
                {/* <div className="w-[20px] h-[20px] rounded  mr-2">
                  <img
                    src={`${TCS}`}
                    alt=""
                    className="w-[100%] h-[100%] rounded "
                  />
                </div> */}
                <div className="lg:my-0 md:my-2 sm:my-1 my-2">
                  {" "}
                  California , USA
                </div>
              </div>
            </div>
            <div className="flex mt-2">
              <button
                className="bg-gray-200 text-red-600 text-center py-1 px-4 mr-[12px] rounded-[4px]"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel{" "}
              </button>
              <button className="bg-blue-600 text-white text-center py-1 px-4  rounded-[4px]" onClick={() => changeButtonState()}>
                Save{" "}
              </button>
            </div>
          </div>
          <div className="my-6 flex lg:flex-row md:flex-row flex-col">
            <button
              className={`${
                projectDetails
                  ? "bg-blue-600  text-white"
                  : "bg-gray-200 text-black"
              }  text-center lg:py-2 py-2 px-4  rounded-[4px] lg:w-[50%] md:w-[50%]  mb-2 md:mb-0 `}
              onClick={() => {
                setCompanyDetails(false);

                setProjectDetails(true);
              }}
            >
              Project Details{" "}
            </button>
            <button
              className={`${
                companyDetails
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              } md:w-[50%] sm:w-[100%]  text-center lg:py-2 px-4 rounded-[4px] py-1`}
              onClick={() => {
                setProjectDetails(false);
                setCompanyDetails(true);
              }}
            >
              Company Details{" "}
            </button>
          </div>
          {projectDetails && <Projectdetails />}
          {companyDetails && <CompanyDetails />}
        </div>
      </div>
    </>
  );
}

export default AddOrders;
