import React, { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import Swal from "sweetalert2";

function ManageCopyTrading() {
  const { currentColor } = useStateContext();
  const [active, setactive] = useState(1);

  const rol = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
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

  return (
    <>
      <div className="flex flex-wrap justify-start items-stretch gap-5 m-3">
        <div className="bg-white  dark:text-gray-200 dark:bg-[#2c313c] md:w-500 p-5 flex flex-col justify-between">
          <div>
            <div>
              <div className="flex justify-between">
                <div className="flex justify-start items-center gap-2">
                  <p className=" font-bold ">Your role: Copy-Trader</p>
                </div>
                <AiFillQuestionCircle className="text-[#3c60c3]" />
              </div>
            </div>
            <p className="text-gray-400  mt-2">
              Being a Copy-Trader allows you to follow Traders.
            </p>
          </div>
          <div className="flex gap-5 mt-4">
            <div>
              <button
                onClick={() => rol()}
                className="  hover:bg-[#3c60c3] border-[#3c60c3] hover:text-[white] dark:hover:text-white dark:text-[#3c60c3] text-[#3c60c3] font-bold py-2 px-4 rounded btn"
              >
                Become a Trader
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-[#2c313c] md:w-96 p-5 ">
          <div>
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <p className=" font-bold ">Following</p>
              </div>
            </div>
            <div />
          </div>
          <p className="text-gray-400 ">Trader's Accounts: 0</p>
          <p className="text-gray-400 ">Trading bots: 0</p>
          <p className="text-gray-400 ">Signal Channels: 0</p>
          <div className="flex gap-5 mt-4">
            <div>
              <button className="  hover:bg-[#3c60c3] border-[#3c60c3] dark:hover:text-white dark:text-[#3c60c3] hover:text-[white] text-[#3c60c3] font-bold py-2 px-4 rounded btn">
                Manage
              </button>
            </div>
            <div>
              <button className="  hover:bg-[#3c60c3] border-[#3c60c3] dark:hover:text-white dark:text-[#3c60c3] hover:text-[white] text-[#3c60c3] font-bold py-2 px-4 rounded btn">
                Payouts
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-[#2c313c] md:w-96 p-5 ">
          <div>
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <p className=" font-bold ">Stats</p>
              </div>
            </div>
            <div />
          </div>
          <p className="text-gray-400 ">Total profit: $0</p>
          <p className="text-gray-400 ">Paid out: $0</p>
          <p className="text-gray-400 ">To be paid out: $0</p>
        </div>
      </div>
      <div className="m-3 flex md:text-xl text-base font-bold gap-8 cursor-pointer dark:text-white border-b-2 border-[#828282]">
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
          Traders I follow
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
          Signal Provider Channels I follow
        </div>
      </div>
      {active === 1 && (
        <p className="md:px-8 pt-5 m-3 dark:text-white text-black">
          No matching records found.
        </p>
      )}
      {active === 2 && (
        <p className="md:px-8 pt-5 m-3 dark:text-white text-black">
          No matching records found.
        </p>
      )}
    </>
  );
}

export default ManageCopyTrading;
