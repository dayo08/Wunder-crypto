import React, { useEffect, useState } from "react";
import "./Position.css";
import { BsFilter } from "react-icons/bs";
import { AiOutlineClose, AiOutlineTable } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { columnArray } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from "../components";
import Swal from "sweetalert2";
import Pagination from "rc-pagination";

const Positions = () => {
  const [active, setactive] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpentable, setIsOpentable] = useState(false);
  const [Live, setLive] = useState(true);
  const [History, setHistory] = useState(false);
  const { currentColor } = useStateContext();
  const [checked, setChecked] = useState([]);
  const [perPage] = useState(10);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // open/close popup
  const changePopuptable = () => {
    setIsOpentable(!isOpentable);
  };
  // open/close popup
  const changePopup = () => {
    setIsOpen(!isOpen);
  };
  // open/close popup
  const closetabeLive = () => {
    setHistory(true);
    setLive(false);
  };
  // close popup
  const closetabeHistory = () => {
    setHistory(false);
    setLive(true);
  };

  // open/close popup
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const rol = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you would like to close all open positions?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(0 / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return "0".slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <Button
          color="white"
          bgColor={currentColor}
          text="Left"
          borderRadius="5px"
        />
      );
    }
    if (type === "next") {
      return (
        <Button
          color="white"
          bgColor={currentColor}
          text="Right"
          borderRadius="5px"
        />
      );
    }
    return originalElement;
  };
  return (
    <>
      <div class=" dark:text-gray-200 dark:bg-[#20252a] bg-white   border-b border-white ">
        <div class="px-6 pt-6 ">
          <div class="md:text-xl text-lg font-bold mb-5">Positions</div>
          <p class="text-[#828282] text-sm">
            Current оpen positions{" "}
            <span class="dark:text-white text-black">0</span> Cumulative
            unrealized P/L{" "}
            <span class="dark:text-white text-black">0% ( $0 )</span>{" "}
          </p>
          <div class="flex  text-base font-bold gap-8 cursor-pointer dark:text-white ">
            <div
              style={{ padding: "16px 0 20px" }}
              className={`${
                active === 1
                  ? "border-b-4 hover:text-[#598fff] border-[#598fff]  "
                  : "deActive hover:text-[#598fff]"
              }`}
              onClick={() => {
                setactive(1);
              }}
            >
              Classic Trading
            </div>
            <div
              onClick={() => {
                setactive(2);
              }}
              style={{ padding: "16px 0 20px" }}
              className={`${
                active === 2
                  ? "border-b-4 border-[#598fff] hover:text-[#598fff] "
                  : "deActive hover:text-[#598fff]"
              }`}
            >
              Spreads & Arbitrage
            </div>
            <div
              style={{ padding: "16px 0 20px" }}
              className={`${
                active === 3
                  ? "border-b-4 border-[#598fff]  hover:text-[#598fff]"
                  : "deActive hover:text-[#598fff]"
              }`}
              onClick={() => {
                setactive(3);
              }}
            >
              DCA Trading
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <button
          className={`hover:bg-[#598fff] border-[#3c60c3] border ${
            closetabeHistory && "bg-[#598fff] text-[white]"
          } text-[#3c60c3]  hover:text-[white] font-bold py-2 px-4 rounded  btn`}
          onClick={() => closetabeHistory()}
        >
          Live
        </button>
        <button
          className={`hover:bg-[#598fff] border-[#3c60c3] border ${
            setHistory === true ? "bg-[#598fff] text-[white]" : ""
          } text-[#3c60c3]  hover:text-[white] font-bold py-2 px-4 rounded  btn`}
          onClick={() => closetabeLive()}
        >
          History
        </button>
      </div>

      {Live && (
        <>
          <div className="relative flex justify-between items-center px-5">
            <div>
              <button
                onClick={() => rol()}
                className="bg-[#e14daf] hover:bg-[#b83f8f] text-white font-bold py-2 px-4 rounded btn"
              >
                Close All
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <div
                className={`text-2xl dark:text-white  `}
                onClick={() => changePopuptable()}
              >
                <AiOutlineTable />
              </div>
              <div
                className={`text-3xl dark:text-white  `}
                onClick={() => changePopup()}
              >
                <BsFilter />
              </div>
              {isOpen && (
                <>
                  <div className="absolute  right-0  top-3 z-50 p-4 ">
                    <div className="relative w-full max-w-md h-full md:h-auto">
                      {/* Modal content */}
                      <div className="relative bg-white rounded-lg shadow dark:bg-[#20252a]">
                        {/* Modal header */}
                        <div className="flex justify-end items-start p-4 rounded-t border-b dark:border-gray-600">
                          <div
                            className="cursor-pointer"
                            onClick={() => changePopup()}
                          >
                            <AiOutlineClose className="dark:text-white" />
                          </div>
                        </div>
                        <div className="flex justify-start items-center gap-3 p-3 ">
                          <p className="text-black dark:text-white">FILTERS</p>
                          <div>
                            <button className="text-blue-600">RESET</button>
                          </div>
                        </div>
                        <div className="flex justify-start items-center gap-3 p-3 mt-3">
                          <div>
                            <select className=" border-b px-2 py-1 outline-none w-36 bg-transparent dark:text-white">
                              <option value="Exchange">Exchange</option>
                            </select>
                          </div>
                          <div>
                            <select className=" border-b px-2 py-1 outline-none w-36 bg-transparent dark:text-white">
                              <option value="Pair">Pair</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {isOpentable && (
                <div className="app absolute  right-3 top-7 z-50 p-4 bg-white rounded-lg shadow dark:bg-[#20252a]">
                  <div className="checkList">
                    <div className="flex justify-end items-start p-4 rounded-t border-b dark:border-gray-600">
                      <div
                        className="cursor-pointer"
                        onClick={() => changePopuptable()}
                      >
                        <AiOutlineClose className="dark:text-white" />
                      </div>
                    </div>
                    <div className="title text-bold dark:text-white mt-2">
                      Show Columns
                    </div>
                    <div className="list-container flex flex-col gap-2">
                      {columnArray.map((item, index) => (
                        <div key={index} className="flex gap-2">
                          <input
                            value={item.title}
                            type="checkbox"
                            onChange={handleCheck}
                            className="w-4"
                          />
                          <span
                            className={`${isChecked(
                              item.title
                            )} dark:text-white`}
                          >
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-5 px-7  table-wrapper overflow-auto">
            <table className="fl-table">
              <thead className="dark:text-white">
                <tr>
                  <th>
                    <BsChevronRight />
                  </th>

                  {checked.map((item, id) => (
                    <>
                      <th key={id}>{item}</th>
                    </>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
          <p className="text-center  text-xl dark:text-gray-200 pt-3">
            Sorry, no matching records found
          </p>
          <div className="table-filter-info flex justify-end items-center text-black dar:text-gray-200">
            <Pagination
              className="pagination-data "
              showTotal={(total, range) =>
                `Showing ${range[0]}-${range[1]} of ${total}`
              }
              onChange={PaginationChange}
              total={0}
              current={current}
              pageSize={size}
              showSizeChanger={false}
              itemRender={PrevNextArrow}
              onShowSizeChange={PerPageChange}
            />
          </div>
        </>
      )}

      {History && (
        <>
          <div className="p-3 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex flex-wrap gap-2 justify-center items-center">
              <span className="dark:text-gray-200 font-bold">Orders</span>
              <button className="hover:bg-[#598fff] border-[#3c60c3] border text-black dark:text-white font-bold py-2 px-4 rounded btn">
                All
              </button>
              <button className="hover:bg-[#598fff] border-[#3c60c3] border text-black dark:text-white font-bold py-2 px-4 rounded  btn">
                Completed
              </button>
              <button className="hover:bg-[#598fff] border-[#3c60c3] border text-black dark:text-white font-bold py-2 px-4 rounded  btn">
                Cancelled
              </button>
            </div>
            <div>
              <select className="border-b px-2 py-1 outline-none w-36 dark:bg-[#282c34] bg-[#f5f6fa] dark:text-white">
                <option value="AllTime">All Time</option>
                <option value="LastMonth">Last Month</option>
                <option value="LastWeek"> Last Week</option>
              </select>
            </div>
            <p className="dark:text-gray-200 font-bold">
              No matching records found.
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Positions;
