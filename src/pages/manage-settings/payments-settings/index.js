import React, { useState } from "react";
import { Col, Form, Input, Radio, Row, Select } from "antd";
import Switch from "../../../components/switch";

const countryOptions = [
  { label: "Select", value: "" },
  { label: "Andorra - EUR (€)", value: "EUR" },
  { label: "United Arab Emirates  -  AED (د.إ)", value: "AED" },
  { label: "Afghanistan  -  AFN (؋) ", value: "AFN" },
  { label: "Antigua and Barbuda  -  XCD ($)", value: "XCD" },
  { label: "Anguilla  -  XCD ($)", value: "XCD" },
  { label: "Albania  -  ALL (L)", value: "ALL" },
  { label: "Indonesia  -  IDR (Rp)", value: "IDR" },
  { label: "Israel  -  ILS (₪)", value: "ILS" },
  { label: "Isle of Man  -  GBP (£)", value: "GBP" },
  { label: "India  -  INR (₹)", value: "INR" },
  { label: "Iraq  -  IQD (ع.د)", value: "IQD" },
  { label: "Iceland  -  ISK (kr)", value: "ISK" },
];

const paypalMode = [
  { label: "Select", value: "" },
  { label: "Sandbox", value: 1 },
  { label: "Live", value: 2 },
];

const userData = [
  { label: "Select User", value: "" },
  { label: "Selvarajan B - selvarajan@oneuxdigital.com (verified)", value: 1 },
  { label: "harigaran - harigarangs1999@gmail.com (verified)", value: 2 },
  { label: "Ravichandran - ravi@redzara.com (verified)", value: 3 },
  { label: "Ramesh Subburaj - info@aroganam.com (verified)", value: 4 },
];

const packageData = [
  { label: "Select Package", value: "" },
  { label: "Basic (Monthly:  ₹ 0,00 Yearly:  ₹ 0,00)", value: 1 },
  { label: "Standard (Monthly:  ₹ 100,00 Yearly:  ₹ 999,00)", value: 2 },
  { label: "Premium (Monthly:  ₹ 200,00 Yearly:  ₹ 1.999,00)", value: 3 },
];

export default function PaymentSettings() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const savePayment = (values) => {
    console.log("", values);
  };
  
  const offlinePayment=(values)=>{
    console.log("", values);
  }

  return (
    <div className="lg:flex md:block ">
      <div className="currency lg:w-8/12 md:w-full pt-6 pl-4 pr-3">
        <div className="">
          <Form form={form} layout="vertical" onFinish={savePayment}>
            <Row gutter={16} className="">
              <Col className="gutter-row" xs={{ span: 24 }}>
                <div className="shadow-md hover:shadow-md">
                  <div className="p-4">
                    <Form.Item
                      label="Currency"
                      name="currency"
                      valuePropName="option"
                      rules={[
                        {
                          required: false,
                          message: "Currency cannot be Empty",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Please Select currency"
                        style={{ width: "100%" }}
                        className=""
                        defaultValue="INR"
                      >
                        {countryOptions?.map((opt, i) => {
                          return (
                            <Option key={i} value={opt?.value}>
                              {opt?.label}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={16} className="mt-6">
              <Col className="gutter-row" md={{ span: 12 }} xs={{ span: 24 }}>
                <div className="shadow-md hover:shadow-md">
                  <div className="flex items-center w-full p-4 border border-b-1 border-t-0 border-r-0 border-l-0">
                    <div className="w-6/12">
                      <h1 className="text-lg font-medium">Paypel</h1>
                    </div>
                    <div className="text-right w-6/12">
                      <Switch value={false} />
                    </div>
                  </div>
                  <Row className="p-4" gutter={16}>
                    <Col md={{ span: 24 }} xs={{ span: 24 }}>
                      <Form.Item
                        label="Paypal Mode"
                        name="PaypalMode"
                        valuePropName="option"
                        rules={[
                          {
                            required: false,
                            message: "Paypal Mode be Empty",
                          },
                        ]}
                      >
                        <Select
                          placeholder="Please Select Paypal Mode"
                          style={{ width: "100%" }}
                          className=""
                          defaultValue={1}
                        >
                          {paypalMode?.map((opt, i) => {
                            return (
                              <Option key={i} value={opt?.value}>
                                {opt?.label}
                              </Option>
                            );
                          })}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col md={{ span: 24 }} xs={{ span: 24 }}>
                      <Form.Item
                        label="Paypal Merchant Account"
                        name="paypalMerchantAccount"
                        rules={[
                          {
                            required: false,
                            message: `Paypal Merchant Account cannot be Empty`,
                          },
                        ]}
                        validateFirst={true}
                      >
                        <Input placeholder="" className="formInput" />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className="gutter-row" md={{ span: 12 }} xs={{ span: 24 }}>
                <div className="shadow-md hover:shadow-md">
                  <div className="flex items-center w-full p-4 border border-b-1 border-t-0 border-r-0 border-l-0">
                    <div className="w-6/12">
                      <h1 className="text-lg font-medium">Stripe</h1>
                    </div>
                    <div className="text-right w-6/12">
                      <Switch value={false} />
                    </div>
                  </div>
                  <Row className="p-4" gutter={16}>
                    <Col md={{ span: 24 }} xs={{ span: 24 }}>
                      <Form.Item
                        label="Publish Key"
                        name="publishKey"
                        valuePropName="option"
                        rules={[
                          {
                            required: false,
                            message: "Publish Key cannot be Empty",
                          },
                        ]}
                      >
                        <Input placeholder="" className="formInput" />
                      </Form.Item>
                    </Col>
                    <Col md={{ span: 24 }} xs={{ span: 24 }}>
                      <Form.Item
                        label="Secret key"
                        name="secretKey"
                        rules={[
                          {
                            required: false,
                            message: `Secret keyt cannot be Empty`,
                          },
                        ]}
                        validateFirst={true}
                      >
                        <Input placeholder="" className="formInput" />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col
                className="gutter-row pt-4"
                md={{ span: 12 }}
                xs={{ span: 24 }}
              >
                <div className="shadow-md hover:shadow-md">
                  <div className="flex items-center w-full p-4 border border-b-1 border-t-0 border-r-0 border-l-0">
                    <div className="w-6/12">
                      <h1 className="text-lg font-medium">Razorpay</h1>
                    </div>
                    <div className="text-right w-6/12">
                      <Switch value={true} />
                    </div>
                  </div>
                  <Row className="p-4" gutter={16}>
                    <Col md={{ span: 24 }} xs={{ span: 24 }}>
                      <Form.Item
                        label="Key Id"
                        name="keyId"
                        valuePropName="option"
                        rules={[
                          {
                            required: false,
                            message: "Paypal Mode be Empty",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col md={{ span: 24 }} xs={{ span: 24 }}>
                      <Form.Item
                        label="Key Secret"
                        name="keySecret"
                        rules={[
                          {
                            required: false,
                            message: `Key Secret cannot be Empty`,
                          },
                        ]}
                        validateFirst={true}
                      >
                        <Input placeholder="" className="formInput" />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col
                className="gutter-row pt-4"
                md={{ span: 12 }}
                xs={{ span: 24 }}
              >
                <div className="shadow-md hover:shadow-md">
                  <div className="flex items-center w-full p-4 border border-b-1 border-t-0 border-r-0 border-l-0">
                    <div className="w-6/12">
                      <h1 className="text-lg font-medium">Paystack</h1>
                    </div>
                    <div className="text-right w-6/12">
                      <Switch value={false} />
                    </div>
                  </div>
                  <Row className="p-4" gutter={16}>
                    <Col md={{ span: 24 }} xs={{ span: 24 }}>
                      <Form.Item
                        label="Secret Key"
                        name="secretKey"
                        valuePropName="option"
                        rules={[
                          {
                            required: false,
                            message: "Secret Key be Empty",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col md={{ span: 24 }} xs={{ span: 24 }}>
                      <Form.Item
                        label="Publish Key"
                        name="publishkeyAccount"
                        rules={[
                          {
                            required: false,
                            message: `Publish Key cannot be Empty`,
                          },
                        ]}
                        validateFirst={true}
                      >
                        <Input placeholder="" className="formInput" />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className="gutter-row pt-7 pb-4" xs={{ span: 24 }}>
                <button
                  type="submit"
                  htmlType="submit"
                  className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white border-0 text-white rounded-full"
                >
                  Save Changes
                </button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div className="add-offline-payment lg:w-4/12 md:w-full pt-6 pl-3 pr-6">
        <div className="shadow-md hover:shadow-md ">
          <div className="p-4 border border-b-1 border-t-0 border-r-0 border-l-0">
            <h1 className="text-lg font-medium">Add Offline Payment</h1>
          </div>
          <Form>
            <div className="p-4">
              <Row gutter={16} className="pt-2.5">
                <Col className="gutter-row" xs={{ span: 24 }}>
                  <Form.Item
                    label=""
                    name="User"
                    valuePropName="option"
                    rules={[
                      { required: false, message: "User cannot be Empty" },
                    ]}
                  >
                    <Select
                      placeholder="Select User"
                      style={{ width: "100%" }}
                      className=""
                      defaultValue=""
                    >
                      {userData?.map((opt, i) => {
                        return (
                          <Option key={i} value={opt?.value}>
                            {opt?.label}
                          </Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={{ span: 24 }}>
                  <Form.Item
                    label=""
                    name="User"
                    valuePropName="option"
                    rules={[
                      { required: false, message: "User cannot be Empty" },
                    ]}
                  >
                    <Select
                      placeholder="Select Package"
                      style={{ width: "100%" }}
                      className=""
                      defaultValue=""
                    >
                      {packageData?.map((opt, i) => {
                        return (
                          <Option key={i} value={opt?.value}>
                            {opt?.label}
                          </Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={{ span: 24 }}>
                  <div className="py-3">
                    <label>Subscription Type</label>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>Monthly</Radio>
                    <Radio value={2}>Yearly</Radio>
                  </Radio.Group>
                </Col>
                <Col className="gutter-row" xs={{ span: 24 }}>
                  <div className="pt-4 pb-3">
                    <label>Payment status</label>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>Verified</Radio>
                    <Radio value={2}>Pending</Radio>
                  </Radio.Group>
                </Col>
                <Col className="gutter-row pt-4 pb-6" xs={{ span: 24 }}>
                  <button
                    type="submit"
                    htmlType="submit"
                    className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white border-0 text-white rounded-full"
                  >
                    Add Payment
                  </button>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
