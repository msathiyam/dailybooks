import { Col, Form, Row, Input, Radio, Space } from "antd";
import React, { useState } from "react";

const ViewLanguage = ({ setView }) => {
  const [form] = Form.useForm();
  const [textDirection, setTextDirection] = useState(1);
  const onChange = (e) => {
    setTextDirection(e.target.value);
  };
  const saveLanguage = (data) => {
    console.log("data : ", { ...data, textDirection });
  };

  return (
    <div className="">
      <div className="block flex justify-end pl-4 mt-2"></div>
      <Form form={form} layout="vertical" onFinish={saveLanguage}>
        <Row>
          <Col md={{ span: 12 }} xs={{ span: 24 }}>
            <h1 className="text-[#22314F] text-lg font-bold ">View Language</h1>
          </Col>
          <Col md={{ span: 12 }} xs={{ span: 24 }} className="text-right">
            <button
              type="button"
              className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"
            >
              <span onClick={() => setView(false)} className="text-[#AC0C02]">
                Cancel
              </span>
            </button>
            <button
              type="submit"
              htmlType="submit"
              className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"
            >
              Save
            </button>
          </Col>
        </Row>
        {/* <div className="w-1/2 m-auto pt-2.5"> */}
        <div>
          <div>Name:</div>
          <div>Short Form:</div>
          <div>Text Direction:</div>
          <div>Status:</div>
        </div>
        {/* </div> */}
      </Form>
    </div>
  );
};

export default ViewLanguage;
