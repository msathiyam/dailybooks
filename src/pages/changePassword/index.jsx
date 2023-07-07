import React from 'react';
import CommingSoon from '../../components/comming-soon';
import { Button, Input, Form } from "antd"

const ChangePassword = () => {
    const onLoginPress = () => {

        console.log("data12333");

    };
    return (
        <div className="">

            <div className="inset-0 items-center justify-center py-24 lg:flex lg:flex-col sm:flex sm:flex-col  ">
                <div className="w-full   md:w-[30rem] lg:w-96 xl:w-[30rem] items-center justify-center flex flex-col px-8 rounded-xl  shadow-md hover:shadow-md  ">

                    <div className="w-full   mt-5 ">
                        <h1 className='font-bold text-xl text-center'>Change Password</h1>
                    </div>

                    <div className="w-full flex-grow mt-5">
                        <div className="relative  ">

                            <Form layout="vertical" onFinish={onLoginPress}
                            >
                                <Form.Item name="old password" className=""
                                    label="old password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Old password is required!',
                                        },
                                    ]}>

                                    <Input
                                        placeholder='old password'
                                        className="h-8"
                                    />
                                </Form.Item>
                                <Form.Item name="New password" className=""
                                    label="New password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'New password is required!',
                                        },
                                    ]}

                                >

                                    <Input
                                        placeholder='new password'
                                        className="h-8"
                                    />
                                </Form.Item>
                                <Form.Item name="confirm password" className=""
                                    label="confirm password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'confirm password is required!',
                                        },
                                    ]}

                                >

                                    <Input
                                        placeholder='Confirm password'
                                        className="h-8"
                                    />
                                </Form.Item>

                                <div className='pb-5 flex justify-center'>
                                    <Button className='bg-blue-500 text-white w-20 h-10 rounded-lg hover:bg-blue-500 hover:text-white'>Confirm</Button>
                                </div>

                            </Form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword