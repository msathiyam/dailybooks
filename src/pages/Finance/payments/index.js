import { Divider, Dropdown, Menu } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getAllpayments } from "./redux/payments.action";
import Makepayments from "../../Finance/payments/makepayment";
// import EditJsoncreator from "../jsonCreator/EditJsoncreator";
import Tables from "../../../components/table";
const Payments = () => {
  const dispatch = useDispatch();

  const alljson = useSelector((state) => state.PaymentReducer.getpayments);
  console.log("alljson=================", alljson);
  
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [singleLanguage, setSingleLanguage] = useState(null);

  // Pagination
  const showTotal = (pages, range) => {
    return `No of records: ${range[0]}-${range[1]} of ${pages} `;
  };
  // useEffect(() => {
  //   dispatch(getAllpayments());
  // }, [dispatch]);

  // Action Column  Modal
  const menu = (
    <Menu
      items={[
        {
          label: (
            <div className="flex items-center pl-[20px]  text-[12px] uppercase">
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
            <div className="flex items-center  pl-[20px]  text-[12px] uppercase">
              <div
                className=" font-normal hover:text-blue-400"
                onClick={() => {
                  setEdit(true);
                }}
              >
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
                <a href="/makepayment">
                  <i className="ri-currency-fill ri-lg mr-1.5 align-sub"></i>
                  payment
                </a>
              </div>
            </div>
          ),
          key: "3",
        },
        {
          label: (
            <div className="flex items-center  pl-[20px] text-[12px] uppercase">
              <div
                className=" font-normal hover:text-blue-400"
                onClick={() => {
                  if (singleLanguage) {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      // if (result.isConfirmed) {
                      //   dispatch(deletePayments(singleLanguage.id));
                      //   dispatch(getAllpayments());
                      //   Swal.fire(
                      //     "Deleted!",
                      //     "Your data has been deleted.",
                      //     "success"
                      //   );
                      // }
                    });
                  }
                }}
              >
                <i className="ri-delete-bin-line ri-lg mr-1.5 align-sub"></i>
                delete
              </div>
            </div>
          ),
          key: "4",
        },
      ]}
    />
  );

  const Ticketcolumns = [
    {
      title: "PAYMENT NO",
      dataIndex: "PaymentNo",
      key: "PaymentNo",
      sorter: (a, b) => a.PaymentNo.localeCompare(b.PaymentNo),
      ellipsis: {
        showTitle: false,
      },
      width: 130,
      responsive: ["xs", "md"],
    },
    {
      title: "ORDERID",
      dataIndex: "dbOrderId",
      key: "dbOrderId",
      sorter: (a, b) => a.dbOrderId.localeCompare(b.dbOrderId),
      ellipsis: {
        showTitle: false,
      },
      width: 125,
      responsive: ["xs", "md"],
    },
    {
      title: "PAYMENTDATE",
      dataIndex: "paymentDate",
      key: "paymentDate",
      sorter: (a, b) => a.paymentDate.localeCompare(b.paymentDate),
      ellipsis: {
        showTitle: false,
      },
      width: 125,
      responsive: ["xs", "md"],
    },
    {
      title: "PAYMENTMETHOD",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      sorter: (a, b) => a.paymentMethod.localeCompare(b.paymentMethod),
      ellipsis: {
        showTitle: false,
      },
      width: 160,
      responsive: ["xs", "md"],
    },

    {
      title: "PAYMENTREFNO",
      dataIndex: "paymentRefNo",
      key: "paymentRefNo",
      sorter: (a, b) => a.paymentRefNo.localeCompare(b.paymentRefNo),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
    {
      title: "DBCLIENTID",
      dataIndex: "dbClientId",
      key: "dbClientId",
      sorter: (a, b) => a.dbClientId - b.dbClientId,
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
      render: (_, record) => (
        <Dropdown overlay={menu} trigger={"click"} placement={"bottomRight"}>
          <div
            className="w-32 cursor-pointer"
            onClick={() => {
              setSingleLanguage(record);
            }}
          >
            View <i className="ri-arrow-down-s-line ri-lg ml-2 text-black"></i>
          </div>
        </Dropdown>
      ),
      responsive: ["xs", "md"],
    },
  ];
  return (
    <>
      <>
        {/* {open && (
        <SideDrawer
          placement="right"
          width={"50%"}
          title={"Add Json List"}
          closeIcon={
            <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
              <i
                class="ri-close-line ri-1x absolute z-40 left-50 bottom-450 "
                onClick={() => {
                  setOpen(false);
                }}
              />
            </div>
          }
          onClose={() => setOpen(false)}
          closable={true}
          open={open}
        >
          <AddLanguages setOpen={setOpen} />
        </SideDrawer>
      )} */}
        {/* {edit && (
        <SideDrawer
          placement="right"
          width={"45%"}
          title={"Edit pageId List"}
          closeIcon={
            <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
              <i
                class="ri-close-line ri-1x absolute z-40 left-50 bottom-450 "
                onClick={() => {
                  setEdit(false);
                }}
              />
            </div>
          }
          onClose={() => setEdit(false)}
          closable={true}
          open={edit}
        >
          <Makepayments setEdit={setEdit} data={singleLanguage} />
        </SideDrawer>
      )} */}
        <div className="flex flex-col  pr-8 ml-10">
          <Divider />
          <div className="flex flex-row justify-between ">
            <div>
              <h1 className="text-xl font-semibold">Payments</h1>
              <p className="text-base text-gray-400">
                Manage the details of Payments
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

          <Tables
            columns={Ticketcolumns}
            data={alljson}
            scroll={{
              x: 700,
            }}
            pagination={{
              showTotal: showTotal,
              hideOnSinglePage: false,
              pageSizeOptions: [5, 10, 15, 20],
            }}
          />
        </div>
      </>
    </>
  );
};

export default Payments;
