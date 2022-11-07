import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { CalendarIcon } from "../Svgs/CalendarIcon";
import { FilterIcon } from "../Svgs/FilterIcon";
import { TimesIcon } from "../Svgs/TimesIcon";

const DateRangeFilter = (props) => {
  return (
    <div className="w-3/5 flex flex-col justify-start mb-2">
      <div className="flex items-center text-gray-700 mb-1">
        <CalendarIcon size={8} />
        <h2 className="text-xl font-bold ml-2">Filter by time period</h2>
      </div>
      <div className="flex justify-start p-1 w-full">
        <DateRangePicker
          onChange={props.setDateRangeValue}
          value={props.dateRangeValue}
          format={"dd-MMM-yy"}
          calendarAriaLabel={"Toogle Calendar"}
          showLeadingZeros={true}
          maxDate={new Date()}
          className="bg-white w-max p-2 flex justify-between mr-5"
        />
        <button
          className="w-max p-2 rounded-lg bg-emerald-400 hover:bg-emerald-500 mr-5"
          onClick={props.socketEmitFetchDataByTimeRange}
        >
          <FilterIcon size={7} />
        </button>
        <button
          className="w-max p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white"
          onClick={props.resetDataTable}
        >
          <TimesIcon size={7} />
        </button>
      </div>
    </div>
  );
};

export { DateRangeFilter };
