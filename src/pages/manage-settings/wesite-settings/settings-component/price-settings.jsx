import React from 'react'
import {Row,Col,Form,Input,Select,Button} from "antd";

export default function Pricesettings() {
    const [form] = Form.useForm();
    const Pricesettings = (data) => {
        console.log("data : ", data);
      };
  return (
    <div> 
        <div className='	 px-5 shadow-md hover:shadow-md '>
    <h1 className='font-bold text-base py-5 border-b border-solid border-bordercolor'>Price Settings</h1>
    <Form form={form} layout="vertical" className='py-5'onFinish={Pricesettings} >

    <Col className="gutter-row" xs={{ span: 24 }}>
         <Form.Item label="Mail Encryption">
         <Select>
      <Select.Option value="demo">$100</Select.Option>
      <Select.Option value="demo">$100.00</Select.Option>
    </Select>
  </Form.Item>
  </Col> 
  <Col className="gutter-row" xs={{ span: 24 }}>
         <Form.Item label="Mail Encryption">
         <Select>
      <Select.Option value="demo">$100(left)</Select.Option>
      <Select.Option value="demo">$100(right)</Select.Option>
    </Select>
  </Form.Item>
  </Col>
  <Col className="gutter-row" xs={{ span: 24 }}>
         <Form.Item label="Mail Encryption">
         <Select>
      <Select.Option value="demo">$100</Select.Option>
      <Select.Option value="demo">$100</Select.Option>

    </Select>
  </Form.Item>
  </Col>
  <Col className="gutter-row" xs={{ span: 24 }}>
         <Form.Item label="Mail Encryption">
         <Select>
      <Select.Option value="default" default>$1.000,00</Select.Option>
      <Select.Option value="demo">$1.000,00</Select.Option>
    </Select>
  </Form.Item>
  </Col>
  </Form>
   </div>
   <div className='mt-10'>
   <Form form={form} layout="vertical" className='p-5 shadow-md hover:shadow-md'>
   <Col className="gutter-row" xs={{ span: 24 }}>
         <Form.Item label="Mail Encryption">
         <Select>
      <Select.Option value="default" default>$1.000,00</Select.Option>
      <Select.Option value="demo">$1.000,00</Select.Option>
    </Select>
  </Form.Item>
  </Col>
  </Form>
  </div>
  <div className='mt-10'>
  <Form form={form} layout="vertical" className='p-5 shadow-md hover:shadow-md'>
   <Col className="gutter-row" xs={{ span: 24 }}>
         <Form.Item label="Mail Encryption">
         <Select>
      <Select.Option value="default" default>$1.000,00</Select.Option>
      <Select.Option value="demo">$1.000,00</Select.Option>
    </Select>
  </Form.Item>
  </Col>
  </Form>
  </div>
   </div>
  )
}
