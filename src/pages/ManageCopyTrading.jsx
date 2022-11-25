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
    <div className="mt-24 md:mt-3 dark:text-gray-200">
      <div className="flex flex-wrap justify-start mt-24 md:mt-3">
        <div className="bg-slate-200  dark:text-gray-200 dark:bg-[#20242b] rounded-2xl md:w-500 p-8 m-3 ">
          <div>
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <p className=" font-bold ">Your role: Copy-Trader</p>
              </div>
              <AiFillQuestionCircle className="text-[#02d29a]" />
            </div>
          </div>
          <p className="text-gray-400 max-w-md">
            Being a Copy-Trader allows you to follow Traders.
          </p>
          <div className="flex gap-5 mt-4">
            <div onClick={() => rol()}>
              <Button
                color="white"
                bgColor={currentColor}
                text="Become a Trader"
                borderRadius="5px"
              />
            </div>
          </div>
        </div>
        <div className="bg-slate-200 dark:text-gray-200 dark:bg-[#20242b] rounded-2xl md:w-96 p-8 m-3 ">
          <div>
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <p className=" font-bold ">Following</p>
              </div>
            </div>
            <div></div>
          </div>
          <p className="text-gray-400 max-w-md">Trader's Accounts: 0</p>
          <p className="text-gray-400 max-w-md">Trading bots: 0</p>
          <p className="text-gray-400 max-w-md">Signal Channels: 0</p>

          <div className="flex gap-5 mt-4">
            <div>
              <Button
                color="white"
                bgColor={currentColor}
                text="Manage"
                borderRadius="5px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" dark:text-gray-200 dark:bg-[#20242b] rounded-xl md:px-8 pt-5 m-3 border-b border-white ">
        <div className="p-3 ">
          <div className="flex md:text-xl text-base font-bold gap-8 cursor-pointer dark:text-white border-b-2 border-[#828282]">
            <div
              style={{ padding: "16px 0 20px" }}
              className={`${
                active === 1
                  ? "border-b-4 hover:text-[#598fff] border-[#03c9d7]  "
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
                  ? "border-b-4 border-[#03c9d7] hover:text-[#598fff] "
                  : "deActive hover:text-[#598fff]"
              }`}
            >
              Signal Provider Channels I follow
            </div>
          </div>
        </div>
      </div>
      {active === 1 && (
        <p className="md:px-8 pt-5 m-3">No matching records found.</p>
      )}
      {active === 2 && (
        <p className="md:px-8 pt-5 m-3">No matching records found.</p>
      )}
    </div>
  );
}

export default ManageCopyTrading;
