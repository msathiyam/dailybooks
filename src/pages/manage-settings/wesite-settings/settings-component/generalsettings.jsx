import React from 'react'
import {Row,Col,Form,Input,Select,Button,message, Upload } from "antd";
import Pricesettings from './price-settings';
import { UploadOutlined } from '@ant-design/icons';

export default function Mailsettings() {
    const [form] = Form.useForm();
    const Updatesettings = (data) => {
        console.log("data : ", data);
      };
      const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
  return (
    <div className='md:flex lg:flex gap-4'>
        <div className='w-full md:w-8/12 lg:w-8/12 px-5 shadow-md hover:shadow-md'>
        <h1 className='font-bold text-base py-5 border-b border-solid border-bordercolor'>Update Settings</h1>
       <div className='py-7 md:flex lg:flex justify-between justify-center'>
       <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
  <div className='py-5 md:py-0 lg:py-0'>
  <Upload {...props} >
    <Button icon={<UploadOutlined />} className=''>Click to Upload</Button>
  </Upload>
  </div>
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
             </div>
             <Form form={form} layout="vertical" onFinish={Updatesettings}>
             <Row className=" m-auto " gutter={16}>
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
