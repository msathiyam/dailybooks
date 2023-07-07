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
    Add New Feature
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
              label="Tittle"
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
              label="Order"
              name="order"
              rules={[
                { required: true, message: `Short Form cannot be Empty` },
              ]}
              validateFirst={true}
            >
              <Input  className="formInput" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }}>
          <Form.Item label="TextArea"
           rules={[
            { required: true, message: `Short Form cannot be Empty` },
          ]}
          validateFirst={true}
          >
          <TextArea rows={4} />
        
        </Form.Item>
        </Col>
        <span className='ml-3 py-2'>File upload</span>
        <Col className="gutter-row" xs={{ span: 24 }}>
          <Upload {...props} >
           <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
          </Col>
        </Row>
      </Form>
</>
  )
}
export default Index;
