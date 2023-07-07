import React from 'react'
import {Row,Col,Form,Input,Select,Button} from "antd";
import Pricesettings from './price-settings';

export default function Mailsettings() {
    const [form] = Form.useForm();
    const Updatesettings = (data) => {
        console.log("data : ", data);
      };
  return (
    <div className='md:flex lg:flex gap-4'>
        <div className='w-full md:w-8/12 lg:w-8/12 px-5 shadow-md hover:shadow-md'>
        <h1 className='font-bold text-base py-5 border-b border-solid border-bordercolor'>Update Settings</h1>
       <div className='py-5'>
        <div className='border-l-8 border-solid border-bordercolor rounded-lg px-4 '>
            <h1 className=' font-bold text-base'><i className="ri-information-line mt-2"></i>Gmail Setup</h1>
            <h6 className=' font-semibold text-small'>Gmail host:  smtp.gmail.com</h6>
             <h6 className=' font-semibold text-small'>Gmail port:  465</h6>
             <h6 className='font-bold text-green-700 py-3'> If you are using gmail smtp please make sure you have set below settings before sending mail</h6>
             <h6 className='font-semibold'>Two factor authentication off</h6>
             <h6 className='font-semibold py-3'>Less secure app on</h6>
             </div>
             </div>
             <Form form={form} layout="vertical" onFinish={Updatesettings}>
             <Row className=" m-auto pt-2.5" gutter={16}>
             <Col className="gutter-row" xs={{ span: 24 }}>
             <Form.Item label="Mail Protocol">
             <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      </Col>
          <Col className="gutter-row" xs={{ span: 24 }}>
            <Form.Item
              label="Mail Title"
              name="Tittle"
              rules={[{ required: true, message: `Name cannot be Empty` }]}
              validateFirst={true}
            >
              <Input
                // placeholder="Example: English, Duch"
                className="formInput"
              />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }}>
            <Form.Item
              label="Mail Title"
              name="Tittle"
              rules={[{ required: true, message: `Name cannot be Empty` }]}
              validateFirst={true}
            >
              <Input
                // placeholder="Example: English, Duch"
                className="formInput"
              />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }}>
            <Form.Item
              label="Mail host"
              name="Tittle"
              rules={[{ required: true, message: `Name cannot be Empty` }]}
              validateFirst={true}
            >
              <Input
                // placeholder="Example: English, Duch"
                className="formInput"
              />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }}>
            <Form.Item
              label="Mail Port"
              name="Tittle"
              rules={[{ required: true, message: `Name cannot be Empty` }]}
              validateFirst={true}
            >
              <Input
                // placeholder="Example: English, Duch"
                className="formInput"
              />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }}>
             <Form.Item label="Mail Encryption">
             <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
        <h1 className='font-bold text-small'> 'SSL' is used for port 465/25, 'TLS' is used for port 587</h1>
      </Form.Item>
      </Col>
          <Col className="gutter-row" xs={{ span: 24 }}>
            <Form.Item
              label="Mail Username"
              name="Tittle"
              rules={[{ required: true, message: `Name cannot be Empty` }]}
              validateFirst={true}
            >
              <Input
                // placeholder="Example: English, Duch"
                className="formInput"
              />
            </Form.Item>
          </Col>
          
          <Col className="gutter-row " xs={{ span: 24 }}>
            <Form.Item
              label="Mail password"
              name="Tittle"
              rules={[{ required: true, message: `Name cannot be Empty` }]}
              validateFirst={true}
            >
              <Input
                // placeholder="Example: English, Duch"
                className="formInput"
              />
            </Form.Item>
          </Col>
          <div className='pb-5'>
          <Button className="bg-gray-100 text-black-500 rounded-full">Send Test Mail</Button>
          </div>
          </Row>
          </Form>
        </div>
        <div className='w-full md:w-4/12 lg:w-4/12'>
       <Pricesettings/>
       </div>
    </div>
  )
}
