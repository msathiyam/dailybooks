import React from "react";
import { Col, Form, Input, Row } from "antd";
import Switch from "../../../components/switch";

export default function Discounts() {
  const [form] = Form.useForm();

  const savePayment = (values) => {
    console.log("", values);
  };

  return (
    <div className="lg:flex md:block text-center">
      <div className="currency m-auto lg:w-2/5 md:w-full p-6">
        <Form form={form} layout="vertically" onFinish={savePayment}>
          <div className="shadow-md hover:shadow-md">
            <div className="flex items-center w-full px-4 py-2 border border-b-1 border-t-0 border-r-0 border-l-0">
              <div className="w-6/12 text-left">
                <h1 className="text-lg font-medium">Discount</h1>
              </div>
              <div className="text-right w-6/12">
                <Switch value={false} />
              </div>
            </div>
            <Row className="pt-8 pr-4" gutter={16}>
              <Col
                className="flex items-center justify-center"
                md={{ span: 8 }}
                xs={{ span: 24 }}
              >
                <div>
                  <h1 className="text-lg font-medium">Basic</h1>
                </div>
              </Col>
              <Col md={{ span: 8 }} xs={{ span: 24 }} className="">
                <div className="text-left">
                  <p className="text-base m-3">
                    Monthly<span className="font-bold">%</span>
                  </p>
                </div>
                <Form.Item
                  label=""
                  name="basic"
                  valuePropName="option"
                  className=" w-full md:w-4/5 lg:w-4/5 pl-3"
                  rules={[
                    {
                      required: false,
                      message: "Basic be Empty",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col md={{ span: 8 }} xs={{ span: 24 }}>
                <div className="text-left">
                  <p className="text-base m-3">
                    Yearly<span className="font-bold">%</span>
                  </p>
                </div>
                <Form.Item
                  label=""
                  name="basic"
                  valuePropName="option"
                  className="w-full md:w-4/5 lg:w-4/5 pl-3"
                  rules={[
                    {
                      required: false,
                      message: "Basic be Empty",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
            </Row>
            <Row className="pt-3 pr-4" gutter={16}>
              <Col
                className="flex items-center justify-center"
                md={{ span: 8 }}
                xs={{ span: 24 }}
              >
                <div>
                  <h1 className="text-lg font-medium">Standard</h1>
                </div>
              </Col>
              <Col md={{ span: 8 }} xs={{ span: 24 }}>
                <div className="text-left">
                  <p className="text-base m-3">
                    Monthly<span className="font-bold">%</span>
                  </p>
                </div>
                <Form.Item
                  label=""
                  name="basic"
                  valuePropName="option"
                  className="w-full md:w-4/5 lg:w-4/5 pl-3"
                  rules={[
                    {
                      required: false,
                      message: "Basic be Empty",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col md={{ span: 8 }} xs={{ span: 24 }}>
                <div className="text-left">
                  <p className="text-base m-3">
                    Yearly<span className="font-bold">%</span>
                  </p>
                </div>
                <Form.Item
                  label=""
                  name="basic"
                  valuePropName="option"
                  className="w-full md:w-4/5 lg:w-4/5 pl-3"
                  rules={[
                    {
                      required: false,
                      message: "Basic be Empty",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
            </Row>
            <Row className="pt-3 pr-4" gutter={16}>
              <Col
                className="flex items-center justify-center"
                md={{ span: 8 }}
                xs={{ span: 24 }}
              >
                <div>
                  <h1 className="text-lg font-medium ">Premium</h1>
                </div>
              </Col>
              <Col md={{ span: 8 }} xs={{ span: 24 }}>
                <div className="text-left">
                  <p className="text-base m-3">
                    Monthly<span className="font-bold">%</span>
                  </p>
                </div>
                <Form.Item
                  label=""
                  name="basic"
                  valuePropName="option"
                  className="w-full md:w-4/5 lg:w-4/5 pl-3"
                  rules={[
                    {
                      required: false,
                      message: "Basic be Empty",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col md={{ span: 8 }} xs={{ span: 24 }}>
                <div className="text-left">
                  <p className="text-base m-3">
                    Yearly<span className="font-bold">%</span>
                  </p>
                </div>
                <Form.Item
                  label=""
                  name="basic"
                  valuePropName="option"
                  className="w-full md:w-4/5 lg:w-4/5 pl-3"
                  rules={[
                    {
                      required: false,
                      message: "Basic be Empty",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} className="text-right">
                <Col className="gutter-row py-7 flex justify-center" xs={{ span: 24 }}>
                  <button
                    type="submit"
                    htmlType="submit"
                    className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white border-0 text-white rounded-full"
                  >
                    Save Changes
                  </button>
                </Col>
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
}
