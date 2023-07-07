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

 
  return (
    <>
    <div className='items-center justify-between flex sm:flex-col md:flex-row mb-5 '>
    <div className="flex flex-col">
    <div className="text-[#22314F] sm:text-lg font-bold text-sm ">
    Add New Faq
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
          <Form.Item label="TextArea"
           rules={[
            { required: true, message: `Short Form cannot be Empty` },
          ]}
          validateFirst={true}
          >
          <TextArea rows={4} />
        
        </Form.Item>
        </Col>
      
        </Row>
      </Form>
</>
  )
}
export default Index;
