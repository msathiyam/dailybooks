/** @format */

import { Checkbox, Divider, Dropdown, Menu } from "antd";
import React, { useState, useEffect } from "react";
import { SEARCH_LINE } from "../../../assets/Images/index";
import Tables from "../../../components/table";
import SideDrawer from "../../../components/drawer";
import AddFeatures from "./Addcompany";
// import ViewOrders from "./view-orders/view-orders";
import Editfeatures from "./EditCompany";

const orderData = [
  {
    id: 1,
    name: "Tanzania - TZ",
    type: "TZS - TSh - Tanzanian Shilling",
    action: "",
  },
  {
    id: 2,
    name: "Zimbabwe - ZW	",
    type: "P - BWP - Botswana pula",
    action: "",
  },
  
];

function Orders() {
  const [data, setData] = useState(orderData);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);
  const [edit, setEdit] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [Ordersinfo, setOrdersInfo] = useState({
    status: [],
    response: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { status } = Ordersinfo;
    if (checked) {
      setOrdersInfo({
        status: [...status, value],
        response: [...status, value],
      });
    } else {
      setOrdersInfo({
        status: status.filter((e) => e !== value),
        response: status.filter((e) => e !== value),
      });
    }
  };
  const checkedStatus = Ordersinfo.response;

  useEffect(() => {
    let resultData = [];
    const filterData = data.filter((item) => {
      checkedStatus.map((val) => {
        if (val.toLowerCase() === item.status.props.children.toLowerCase()) {
          resultData.push(item);
        }
      });
    });
    setFilteredData(resultData);
  }, [checkedStatus]);

  const showViewPage = () => {
    setView(true);
  };

  useEffect(() => {
    if (query) {
      const searchData = data?.filter(
        (item) =>
          item.customer.toLowerCase().includes(query.toLowerCase()) ||
          item.email.toLowerCase().includes(query.toLowerCase()) ||
          item.company.toLowerCase().includes(query.toLowerCase())
      );
      setData(searchData);
    }
    if (query === "") {
      setData(orderData);
    }
  }, [query]);

  const showTotal = (pages, range) => {
    return `No of records: ${range[0]}-${range[1]} of ${pages} `;
  };

  const menu = (
    <Menu
      items={[
        {
          label: (
            <div
              className="flex items-center pl-[20px]  text-[12px] uppercase"
              onClick={() => {
                setView(true);
              }}
            >
              <div className=" font-normal hover:text-blue-400 " type="">
                <i className="ri-eye-line ri-lg mr-2 align-sub"></i>
                view
              </div>
            </div>
          ),
          key: "0",
        },
        {
          label: (
            <div
              className="flex items-center  pl-[20px]  text-[12px] uppercase"
              onClick={() => {
                setEdit(true);
              }}
            >
              <div className=" font-normal hover:text-blue-400">
                <i className="ri-pencil-line ri-lg mr-1.5 align-sub"></i>
                edit
              </div>
            </div>
          ),
          key: "2",
        },
        {
          label: (
            <div className="flex items-center  pl-[20px] text-[12px] uppercase">
              <div className=" font-normal hover:text-blue-400">
                <i className="ri-delete-bin-line ri-lg mr-1.5 align-sub"></i>
                delete
              </div>
            </div>
          ),
          key: "3",
        },
      ]}
    />
  );

  const menuStatus = [
    {
      id: "1",
      label: "Paid",
    },

    {
      id: "2",
      label: "Pending",
    },
    {
      id: "3",
      label: "Cancelled",
    },
  ];

  const filterMenu = (
    <Menu
      className=" w-40 px-3 mt-2"
      items={[
        {
          label: (
            <ul className="items-center ">
              {menuStatus.map((value, id) => {
                return (
                  <li className="text-sm font-normal" key={id}>
                    <Checkbox
                      value={value.label}
                      className="truncate mb-1"
                      onChange={handleChange}
                    >
                      {value.label}
                    </Checkbox>
                  </li>
                );
              })}
            </ul>
          ),
        },
      ]}
    />
  );

  const orderColumns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => {
        return a.id > b.id;
      },
      ellipsis: {
        showTitle: false,
      },
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            showViewPage();
            localStorage.setItem("orderData", JSON.stringify(record));
          },
        };
      },
      responsive: ["xs", "md"],
    },   
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
    {
      title: "TYPE",
      dataIndex: "type",
      key: "type",
      sorter: (a, b) => a.type.localeCompare(b.type),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
    
   
    {
      title: "ACTION",
      dataIndex: "action",
      key: "action",
      sorter: (a, b) => a.action - b.action,
      ellipsis: {
        showTitle: false,
      },
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            localStorage.setItem("orderData", JSON.stringify(record));
          },
        };
      },
      render: (_, record) => (
        <Dropdown overlay={menu} trigger={"click"} placement={"bottomRight"}>
          <div className="w-32 flex md:justify-center items-center xs:justify-start text-blue-300 cursor-pointer">
            View <i className="ri-arrow-down-s-line ri-lg ml-2 text-black"></i>
          </div>
        </Dropdown>
      ),

      responsive: ["xs", "md"],
    },
  ];

  return (
    <>
      {view && (
        <SideDrawer
          placement="right"
          width={"65%"}
          headerStyle={{ padding: "0px" }}
          // closeIcon={
          //   <i
          //     className="ri-close-line ri-1x absolute z-40 left-3 top-3 "
          //     onClick={() => {
          //       setView(false);
          //     }}
          //   />
          // }
        //   closeIcon={
        //     <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
        //       <i
        //           class="ri-close-line ri-1x absolute z-40 left-50 bottom-450 "
        //           onClick={() => {
        //                   setView(false);
        //                 }} />     
        //       </div>
        //   }
          closable={true}
          visible={view}
          bodyStyle={{ backgroundColor: "white", padding: "30px" }}
        >
          {/* <ViewOrders setView={setView} /> */}
        </SideDrawer>
      )}
      {open && (
        <SideDrawer
          placement="right"
          width={"65%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={
            <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
              <i
                  class="ri-close-line ri-1x absolute z-40 left-50 bottom-450 "
                  onClick={() => {
                          setOpen(false);
                        }}          />
              </div>
          }
          // closeIcon={
          //   <i
          //     class="ri-close-line ri-1x absolute z-40 left-3 top-3 "
          //     onClick={() => {
          //       setOpen(false);
          //     }}
          //   />
          // }
          closable={true}
          visible={open}
          bodyStyle={{ backgroundColor: "", padding: "30px" }}
        >
          <AddFeatures setOpen={setOpen} />
        </SideDrawer>
      )}
      {edit && (
        <SideDrawer
          placement="right"
          width={"65%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={
            <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
              <i
                  class="ri-close-line ri-1x absolute z-40 left-50 bottom-450 "
                  onClick={() => {
                          setOpen(false);
                        }}          />
              </div>
          }
          closable={true}
          visible={edit}
          bodyStyle={{ backgroundColor: "white", padding: "30px" }}
        >
          <Editfeatures setEdit={setEdit} />
        </SideDrawer>
      )}
      <div className="flex flex-col  pr-8 ml-10">
        <Divider />
        <div className="flex flex-row justify-between ">
          <div>
            <h1 className="text-xl font-semibold">Country</h1>
            <p className="text-base text-gray-400">
              Manage the details of your all kind of country
            </p>
          </div>
          <div
            className="cursor-pointer bg-blue-500 hover:bg-blue-400 w-10 h-10 flex items-center justify-center text-white rounded mt-2 "
            onClick={() => {
              setOpen(true);
            }}
          >
            <i className="ri-add-line ri-2x"></i>
          </div>
        </div>
        <Divider />
        <div className=" flex justify-between items-center mb-6 flex-col sm:flex-row">
          <div className="flex relative items-center mb-3 md:mb-0 w-[100%] sm:w-auto  border border-solid rounded">
            <input
              className="h-10 pr-8 pl-10 outline-none rounded "
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              placeholder="Search"
            />
            <div className="left-[10px] absolute  w-3 h-3">
              <i className={`ri-${SEARCH_LINE} ri-lg text-gray-400`}></i>
            </div>
          </div>

          <div className=" w-[100%] sm:w-auto flex justify-center items-center relative border border-solid rounded">
            <input
              className="h-10 rounded pl-4 pr-8 outline-none "
              placeholder="Filter"
            />

            <Dropdown
              overlay={filterMenu}
              trigger={"click"}
              placement={"bottomLeft"}
            >
              <div className="right-[20px] absolute  w-2 h-3 cursor-pointer">
                <i className="ri-arrow-down-s-line ri-lg"></i>
              </div>
            </Dropdown>
          </div>
        </div>

        <Tables
          columns={orderColumns}
          data={checkedStatus?.length > 0 ? filteredData : data}
          scroll={{
            x: 700,
          }}
          pagination={{
            current: page,
            pageSize: pageSize,
            showTotal: showTotal,
            pageSizeOptions: [5, 10, 15, 20],
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
        />
      </div>
    </>
  );
}

export default Orders;
