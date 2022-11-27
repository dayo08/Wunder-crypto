import React, { useEffect, useState } from "react";
import TimezoneSelect from "react-timezone-select";
import "./table.css";
import { Generaldata } from "../data/dummy";
import Swal from "sweetalert2";
import { SiShopware } from "react-icons/si";
function Settings() {
  const [active, setactive] = useState(1);
  const [selectedTimezone, setSelectedTimezone] = useState({});
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
    <div className=" dark:text-gray-200">
      <div className=" dark:text-gray-200 dark:bg-[#20252a]  bg-white ">
        <div className="px-6 pt-6 ">
          <div className="md:text-2xl text-lg font-bold mb-5">Settings</div>
          <div className="flex md:text-xl text-base font-bold gap-8 cursor-pointer dark:text-white border-b-2 border-[#828282]">
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
              Profile
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
              Security
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
              Notifications
            </div>
          </div>
        </div>
      </div>
      {active === 1 && (
        <>
          <form className=" w-full  px-6 pt-6 ">
            <div className="flex flex-wrap justify-between  items-center  mb-6">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
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
                  className="appearance-none block w-full bg-transparent  text-gray-700 border-b   py-3 px-4 my-3  leading-tight focus:outline-none focus:bg-white"
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
                  className="appearance-none block w-full bg-transparent  text-gray-700 border-b py-3 px-4  my-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="About you"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 max-w-lg mb-8">
              <div className="w-full max-w-lg px-3">
                <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold mb-2 mt-4">
                  Change default page
                </label>
                <span className="text-[#66686b]">
                  Choose default page for your cabinet:
                </span>
                <div>
                  <select className="dark:bg-[#282c34]  outline-none bg-transparent border-b dark:text-white py-2 md:w-96 w-full text-black">
                    <option value="DASHBOARD">DASHBOARD</option>
                    <option value="POSITIONS">POSITIONS</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-8 max-w-lg">
              <div className="w-full max-w-lg px-3">
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
            <div className="flex flex-wrap justify-between items-start -mx-3 my-8">
              <div className=" w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold mb-2 mt-4">
                  Select image
                </label>
                <span className="text-[#66686b]">
                  Click to add your profile picture (square images are
                  recommended; Max. size 300Kb).
                </span>
                <div className="flex flex-wrap md:flex-nowrap flex-row items-start justify-b md:gap-3">
                  <div className="flex items-center ">
                    <input
                      className="appearance-none block w-full bg-white dark:bg-transparent text-gray-700 border border-gray-200 rounded-y py-2 px-4  my-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="file"
                      placeholder="Doe"
                    />
                    <p className="border border-gray-200 rounded-y py-2 px-4">
                      Browser
                    </p>
                  </div>

                  <button className="bg-[#598fff]  my-3 py-2 px-4">Save</button>
                </div>
              </div>
              <div className="w-full md:w-1/2 mb-2 mt-4 items-center gap-3  flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                <SiShopware /> <span>Wunder</span>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button className="bg-[#02d29a] px-2 py-1 rounded-sm">
                  Save
                </button>
              </div>
              <div className="md:w-2/3" />
            </div>
          </form>
          <div className="px-6 pt-6 mb-6">
            <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold mb-2">
              Remove my account
            </label>
            <div>
              <button
                className="bg-[#e04caf] px-2 py-1 rounded-sm"
                onClick={() => settings()}
              >
                Terminate
              </button>
            </div>
          </div>
        </>
      )}

      {active === 2 && (
        <>
          <div className="px-6 py-6 flex flex-col gap-2">
            <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold ">
              Remove my account
            </label>
            <span className="text-[#66686b] ">
              Fill the field below and save:
            </span>
            <div>
              <button className="bg-[#e04caf] px-2 py-1 rounded-sm">
                Change
              </button>
            </div>
          </div>
          <div className="px-6  flex flex-col gap-2">
            <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold ">
              2FA
            </label>
            <span className="text-[#66686b] ">
              2FA authentication status: Disabled
            </span>
            <div>
              <button className="bg-[#02d29a] px-2 py-1 rounded-sm">
                Disable
              </button>
            </div>
          </div>
        </>
      )}

      {active === 3 && (
        <>
          <div className="px-6 pt-6">
            <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-base   font-bold ">
              Email preferences
            </label>
            <span className="text-[#66686b] mt-2 ">
              Please select which email notifications you would like to receive.
            </span>
          </div>
          <div className="md:grid md:grid-cols-4  ">
            <table className="fl-table dark:text-gray-200 dark:bg-transparent rounded-xl md:m-3 p-5 md:p-8 ">
              <thead>
                <tr>
                  <th />
                  <th scope="col">
                    <h2 className="px-2 text-sm font-bold">Strategy</h2>
                  </th>
                  <th scope="col">
                    <h2 className="px-2 text-sm font-bold">API account</h2>
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
                        <div>
                          <label className="inline-flex relative items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer outline-none "
                              defaultValue=""
                            />
                            <div className="w-11 h-6 bg-gray-200 outline-none rounded-full peer peer-focus:ring-4   dark:bg-white peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#adb4bc] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <div>
                          <label className="inline-flex relative items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer outline-none "
                              defaultValue=""
                            />
                            <div className="w-11 h-6 bg-gray-200 outline-none rounded-full peer peer-focus:ring-4   dark:bg-white peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#adb4bc] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                          </label>
                        </div>
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
