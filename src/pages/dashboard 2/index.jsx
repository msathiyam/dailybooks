import React from "react";
// import Chart from "react-apexcharts";
import Performance from "./performance";
// import { BarChartData, data, options } from "../dashboard 2/chartdata";
import './dashboard2.css'
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryBrushContainer
} from "victory";

const datass = [
  {
    id: 1,
    titel: "  Profit & Loss",
    amount: " $1.240",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-2 w-12 py-1 mx-2 rounded-full text-xs">
        23 %
      </div>
    ),
    text: "  Current Financial Year",
  },
  {
    id: 2,
    titel: " Revenue",
    amount: " $680",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-2 w-12 py-1 mx-2 rounded-full text-xs">
        23 %
      </div>
    ),
    text: "  Current Financial Year",
  },
  {
    id: 3,
    titel: "   Expenses",
    amount: " $920",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-2 w-12 py-1 mx-2 rounded-full text-xs">
        45 %
      </div>
    ),
    text: "  Current Financial Year",
  },
  {
    id: 4,
    titel: "Employees",
    amount: "4",
    progress: (
      <div className="bg-red-200 text-red-500 px-3.5 py-1 mx-2 rounded-full  flex text-xs">
        45 <i class="ri-arrow-right-up-line"></i>
      </div>
    ),
    text: "  (Last 6 months)",
    chart: [
      <VictoryChart
                      padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                      scale={{ x: "time" }}
                    >
                      <VictoryAxis
                        tickValues={[
                          new Date(1985, 1, 1),
                          new Date(1990, 1, 1),
                          new Date(1995, 1, 1),
                          new Date(2000, 1, 1),
                          new Date(2005, 1, 1),
                          new Date(2010, 1, 1)
                        ]}
                        tickFormat={x => new Date(x).getFullYear()}
                      />
                      <VictoryLine
                        style={{
                          data: { stroke: "tomato" }
                        }}
                        data={[
                          { x: new Date(1982, 1, 1), y: 125 },
                          { x: new Date(1987, 1, 1), y: 257 },
                          { x: new Date(1993, 1, 1), y: 345 },
                          { x: new Date(1997, 1, 1), y: 515 },
                          { x: new Date(2001, 1, 1), y: 132 },
                          { x: new Date(2005, 1, 1), y: 305 },
                          { x: new Date(2011, 1, 1), y: 270 },
                          { x: new Date(2015, 1, 1), y: 470 }
                        ]}
                      />
                    </VictoryChart>
    ]

  },
];

const invoice = [
  {
    id: 1,
    titel: "Raised",
    amount: " 4",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-3.5 py-1  mx-1 rounded-full text-xs">
        23 %
      </div>
    ),
    text: "($9,500)",
  },
  {
    id: 2,
    titel: "Paid",
    amount: "4",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 rounded-full px-3.5 py-1 mx-2 flex text-xs">
        23 %
      </div>
    ),
    text: "($9,500)",
  },
  {
    id: 3,
    titel: "Pending",
    amount: "4",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-3.5 py-1 mx-2 rounded-full text-xs">
        23 %
      </div>
    ),
    text: "($9,500)",
  },
  {
    id: 4,
    titel: "Dropped",
    amount: "4",
    progress: (
      <div className="bg-red-200 text-red-500 px-3.5 py-1 mx-2 rounded-full  flex text-xs">
        36 <i class="ri-arrow-right-up-line"></i>
      </div>
    ),
    text: "  ($9,500)",
    chart:  [
      <VictoryChart
                      padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                      scale={{ x: "time" }}
                    >
                      <VictoryAxis
                        tickValues={[
                          new Date(1985, 1, 1),
                          new Date(1990, 1, 1),
                          new Date(1995, 1, 1),
                          new Date(2000, 1, 1),
                          new Date(2005, 1, 1),
                          new Date(2010, 1, 1)
                        ]}
                        tickFormat={x => new Date(x).getFullYear()}
                      />
                      <VictoryLine
                        style={{
                          data: { stroke: "tomato" }
                        }}
                        data={[
                          { x: new Date(1982, 1, 1), y: 125 },
                          { x: new Date(1987, 1, 1), y: 257 },
                          { x: new Date(1993, 1, 1), y: 345 },
                          { x: new Date(1997, 1, 1), y: 515 },
                          { x: new Date(2001, 1, 1), y: 132 },
                          { x: new Date(2005, 1, 1), y: 305 },
                          { x: new Date(2011, 1, 1), y: 270 },
                          { x: new Date(2015, 1, 1), y: 470 }
                        ]}
                      />
                    </VictoryChart>
    ]
  },
];
const expense = [
  {
    id: 1,
    titel: "Open",
    amount: " $1.240",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-2 w-12 py-1 mx-2 rounded-full text-xs">
        23 %
      </div>
    ),
    text: "  Current Financial Year",
  },
  {
    id: 2,
    titel: "Approved",
    amount: " $680",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 rounded-full px-2 w-12 py-1 mx-2 flex text-xs">
        23 %
      </div>
    ),
    text: "  Current Financial Year",
  },
  {
    id: 3,
    titel: "Rejected",
    amount: " $920",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-2 w-12 py-1 mx-2 rounded-full text-xs">
        45 %
      </div>
    ),
    text: "  Current Financial Year",
  },
  {
    id: 4,
    titel: "Without bills",
    amount: "4",
    progress: (
      <div className="bg-red-200 text-red-500 px-3.5 py-1 mx-2 rounded-full  flex text-xs">
        45 <i class="ri-arrow-right-up-line"></i>
      </div>
    ),
    text: "  (Last 6 months)",
    chart:  [
      <VictoryChart
                      padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                      scale={{ x: "time" }}
                    >
                      <VictoryAxis
                        tickValues={[
                          new Date(1985, 1, 1),
                          new Date(1990, 1, 1),
                          new Date(1995, 1, 1),
                          new Date(2000, 1, 1),
                          new Date(2005, 1, 1),
                          new Date(2010, 1, 1)
                        ]}
                        tickFormat={x => new Date(x).getFullYear()}
                      />
                      <VictoryLine
                        style={{
                          data: { stroke: "tomato" }
                        }}
                        data={[
                          { x: new Date(1982, 1, 1), y: 125 },
                          { x: new Date(1987, 1, 1), y: 257 },
                          { x: new Date(1993, 1, 1), y: 345 },
                          { x: new Date(1997, 1, 1), y: 515 },
                          { x: new Date(2001, 1, 1), y: 132 },
                          { x: new Date(2005, 1, 1), y: 305 },
                          { x: new Date(2011, 1, 1), y: 270 },
                          { x: new Date(2015, 1, 1), y: 470 }
                        ]}
                      />
                    </VictoryChart>
    ]
  },
];
const complainces = [
  {
    id: 1,
    titel: "GST",
    amount: " 4",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-3.5 py-1 mx-2 rounded-full text-xs">
        23 %
      </div>
    ),
    text: "($9,500)",
  },
  {
    id: 2,
    titel: "TDS",
    amount: "4",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 rounded-full px-3.5 py-1 mx-2 flex text-xs">
        23 %
      </div>
    ),
    text: "($9,500)",
  },
  {
    id: 3,
    titel: "Provident Fund",
    amount: "4",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-3.5 py-1 mx-2 rounded-full text-xs">
        23 %
      </div>
    ),
    text: "($9,500)",
  },
  {
    id: 4,
    titel: "ESI",
    amount: "4",
    progress: (
      <div className="bg-red-200 text-red-500 px-3.5 py-1 mx-2 rounded-full  flex text-xs">
        45 <i class="ri-arrow-right-up-line"></i>
      </div>
    ),
    text: "($9,500)",
    chart:  [
      <VictoryChart
                      padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                      scale={{ x: "time" }}
                    >
                      <VictoryAxis
                        tickValues={[
                          new Date(1985, 1, 1),
                          new Date(1990, 1, 1),
                          new Date(1995, 1, 1),
                          new Date(2000, 1, 1),
                          new Date(2005, 1, 1),
                          new Date(2010, 1, 1)
                        ]}
                        tickFormat={x => new Date(x).getFullYear()}
                      />
                      <VictoryLine
                        style={{
                          data: { stroke: "tomato" }
                        }}
                        data={[
                          { x: new Date(1982, 1, 1), y: 125 },
                          { x: new Date(1987, 1, 1), y: 257 },
                          { x: new Date(1993, 1, 1), y: 345 },
                          { x: new Date(1997, 1, 1), y: 515 },
                          { x: new Date(2001, 1, 1), y: 132 },
                          { x: new Date(2005, 1, 1), y: 305 },
                          { x: new Date(2011, 1, 1), y: 270 },
                          { x: new Date(2015, 1, 1), y: 470 }
                        ]}
                      />
                    </VictoryChart>
    ]
  },
];
const employees = [
  {
    id: 1,
    titel: "Active",
    amount: " 4",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-3.5 py-1 mx-2 rounded-full text-xs">
        23 %
      </div>
    ),
    text: "($9,500)",
  },
  {
    id: 2,
    titel: "Offered",
    amount: "4",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 rounded-full px-3.5 py-1 mx-2 flex text-xs">
        23 %
      </div>
    ),
    text: "($9,500)",
  },
  {
    id: 3,
    titel: "Offered in progress",
    amount: "4",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-3.5 py-1 mx-2 rounded-full text-xs">
        23 %
      </div>
    ),
    text: "($9,500)",
  },
  {
    id: 4,
    titel: "Attrition",
    amount: "4",
    progress: (
      <div className="bg-red-200 text-red-500 px-3.5 py-1 mx-2 rounded-full  flex text-xs">
        45 <i class="ri-arrow-right-up-line"></i>
      </div>
    ),
    text: "($9,500)",
    chart:  [
      <VictoryChart
                      padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                      scale={{ x: "time" }}
                    >
                      <VictoryAxis
                        tickValues={[
                          new Date(1985, 1, 1),
                          new Date(1990, 1, 1),
                          new Date(1995, 1, 1),
                          new Date(2000, 1, 1),
                          new Date(2005, 1, 1),
                          new Date(2010, 1, 1)
                        ]}
                        tickFormat={x => new Date(x).getFullYear()}
                      />
                      <VictoryLine
                        style={{
                          data: { stroke: "tomato" }
                        }}
                        data={[
                          { x: new Date(1982, 1, 1), y: 125 },
                          { x: new Date(1987, 1, 1), y: 257 },
                          { x: new Date(1993, 1, 1), y: 345 },
                          { x: new Date(1997, 1, 1), y: 515 },
                          { x: new Date(2001, 1, 1), y: 132 },
                          { x: new Date(2005, 1, 1), y: 305 },
                          { x: new Date(2011, 1, 1), y: 270 },
                          { x: new Date(2015, 1, 1), y: 470 }
                        ]}
                      />
                    </VictoryChart>
    ]
  },

];
const assests = [
  {
    id: 1,
    titel: "Untagged",
    amount: " 24",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-3.5 py-1 mx-2 rounded-full text-xs">
        23 %
      </div>
    ),
    text: "Current Financial Year",
  },
  {
    id: 2,
    titel: "Assigned",
    amount: "680",
    progress: (
      <div className="bg-red-200 text-red-500 rounded-full px-3.5 py-1 mx-2 flex text-xs">
        23 %
      </div>
    ),
    text: "Current Financial Year",
  },
  {
    id: 3,
    titel: "Not Returned",
    amount: "920",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-3.5 py-1 mx-2 rounded-full text-xs">
        23 %
      </div>
    ),
    text: "Current Financial Year",
  },
  {
    id: 4,
    titel: "New",
    amount: "4",
    progress: (
      <div className="bg-[#DFFBF0] text-green-500 px-3.5 py-1 mx-2 rounded-full  flex text-xs">
        45 <i class="ri-arrow-right-up-line"></i>
      </div>
    ),
    text: "(Last 6 months)",
    chart:  [
      <VictoryChart
                      padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                      scale={{ x: "time" }}
                    >
                      <VictoryAxis
                        tickValues={[
                          new Date(1985, 1, 1),
                          new Date(1990, 1, 1),
                          new Date(1995, 1, 1),
                          new Date(2000, 1, 1),
                          new Date(2005, 1, 1),
                          new Date(2010, 1, 1)
                        ]}
                        tickFormat={x => new Date(x).getFullYear()}
                      />
                      <VictoryLine
                        style={{
                          data: { stroke: "tomato" }
                        }}
                        data={[
                          { x: new Date(1982, 1, 1), y: 125 },
                          { x: new Date(1987, 1, 1), y: 257 },
                          { x: new Date(1993, 1, 1), y: 345 },
                          { x: new Date(1997, 1, 1), y: 515 },
                          { x: new Date(2001, 1, 1), y: 132 },
                          { x: new Date(2005, 1, 1), y: 305 },
                          { x: new Date(2011, 1, 1), y: 270 },
                          { x: new Date(2015, 1, 1), y: 470 }
                        ]}
                      />
                    </VictoryChart>
    ]
  },

];

export default function Dashboard2() {
  return (
      <div className="mx-10 mt-[7px] ">
        <div className="py-4 border-y border-solid border-[#F0F3F7]">
          <h1 className="text-xl font-semibold mb-1.5">Overall Finance</h1>
          <p className="text-base text-[#6E78AC]">Brief view of your all expenses</p>
        </div>
        
        <div className="pt-5">
          <h1 className="text-base font-bold text-[#22314F] py-3">Revenue</h1>
          <div className="trans_design border-y border-solid border-bordercolor grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 md:w-full  lg:divide-x md:divide-x lg:divide-y-0 md:divide-y-0 divide-y justify-center">
          {datass.map((item) => {
              return (
                <div className="flex ">
                  <div className=" flex  w-full flex-col py-3 pl-3">
                    <div className="text-sm my-1 font-semibold text-[#22314F] ">
                      {item.titel}
                    </div>
                    <div className="lg:text-[20px] md:text-[18px] text-xs font-bold py-2 flex items-center ">
                      {item.amount}
                      <span className=" ">{item.progress}</span>
                    </div>
                    <div className="text-xs text-[#6E78AC] mt-1">
                      {item.text}
                    </div>
                  </div>
                  <div className="w-full">
                    {item.chart && item.chart}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-5">
          <h1 className="text-base font-bold text-[#22314F] py-3">Invoices</h1>
          <div className="trans_design border-y border-solid border-[#F0F3F7]  grid lg:grid-cols-4 md:grid-cols-4 md:w-full  lg:divide-x md:divide-x lg:divide-y-0 md:divide-y-0 divide-y grid-col-2  justify-center">

            {invoice.map((item) => {
              return (
                <div className="flex ">
                  <div className=" flex  w-full flex-col py-3 pl-3">
                    <div className="text-sm my-1 font-semibold text-[#22314F] ">
                      {item.titel}
                    </div>
                    <div className="lg:text-[20px] md:text-[18px] text-xs font-bold py-2 flex items-center ">
                      {item.amount}
                      <span className=" ">{item.progress}</span>
                    </div>
                    <div className="text-xs text-[#6E78AC] mt-1">
                      {item.text}
                    </div>
                  </div>
                  <div className="w-full">
                    {item.chart && item.chart}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <h1 className="text-base font-bold text-[#22314F] py-3">Expenses</h1>
          <div className="trans_design border-y border-solid border-[#F0F3F7]  grid lg:grid-cols-4 md:grid-cols-4 md:w-full  lg:divide-x md:divide-x lg:divide-y-0 md:divide-y-0 divide-y grid-col-2  justify-center">

            {expense.map((item) => {
              return (
                <div className="flex ">
                  <div className=" flex  w-full flex-col py-3 pl-3">
                    <div className="text-sm my-1 font-semibold text-[#22314F] ">
                      {item.titel}
                    </div>
                    <div className="lg:text-[20px] md:text-[18px] text-xs font-bold py-2 flex items-center ">
                      {item.amount}
                      <span className=" ">{item.progress}</span>
                    </div>
                    <div className="text-xs text-[#6E78AC] mt-1">
                      {item.text}
                    </div>
                  </div>
                  <div className="w-full">
                    {item.chart && item.chart}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-5">
          <h1 className="text-base font-bold text-[#22314F] py-3">Compliances</h1>
          <div className=" trans_design border-y border-solid border-[#F0F3F7]  grid lg:grid-cols-4 md:grid-cols-4 md:w-full  lg:divide-x md:divide-x lg:divide-y-0 md:divide-y-0 divide-y grid-col-2  justify-center">

            {complainces.map((item) => {
              return (
                <div className="flex ">
                  <div className=" flex  w-full flex-col py-3 pl-3">
                    <div className="text-sm my-1 font-semibold text-[#22314F] ">
                      {item.titel}
                    </div>
                    <div className="lg:text-[20px] md:text-[18px] text-xs font-bold py-2 flex items-center ">
                      {item.amount}
                      <span className=" ">{item.progress}</span>
                    </div>
                    <div className="text-xs text-[#6E78AC] mt-1">
                      {item.text}
                    </div>
                  </div>
                  <div className="w-full">
                    {item.chart && item.chart}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <h1 className="text-base font-bold text-[#22314F] py-2">Employees</h1>
        <div className=" trans_design border-y border-solid border-[#F0F3F7]  grid lg:grid-cols-4 md:grid-cols-4 md:w-full  lg:divide-x md:divide-x lg:divide-y-0 md:divide-y-0 divide-y grid-col-2  justify-center">

          {employees.map((item) => {
            return (
              <div className="flex ">
                <div className=" flex  w-full flex-col py-3 pl-3">
                  <div className="text-sm my-1 font-semibold text-[#22314F] ">
                    {item.titel}
                  </div>
                  <div className="lg:text-[20px] md:text-[18px] text-xs font-bold py-2 flex items-center ">
                    {item.amount}
                    <span className=" ">{item.progress}</span>
                  </div>
                  <div className="text-xs text-[#6E78AC] mt-1">
                    {item.text}
                  </div>
                </div>
                <div className="w-full">
                  {item.chart && item.chart}
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-5">
          <h1 className="text-base font-bold text-[#22314F] py-3">Assets</h1>
          <div className="trans_design border-y border-solid border-[#F0F3F7]  grid lg:grid-cols-4 md:grid-cols-4 md:w-full  lg:divide-x md:divide-x lg:divide-y-0 md:divide-y-0 divide-y grid-col-2  justify-center">

            {assests.map((item) => {
              return (
                <div className="flex ">
                  <div className=" flex  w-full flex-col py-3 pl-3">
                    <div className="text-sm my-1 font-semibold text-[#22314F] ">
                      {item.titel}
                    </div>
                    <div className="lg:text-[20px] md:text-[18px] text-xs font-bold py-2 flex items-center ">
                      {item.amount}
                      <span className=" ">{item.progress}</span>
                    </div>
                    <div className="text-xs text-[#6E78AC] mt-1">
                      {item.text}
                    </div>
                  </div>
                  <div className="w-full">
                    {item.chart && item.chart}
                  </div>
                </div> 
                     );
            })}
          </div>

        </div>
        <Performance />

      </div>
  );
}
