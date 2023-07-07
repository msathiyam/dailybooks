import React from 'react'
import {form,Row,Col,Form,Input} from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
const Index = ({ setOpen }) => {
 const [form] = Form.useForm();
 const saveLanguage = (data) => {
    console.log("data : ", data);
  };
  const { TextArea } = Input;

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
}
  return (
    <>
    <div className='items-center justify-between flex sm:flex-col md:flex-row mb-5 '>
    <div className="flex flex-col">
    <div className="text-[#22314F] sm:text-lg font-bold text-sm ">
    Add New country
    </div>
  </div>  
  <div className="flex">
  <button
    className="bg-red-700 text-white text-center py-1 px-4 mr-[12px] rounded-[4px]"
    
  >
    Cancel{" "}
  </button>
  <button className="bg-blue-600 text-white text-center py-1 px-4  rounded-[4px]">
    Save{" "}
  </button>
</div>
</div>
<Form form={form} layout="vertical" onFinish={saveLanguage}>
     
        <Row className="px-10 m-auto pt-2.5" gutter={16}>
          <Col className="gutter-row" xs={{ span: 24 }}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: `Name cannot be Empty` }]}
              validateFirst={true}
            >
              <Input
                placeholder="united states"
                className="formInput"
              />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }}>
            <Form.Item
              label="Country code"
              name="Country code"
              rules={[
                { required: true, message: `Short Form cannot be Empty` },
              ]}

              validateFirst={true}
            >
              
              <Input  
              placeholder="US"
              className="formInput" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }}>
            <Form.Item
              label="Currency Name"
              name="currency"
              rules={[{ required: true, message: `Name cannot be Empty` }]}
              validateFirst={true}
            >
              <Input
                placeholder="USD"
                className="formInput"
              />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }}>
            <Form.Item
              label="Currency Symbol"
              name="Symbol"
              rules={[
                { required: true, message: `Short Form cannot be Empty` },
              ]}
              validateFirst={true}
            >
              <Input  
               placeholder="$"
              className="formInput" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }}>
            <Form.Item
              label="Currency code"
              name="code"
              rules={[{ required: true, message: `Name cannot be Empty` }]}
              validateFirst={true}
            >
              <Input
                placeholder="USD"
                className="formInput"
              />
            </Form.Item>
          </Col>
         
         
        </Row>
      </Form>
</>
  )
}
export default Index;
