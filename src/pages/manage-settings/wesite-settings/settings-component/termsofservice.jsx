import React, { useState } from 'react'
import Pricesettings from './price-settings'
import {Row,Col,Form,Input,Select,Button} from "antd";
import TextEditor from "../../../../components/textEditor";

export default function Generalsettings() {
  const [form] = Form.useForm();
  const recaptcha = (data) => {
      console.log("data : ", data);
    };
    const [editorHtml, setEditorHtml] = useState('');

    const sendChildToParent = (dataFormChild) => {
      setEditorHtml(dataFormChild)
    };
  
    const saveLanguage = (data) => {
      console.log("data : ", {...data, editorHtml});
    };
  
  return (
    <div className='md:flex lg:flex'>
    <div className='w-full md:w-8/12 lg:w-8/12 shadow-md hover:shadow-md px-10'>
         <h1 className='font-bold text-base py-5 border-b border-solid border-bordercolor'>Update Settings</h1>
         <Form form={form} layout="vertical" onFinish={recaptcha} className='py-5 ' >
          <Row>
         <Col xs={{ span: 24 }}>
              <label>Page description</label>
            <TextEditor
                  sendChildToParent={sendChildToParent}
                  description=""
                  placeholder="" />
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
