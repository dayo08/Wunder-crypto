import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from "../components";
import TimezoneSelect from "react-timezone-select";
import "./table.css";
import { Generaldata } from "../data/dummy";
import Swal from "sweetalert2";

function Settings() {
  const [active, setactive] = useState(1);
  const { currentColor } = useStateContext();
  const [selectedTimezone, setSelectedTimezone] = useState({});

  const settings = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <div className="mt-24 md:mt-3 dark:text-gray-200">
      <div className=" dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl md:px-8 pt-5 m-3 border-b border-white ">
        <div className="p-3 ">
          <div className="md:text-2xl text-lg font-bold mb-5">Billing</div>
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
              Profile
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
              Security
            </div>
            <div
              style={{ padding: "16px 0 20px" }}
              className={`${
                active === 3
                  ? "border-b-4 border-[#03c9d7]  hover:text-[#598fff]"
                  : "deActive hover:text-[#598fff]"
              }`}
              onClick={() => {
                setactive(3);
              }}
            >
              Notifications
            </div>
          </div>
        </div>
      </div>
      {active === 1 && (
        <>
          {/* component */}
          <form className=" lg:max-w-4xl  md:m-3 p-5 md:p-8">
            <div className="flex flex-wrap justify-between  items-center  mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Change Name
                </label>
                <span className="text-[#66686b]">
                  Fill the field below and save:
                </span>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 my-3  leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Write about you
                </label>
                <span className="text-[#66686b]">
                  Write about you and save so other users can read it:
                </span>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  my-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="About you"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold mb-2 mt-4">
                  Change default page
                </label>
                <span className="text-[#66686b]">
                  Choose default page for your cabinet:
                </span>
                <div>
                  <select className="dropdown list mt-3">
                    <option value="DASHBOARD">DASHBOARD</option>
                    <option value="POSITIONS">POSITIONS</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold mb-2 mt-4">
                  Time zone
                </label>
                <span className="text-[#66686b]">
                  Select the city of your timezone:
                </span>
                <div>
                  <TimezoneSelect
                    value={selectedTimezone}
                    onChange={setSelectedTimezone}
                    className="dark:text-black mt-3"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold mb-2 mt-4">
                  Select image
                </label>
                <span className="text-[#66686b]">
                  Click to add your profile picture (square images are
                  recommended; Max. size 300Kb).
                </span>
                <div className="flex items-center justify-center">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-y py-3 px-4  my-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="file"
                    placeholder="Doe"
                  />
                  <p className="border border-gray-200 rounded-y py-3 px-4">
                    Browser
                  </p>
                </div>
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Save"
                  borderRadius="2px"
                />
              </div>
              <div className="md:w-2/3" />
            </div>
          </form>
          <div className="md:mx-3 px-5 md:px-8">
            <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold mb-2">
              Remove my account
            </label>
            <div onClick={() => settings()}>
              <Button
                color="white"
                bgColor={currentColor}
                text="Terminate"
                borderRadius="2px"
              />
            </div>
          </div>
        </>
      )}

      {active === 2 && (
        <>
          <div className="md:m-3 p-5 md:p-8 flex flex-col gap-2">
            <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold ">
              Remove my account
            </label>
            <span className="text-[#66686b] ">
              Fill the field below and save:
            </span>
            <div>
              <Button
                color="white"
                bgColor={currentColor}
                text="Change"
                borderRadius="2px"
              />
            </div>
          </div>
          <div className="md:m-3 p-5 md:px-8 flex flex-col gap-2">
            <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold ">
              2FA
            </label>
            <span className="text-[#66686b] ">
              2FA authentication status: Disabled
            </span>
            <div>
              <Button
                color="white"
                bgColor={currentColor}
                text="Disable"
                borderRadius="2px"
              />
            </div>
          </div>
        </>
      )}
      {active === 3 && (
        <>
          <div className="md:m-3 p-5 md:p-8">
            <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold ">
              Email preferences
            </label>
            <span className="text-[#66686b] mt-2 ">
              Please select which email notifications you would like to receive.
            </span>
          </div>
          <div className="md:grid md:grid-cols-4  mt-10 ">
            <table className="fl-table dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl md:m-3 p-5 md:p-8 ">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">
                    <h2 className="px-2 md:text-lg font-medium">Strategy</h2>
                  </th>
                  <th scope="col">
                    <h2 className="px-2 md:text-lg font-medium">API account</h2>
                  </th>
                </tr>
              </thead>
              <tbody className="space-y- text-left divide-y divide-gray-700">
                {Generaldata.map((items) => (
                  <>
                    <tr>
                      <th scope="row" className="text-left w-10">
                        <h3 className="py-3 ">{items.title}</h3>
                      </th>
                      <td>
                        <input
                          type="checkbox"
                          name=""
                          className=" mx-auto text-sm"
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          name=""
                          className="mx-auto  text-sm"
                        />
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Settings;
