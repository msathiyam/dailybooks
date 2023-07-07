import { Col, Form, Row, Input, Radio, Space } from "antd";
import React, { useState } from "react";

const AddLanguage = ({ setOpen }) => {
  const [form] = Form.useForm();
  const [textDirection, setTextDirection] = useState(1);
  const onChange = (e) => {
    setTextDirection(e.target.value);
  };
  const saveLanguage = (data) => {
    console.log("data : ", {...data, textDirection});
  };

  return (
    <div className="">
      <div className="block flex justify-end pl-4 mt-2"></div>
      <Form form={form} layout="vertical" onFinish={saveLanguage}>
        <Row>
          <Col md={{ span: 12 }} xs={{ span: 24 }}>
            <h1 className="text-[#22314F] text-lg font-bold ">
              Add Language
            </h1>
          </Col>
          <Col md={{ span: 12 }} xs={{ span: 24 }} className="text-right">
            <button
              type="button"
              className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mr-3"
            >
              <span onClick={()=>setOpen(false)} className="text-[#AC0C02]">
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
          <Row gutter={16} className="pt-2.5">
            <Col className="gutter-row" xs={{ span: 24 }}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: false, message: `Name cannot be Empty` }]}
                validateFirst={true}
              >
                <Input
                  placeholder="Example: English, Duch"
                  className="formInput"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={{ span: 24 }}>
              <Form.Item
                label="Short Form"
                name="shortForm"
                rules={[
                  { required: false, message: `Short Form cannot be Empty` },
                ]}
                validateFirst={true}
              >
                <Input placeholder="Example: en, du" className="formInput" size="large"/>
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }}>
              <label>Text direction</label>
            </Col>
            <Col className="gutter-row" xs={{ span: 24 }}>
              <Radio.Group onChange={onChange} value={textDirection}>
                <Space direction="vertical">
                  <Radio value={1}>LTR (Left to Right)</Radio>
                  <Radio value={2}>RTL (Right to Left)</Radio>
                </Space>
              </Radio.Group>
            </Col>
          </Row>
        {/* </div> */}
      </Form>
    </div>
  );
};

export default AddLanguage;
