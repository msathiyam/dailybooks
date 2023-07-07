import React, { useState, useEffect } from "react";
import { Col, Radio, Row, Modal } from "antd";
import GreenTick from "../../../assets/Images/green-tick-circle.svg";
import "./index.css";

const themeData = [
  {
    id: 1,
    img: "https://dailybooks.com/assets/admin/layouts/theme_1.jpg",
    activeTheme: true,
  },
  {
    id: 2,
    img: "https://dailybooks.com/assets/admin/layouts/theme_2.jpg",
    activeTheme: false,
  },
];

export default function Appearance() {
  const [open, setOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState([]);
  const [modalValue, setModalValue] = useState({});

  const handleTheme = (val) => {
    let res = themeData.map((item, i) => {
      if (item.id === val) {
        return { ...item, activeTheme: true };
      } else {
        return { ...item, activeTheme: false };
      }
    });
    setActiveTheme(res);
  };

  useEffect(() => {
    setActiveTheme(themeData);
  }, []);

  const handleImage = (val) => {
    setModalValue(val);
    setOpen(!open);
  };

  return (
    <div className="appearance p-6">
      <div className="w-full shadow-md hover:shadow-md rounded-md">
        <div className="border border-b-1 border-t-0 border-r-0 border-l-0 py-5 px-8">
          <h1 className="text-lg font-medium">Set Theme</h1>
        </div>
        <div className="p-4">
          <Row className="p-4" gutter={16}>
            {activeTheme?.map((item, i) => {
              return (
                <Col lg={{ span: 12 }} md={{ span: 24 }} xs={{ span: 24 }}>
                  <div className="flex items-center justify-center py-4">
                    {item.activeTheme ? (
                      <img className="w-12 h-12" src={GreenTick} />
                    ) : (
                      <span className="h-12"></span>
                    )}
                  </div>
                  <div
                    className={`p-3 theme ${
                      item.activeTheme ? "active bg-[#cce5ff] rounded-xl" : "inactive"
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <img
                        className="cursor-pointer"
                        src={item.img}
                        onClick={() => handleImage(item)}
                      />
                    </div>
                    <div className="flex p-3 items-center justify-center">
                      <Radio
                        onChange={() => handleTheme(item?.id)}
                        checked={item.activeTheme}
                      >
                        Template {item.id}
                      </Radio>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="border border-b-0 border-t-1 border-r-0 border-l-0 py-5 px-8">
          <Col className="gutter-row " xs={{ span: 24 }}>
            <button
              type="submit"
              htmlType="submit"
              className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white border-0 text-white rounded-full"
            >
              Save Changes
            </button>
          </Col>
        </div>
        <Modal
          title={`Theme ${modalValue.id}`}
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={700}
          style={{
            top: 60,
          }}
          footer=""
        >
          <img src={modalValue.img} />
        </Modal>
      </div>
    </div>
  );
}
