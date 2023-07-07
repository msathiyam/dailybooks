import React from 'react'
import Pricesettings from './price-settings'
import {Row,Col,Form,Input,Select,Button} from "antd";

export default function Recaptcha() {
  const [form] = Form.useForm();
  const recaptcha = (data) => {
      console.log("data : ", data);
    };
  return (
    <div className='md:flex lg:flex gap-4'>
    <div className='w-full md:w-8/12 lg:w-8/12 px-10 shadow-md hover:shadow-md '>
         <h1 className='font-bold text-base py-5 border-b border-solid border-bordercolor'>Update Settings</h1>
         <Form form={form} layout="vertical" onFinish={recaptcha} className='py-5' >
             <Row className=" m-auto pt-2.5" gutter={16}>
             <h1 className='font-semibold text-base px-2'>Captcha </h1>
             <Col className="gutter-row py-2" xs={{ span: 24 }}>
            <Form.Item
              label="Site key"
              name="Site key"
              rules={[{ required: false, message: `Name cannot be Empty` }]}
              validateFirst={true}
            >
              <Input
                placeholder="6LdOf6ElAAAAAAFMxETFF7EZFADgl0L8LlSbbFmE"
                className="formInput"
              />
            </Form.Item>
          </Col>
          <h1 className='font-semibold text-base px-2'>Captcha</h1>
          <Col className="gutter-row py-2" xs={{ span: 24 }}>
            <Form.Item
              label=" Secret key"
              name="Secret key"
              rules={[{ required: false, message: `Name cannot be Empty` }]}
              validateFirst={true}
            >
              <Input
                placeholder="6LdOf6ElAAAAANiAySrklbrKlyAsDkblS5_GNdzp"
                className="formInput"
              />
            </Form.Item>
          </Col>
      </Row>
      </Form>
    </div>
    <div className='w-full md:w-4/12 lg:4/12'>
      <Pricesettings/>
    </div>
    </div>
  )
}
