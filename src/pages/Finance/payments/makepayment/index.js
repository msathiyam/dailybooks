import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createPayments, getAllorders } from "../redux/payments.action";
import { useFormik } from "formik";
import { jsonSchema } from "../../../../validationSchema/languagejsonschema";

import { Select } from "antd";
import Layout from "../../../../components/layout";
const { Option } = Select;
export const FileName = "";
const initialValues = {
  PaymentNo: "",
  paymentDate: "",
  dbOrderId: "",
  dbClientId: "",
  paymentMethod: "",
  paymentRefNo: "",
  paymentAmount: "",
};
const AddMakepayments = ({ setOpen, alljson, setData }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialValues);
  const [orders, setOrders] = useState([]);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: formData,
    validationSchema: jsonSchema,
    onSubmit: (val) => {
      console.log("val====", val);
      dispatch(createPayments(val));
      setOpen(false);
    },
  });
  console.log("values", values);
  // const categoryData = useSelector((state) => state.ticketsReducer.getCategory);
  // const companyData = useSelector(
  //   (state) => state.ticketsReducer.getAllCompany
  // );
  const allorders = useSelector((state) => state.PaymentReducer);
  console.log("====allorders===", allorders);
  useEffect(() => {
    if (alljson) {
      setData(alljson);
    }
    if (allorders) {
      setOrders(allorders);
    }
  }, [dispatch, alljson?.length, allorders?.length]);
  return (
    <Layout>
      <div className="add-business px-7">
        <form onSubmit={handleSubmit}>
          {/* Form -1 */}
          <h1 className="font-bold text-base pt-5 pl-4">Add Payments</h1>

          <div className=" px-7 pt-4 grid grid-cols-2 gap-4">
            <div className="relative z-0 ">
              <label
                for="profilePhoto"
                className="block  text-sm  font-bold text-textcolor"
              >
                profilePhoto
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="tittle"
                name="PaymentNo"
                value={values?.PaymentNo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.PaymentNo && touched.PaymentNo && (
                <span className="text-red-500 font-medium text-sm">
                  {errors.PaymentNo}
                </span>
              )}
            </div>

            <div className="relative z-0 ">
              <label
                for="name"
                className="block  text-sm  font-bold text-textcolor"
              >
               fileName
              </label>
              <input
                type="date"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="paymentDate name"
                name="paymentDate"
                value={values?.paymentDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.paymentDate && touched.paymentDate && (
                <span className="text-red-500 font-medium text-sm">
                  {errors.paymentDate}
                </span>
              )}
            </div>
          </div>
          <div className="px-7 py-7 grid grid-cols-2 gap-4">
            <div className="relative z-0 ">
              <label
                for="name"
                className="block  text-sm  font-bold text-textcolor"
              >
                dbClientId
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="dbClientId"
                name="dbClientId"
                value={values?.dbClientId}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.dbClientId && touched.dbClientId && (
                <span className="text-red-500 font-medium text-sm">
                  {errors.dbClientId}
                </span>
              )}
            </div>

            <div className="relative z-0">
              <label
                for="name"
                className="block  text-sm  font-bold text-textcolor"
              >
                dbOrderId
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="dbOrderId"
                name="dbOrderId"
                value={values?.dbOrderId}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.dbOrderId && touched.dbOrderId && (
                <span className="text-red-500 font-medium text-sm">
                  {errors.dbOrderId}
                </span>
              )}
            </div>
          </div>

          <div className=" ">
            <h1 className="font-bold text-xl ">unit price</h1>
            <div className="px-7 border border-solid border-bordercolor  grid grid-cols-6 gap-4">
              <div className="relative z-0 ">
                <label
                  for="name"
                  className="block  text-sm  font-bold text-textcolor"
                >
                  paymentMethod
                </label>
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-textcolor  bg-transparent border-0  appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="paymentMethod"
                  name="paymentMethod"
                  value={values?.paymentMethod}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.paymentMethod && touched.paymentMethod && (
                  <span className="text-red-500 font-medium text-sm">
                    {errors.paymentMethod}
                  </span>
                )}
              </div>

              <div className="relative z-0 border-x border-solid border-bordercolor">
                <label
                  for="name"
                  className="block  text-sm  font-bold text-textcolor"
                >
                  paymentRefNo
                </label>
                <input
                  type="text"
                  className="block px-0 w-full text-sm text-textcolor  bg-transparent border-0  appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="paymentRefNo"
                  name="paymentRefNo"
                  value={values?.paymentRefNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.paymentRefNo && touched.paymentRefNo && (
                  <span className="text-red-500 font-medium text-sm">
                    {errors.paymentRefNo}
                  </span>
                )}
              </div>
              <div className="relative z-0 ">
                <label
                  for="type"
                  className="block text-sm font-medium text-textcolor"
                >
                  Company
                </label>
                <select
                  name="companyDetail"
                  value={values.companyDetail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value={""}> Select Company </option>
                  {/* {companyData.map((val) => (
                    <option value={val.company_name}>{val.company_name}</option>
                  ))} */}
                </select>
                {errors.companyDetail && touched.companyDetail && (
                  <span className="text-red-500 font-medium text-sm">
                    {errors.companyDetail}
                  </span>
                )}
              </div>
              <div className="relative z-0 border-x border-solid border-bordercolor">
                <label
                  for="name"
                  className="block  text-sm  font-bold text-textcolor"
                >
                  paymentAmount
                </label>
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0  appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="paymentAmount"
                  name="paymentAmount"
                  value={values?.paymentAmount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.paymentAmount && touched.paymentAmount && (
                  <span className="text-red-500 font-medium text-sm">
                    {errors.paymentAmount}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="py-7 flex lg:justify-end lg:m-0 sm:justify-end w-full">
            <button
              type="button"
              className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"
            >
              <span
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </span>
            </button>
            <button
              type="submit"
              className="ant-btn ant-btn-default bg-primary hover:bg-white  hover:text-primary  rounded border-0 text-white font-semibold mx-3"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddMakepayments;
