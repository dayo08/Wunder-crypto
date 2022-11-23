import React, { useState } from "react";
import "./Position.css";
import { BsFilter } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
const Positions = () => {
  const columnArray = [
    { id: 1, title: "Position", selected: false },
    { id: 2, title: "Entry", selected: false },
    { id: 3, title: "Take Profit", selected: false },
    { id: 4, title: "Stop Loss", selected: false },
    { id: 5, title: "Trailing Stop ┊ Activation Price", selected: false },
    { id: 6, title: "Portfolio", selected: false },
    { id: 7, title: "P/L", selected: false },
    { id: 8, title: "ROI", selected: false },
    { id: 9, title: "R/R", selected: false },
    { id: 10, title: "Status", selected: false },
    { id: 11, title: "Last update", selected: false },
    { id: 12, title: "Actions", selected: false },
  ];

  const [active, setactive] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const [isChangeData, setIsChangeData] = useState({
    List: columnArray,
    MasterChecked: false,
    SelectedList: [],
  });
  console.log("🚀 ~ Positions ~ isChangeData", isChangeData.List);

  const changePopup = () => {
    setIsOpen((current) => !current);
  };

  // const masterChecked = (e) => {
  //   let tempList = isList;
  //   tempList.map((user) => (user.selected = e.target.checked));
  //   setIsChecked(e.target.checked);
  //   setIsList([{ isList: tempList }]);
  //   setIsSelectedList(isList.filter((e) => e.selected));
  // };

  const onItemCheck = (e, item) => {
    let tempList = isChangeData.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = isChangeData.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    setIsChangeData({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: isChangeData.List.filter((e) => e.selected),
    });
  };

  return (
    <>
      <section className="user-subs-inf-banner text-center">
        Current plan: Pro ( 3 days left )
      </section>

      {/* Main */}
      <div className="console-page-header bg-white dark:bg-[#21252b] dark:text-white">
        <h2>Positions</h2>
        <div
          className="trader-pnl-stats js_trader_pnl_stats"
          data-url="/en/trader/get-pnl-stats-data"
        >
          <div
            className="pnl-info-block"
            style={{ display: "flex", flexWrap: "wrap", maxWidth: "80%" }}
          >
            <span className="title">Current оpen positions</span>&nbsp;
            <div
              style={{ paddingRight: 5 }}
              className="pnl-info-positions-count"
            >
              <div>0</div>
            </div>
            &nbsp;
            <span className="title">Cumulative unrealized P/L</span>&nbsp;
            <div className="pnl-info-pnl-percents">
              <div style={{ color: "null" }}>0%</div>
            </div>
            &nbsp; (
            <div className="pnl-info-pnl-fiat">
              <div style={{ color: "null" }}>$0</div>
            </div>
            )
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex md:text-xl text-base font-bold gap-8 cursor-pointer dark:text-white border-b-2 border-[#828282]">
        <div
          style={{ padding: "16px 0 20px", margin: "0 24px" }}
          className={`${
            active === 1
              ? "border-b-4 hover:text-[#598fff] border-[#03c9d7]  "
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
          style={{ padding: "16px 0 20px", margin: "0 24px" }}
          className={`${
            active === 2
              ? "border-b-4 border-[#03c9d7] hover:text-[#598fff] "
              : "deActive hover:text-[#598fff]"
          }`}
        >
          Spreads & Arbitrage
        </div>
        <div
          style={{ padding: "16px 0 20px", margin: "0 24px" }}
          className={`${
            active === 3
              ? "border-b-4 border-[#03c9d7]  hover:text-[#598fff]"
              : "deActive hover:text-[#598fff]"
          }`}
          onClick={() => {
            setactive(3);
          }}
        >
          DCA Trading
        </div>
      </div>
      {/* Active */}
      <div className="p-7">
        <button className="bg-[#598fff] hover:bg-[#3c60c3] text-white font-bold py-2 px-4 rounded btn">
          Live
        </button>
        <button className="hover:bg-[#598fff] border-[#3c60c3] border text-white font-bold py-2 px-4 rounded ml-8 btn">
          History
        </button>
      </div>

      {/* Close All */}
      <div className="flex justify-between items-center px-7">
        <div>
          <button className="bg-[#e14daf] hover:bg-[#b83f8f] text-white font-bold py-2 px-4 rounded btn">
            Close All
          </button>
        </div>
        <div>
          <div
            className={`text-3xl text-white ${isOpen ? "opacity-0" : ""} `}
            onClick={changePopup}
          >
            <BsFilter />
          </div>
        </div>
      </div>

      {/* PopUp */}
      {isOpen && (
        <div
          role="presentation"
          className="MuiPopover-root MuiModal-root css-jp7szo"
        >
          <div
            aria-hidden="true"
            className="MuiBackdrop-root MuiBackdrop-invisible css-esi9ax"
            style={{
              opacity: 1,
              transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
          />

          <div
            className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation2 MuiPopover-paper css-euq5oh text-white mt-20"
            tabIndex={-1}
            style={{
              opacity: 1,
              transform: "none",
              transition:
                "opacity 312ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 208ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              top: 16,
              left: 1196,
              transformOrigin: "203.013px 292.25px",
            }}
          >
            <button
              className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium tss-5r15im-MUIDataTableToolbar-filterCloseIcon css-1yxmbwk text-white"
              tabIndex={0}
              type="button"
              aria-label="Close"
              onClick={changePopup}
              style={{ position: "absolute", right: 4, top: 4 }}
            >
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CloseIcon"
              >
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
              <span className="MuiTouchRipple-root css-w0pj6f" />
            </button>
            <fieldset
              className="MuiFormControl-root tss-9562fz-MUIDataTableViewCol-root css-13sljp9"
              aria-label="Show/Hide Table Columns"
            >
              <span className="MuiTypography-root MuiTypography-caption tss-1ah9me1-MUIDataTableViewCol-title css-1v2gfp5">
                Show Columns
              </span>
              <div className="MuiFormGroup-root tss-dbu3l1-MUIDataTableViewCol-formGroup css-1h7anqn">
                {columnArray.map((item) => (
                  <label
                    key={item.id}
                    className="MuiFormControlLabel-root tss-1jkmj04-MUIDataTableViewCol-formControl MuiFormControlLabel-labelPlacementEnd css-1jaw3da"
                  >
                    <span
                      className="MuiButtonBase-root MuiCheckbox-root tss-pveyo8-MUIDataTableViewCol-checkboxRoot MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root tss-pveyo8-MUIDataTableViewCol-checkboxRoot MuiCheckbox-colorPrimary  MuiCheckbox-root tss-pveyo8-MUIDataTableViewCol-checkboxRoot MuiCheckbox-colorPrimary tss-bvzzpc-MUIDataTableViewCol-checkbox css-zun73v"
                      data-description="table-view-col"
                    >
                      {/* <input
                        type="checkbox"
                        className="form-check-input"
                        checked={isChecked}
                        id="mastercheck"
                        onChange={(e) => masterChecked(e)}
                      /> */}

                      <input
                        type="checkbox"
                        checked={item?.selected}
                        id="rowcheck{user.id}"
                        onChange={(e) => onItemCheck(e, item)}
                      />
                      <span className="MuiTouchRipple-root css-w0pj6f" />
                    </span>
                    <span className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label tss-1sf0hhi-MUIDataTableViewCol-label css-9l3uo3">
                      {item.title}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="mt-5 px-7  overflow-auto text-white">
        {/* <table>
          <thead>
            <tr>
              <th>
                <BsChevronRight />
              </th>
              <th>Header 2</th>
              <th>Header 3</th>
              <th>Header 4</th>
              <th>Header 5</th>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
              <th>Header 4</th>
              <th>Header 5</th>
              <th>Header 3</th>
              <th>Header 4</th>
              <th>Header 5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Content 1</td>
              <td>Content 1</td>
              <td>Content 1</td>
              <td>Content 1</td>
              <td>Content 1</td>
              <td>Content 1</td>
              <td>Content 1</td>
              <td>Content 1</td>
              <td>Content 1</td>
              <td>Content 1</td>
              <td>Content 1</td>
              <td>Content 1</td>
              <td>Content 1</td>
            </tr>
          </tbody>
        </table> */}
        <table className="text-white">
          <thead className="text-white">
            <tr className="text-white">
              {isChangeData?.SelectedList?.map((i) => (
                <>
                  <th scope="col" className="!text-white">
                    {i.title}
                  </th>
                </>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default Positions;
