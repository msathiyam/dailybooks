/** @format */

import { Checkbox, Divider, Dropdown, Menu } from "antd";
import React, { useState, useEffect } from "react";
import { SEARCH_LINE } from "../../assets/Images/index";
import Tables from "../../components/table";
import SideDrawer from "../../components/drawer";
// import AddContact from "./AddContact";
// // import ViewOrders from "./view-orders/view-orders";
// import Editcontact from "./Editcontact";

const orderData = [
  {
    id: 1,
    name: "Mike Holmes",
    email: "no-replycat@gmail.com	",
    message: "If you have a local business and want to rank it on google maps in a specific area then this service is for you. Google Map Stacking is one of the best ways to rank your GMB in a specific mile radius. More info: https://www.speed-seo.net/product/google-maps-pointers/ Thanks and Regards Mike Holmes PS: Want an all in one Local Plan that includes everything? https://www.speed-seo.net/product/local-seo-package",
    date: "25 May 2023 10:24 AM	",
    action: "",
  },
  {
    id: 2,
    name: "Eric",
    email: "ericjonesmyemail@gmail.com",
    message: "To the dailybooks.com Admin! I just found your site, quick question… My name’s Eric, I found dailybooks.com after doing a quick search – you showed up near the top of the rankings, so whatever you’re doing for SEO, looks like it’s working well. So here’s my question – what happens AFTER someone lands on your site? Anything? Research tells us at least 70% of the people who find your site, after a quick once-over, they disappear… forever. That means that all the work and effort you put into getting them to show up, goes down the tubes. Why would you want all that good work – and the great site you’ve built – go to waste? Because the odds are they’ll just skip over calling or even grabbing their phone, leaving you high and dry. But here’s a thought… what if you could make it super-simple for someone to raise their hand, say, “okay, let’s talk” without requiring them to even pull their cell phone from their pocket? You can – thanks to revolutionary new software that can literally make that first call happen NOW. Web Visitors Into Leads is a software widget that sits on your site, ready and waiting to capture any visitor’s Name, Email address and Phone Number. It lets you know IMMEDIATELY – so that you can talk to that lead while they’re still there at your site. You know, strike when the iron’s hot! CLICK HERE http://advanceleadgeneration.com to try out a Live Demo with Web Visitors Into Leads now to see exactly how it works. When targeting leads, you HAVE to act fast – the difference between contacting someone within 5 minutes versus 30 minutes later is huge – like 100 times better! That’s why you should check out our new SMS Text With Lead feature as well… once you’ve captured the phone number of the website visitor, you can automatically kick off a text message (SMS) conversation with them. Imagine how powerful this could be – even if they don’t take you up on your offer immediately, you can stay in touch with them using text messages to make new offers, provide links to great content, and build your credibility. Just this alone could be a game changer to make your website even more effective. Strike when the iron’s hot! CLICK HERE http://advanceleadgeneration.com to learn more about everything Web Visitors Into Leads can do for your business – you’ll be amazed. Thanks and keep up the great work! Eric PS: Web Visitors Into Leads offers a FREE 14 days trial – you could be converting up to 100x more leads immediately! It even includes International Long Distance Calling. Stop wasting money chasing eyeballs that don’t turn into paying customers. CLICK HERE http://advanceleadgeneration.com to try Web Visitors Into Leads now. If you'd like to unsubscribe click here http://advanceleadgeneration.com/unsubscribe.aspx?d=dailybooks.com",
    date: "23 May 2023 07:10 PM	",
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
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
    {
      title: "MESSAGE",
      dataIndex: "message",
      key: "message",
      sorter: (a, b) => a.message.localeCompare(b.message),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
    {
        title: "DATE",
        dataIndex: "date",
        key: "date",
        sorter: (a, b) => a.date.localeCompare(b.date),
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
          closeIcon={
            <i
              className="ri-close-line ri-1x absolute z-40 left-3 top-3 "
              onClick={() => {
                setView(false);
              }}
            />
          }
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
      {/* {open && (
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
          <AddContact setOpen={setOpen} />
        </SideDrawer>
      )} */}
      {/* {edit && (
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
          <Editcontact setEdit={setEdit} />
        </SideDrawer>
      )} */}
      <div className="flex flex-col  pr-8 ml-10">
        <Divider />
        <div className="flex flex-row justify-between ">
          <div>
            <h1 className="text-xl font-semibold">Contact</h1>
            <p className="text-base text-gray-400">
              Manage the details of your all kind of contact
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
