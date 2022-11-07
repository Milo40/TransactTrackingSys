import React from "react";
import { InfoIcon } from "../Svgs/InfoIcon";
import { TimesIcon } from "../Svgs/TimesIcon";
import { ArrowRightIcon } from "../Svgs/ArrowRightIcon";
import { CheckIcon } from "../Svgs/CheckIcon";
import moment from "moment";
import { delTransact } from "../../configs/functions/deleteTransact";

const FScreenDetailsModal = (props) => {
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-70 overflow-y-auto h-full w-full z-10 flex justify-center items-center">
      <div className="absolute mx-auto p-5 border w-5/15 h-2/4 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-start border-b dark:border-gray-600">
          <div className="flex justify-center items-baseline">
            <InfoIcon />
            <h3 className="text-xl font-semibold text-gray-700 ml-2">
              Transaction Details
            </h3>
          </div>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={props.toogleIsDetailView}
          >
            <TimesIcon />
          </button>
        </div>
        <div className="mt-7 flex justify-start">
          <div className="flex justify-between items-center w-full">
            <div className="flex-col">
              <label className="block mb-1 text-md font-medium text-gray-700">
                Sender
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-700 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
                  @
                </span>
                <input
                  type="text"
                  className="rounded-none rounded-r-lg bg-gray-50 border text-gray-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-md border-gray-300 p-2.5"
                  contentEditable={false}
                  readOnly={true}
                  value={props.data[0].sender}
                />
              </div>
            </div>
            <ArrowRightIcon size={12} />
            <div className="flex-col">
              <label className="block mb-1 text-md font-medium text-gray-700">
                Receiver
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-700 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
                  @
                </span>
                <input
                  type="text"
                  className="rounded-none rounded-r-lg bg-gray-50 border text-gray-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-md border-gray-300 p-2.5"
                  contentEditable={false}
                  readOnly={true}
                  value={props.data[0].receiver}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="mt-5 flex justify-start">
          <div className="flex justify-between items-center w-full">
            <div className="flex-col">
              <label className="block mb-1 text-md font-medium text-gray-700">
                Amount
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-700 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
                  $
                </span>
                <input
                  type="number"
                  className="rounded-none rounded-r-lg bg-gray-50 border text-gray-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-md border-gray-300 p-2.5"
                  contentEditable={false}
                  readOnly={true}
                  value={props.data[0].amount}
                />
              </div>
            </div>
            <div className="flex-col">
              <label className="block mb-1 text-md font-medium text-gray-700">
                Confirmed ?
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-700 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
                  ?
                </span>
                <input
                  type="text"
                  className="rounded-none rounded-r-lg bg-gray-50 border text-gray-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-md border-gray-300 p-2.5"
                  contentEditable={false}
                  readOnly={true}
                  value={props.data[0].confirmed}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Row 3 */}
        <div className="mt-5 flex justify-start">
          <div className="flex justify-between items-center w-full">
            <div className="flex-col w-full">
              <label className="block mb-1 text-md font-medium text-gray-700">
                Timestamp
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-700 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
                  #
                </span>
                <input
                  type="text"
                  className="rounded-none rounded-r-lg bg-gray-50 border text-gray-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-md border-gray-300 p-2.5"
                  contentEditable={false}
                  readOnly={true}
                  value={
                    props.data[0].updatedAt +
                    " ||||| " +
                    moment(props.data[0].updatedAt).format(
                      "dddd, DD MMMM YYYY [at] HH:MM A"
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="items-center mt-2 h-max flex-col">
          <button
            id="ok-btn"
            className="px-4 py-2 bg-green-500 text-white font-bold text-base rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 flex justify-center"
            onClick={props.toogleIsDetailView}
          >
            <CheckIcon size={8} />
          </button>
          <button
            id="ok-btn"
            className="px-4 py-2 bg-red-400 text-white font-bold text-base rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 mt-3 flex justify-center"
            onClick={() => {
              props.toogleIsDetailView();
              delTransact(props.data[0].ID);
            }}
          >
            <TimesIcon size={8} />
          </button>
        </div>
      </div>
    </div>
  );
};

export { FScreenDetailsModal };
