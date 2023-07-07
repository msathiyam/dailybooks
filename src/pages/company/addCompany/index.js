import React, { useState } from "react";
import { Col, Form, Row, Input } from "antd";
import TextEditor from "../textEditor";

const AddCompany = ({ setOpen }) => {
  const [form] = Form.useForm();
  const [editorHtml, setEditorHtml] = useState('');

  const sendChildToParent = (dataFormChild) => {
    setEditorHtml(dataFormChild)
  };

  const saveLanguage = (data) => {
    console.log("data : ", {...data, editorHtml});
  };

  return (
    <div className="">
      <div className="block flex justify-end pl-4 mt-2"></div>
      <Form form={form} layout="vertical" onFinish={saveLanguage}>
        <Row>
          <Col md={{ span: 12 }} xs={{ span: 24 }}>
            <h1 className="text-[#22314F] text-lg font-bold ">
              Add New Page
            </h1>
          </Col>
          <Col md={{ span: 12 }} xs={{ span: 24 }} className="text-right">
            <button
              type="button"
              className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"
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
                label="Page title"
                name="pageTitle"
                rules={[{ required: false, message: `Page title cannot be Empty` }]}
                validateFirst={true}
              >
                <Input
                  placeholder=""
                  className="formInput"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={{ span: 24 }}>
              <Form.Item
                label="Page slug"
                name="pageSlug"
                rules={[
                  { required: false, message: `Page slug cannot be Empty` },
                ]}
                validateFirst={true}
              >
                <Input placeholder="" className="formInput" size="large"/>
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }}>
              <label>Page description</label>
            <TextEditor
                  sendChildToParent={sendChildToParent}
                  description={"<p></p>"} />
            </Col>
           
          </Row>
        {/* </div> */}
      </Form>
    </div>
  );
};

export default AddCompany;
