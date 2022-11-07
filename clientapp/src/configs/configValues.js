import NumberFilter from "@inovua/reactdatagrid-community/NumberFilter";
import moment from "moment";

const defaultFilterValue = [
  { name: "ID", operator: "eq", type: "string", value: "" },
  { name: "amount", operator: "gte", type: "number", value: 0 },
  { name: "sender", operator: "contains", type: "string", value: "" },
  { name: "receiver", operator: "contains", type: "string", value: "" },
  { name: "confirmed", operator: "startsWith", type: "string", value: "" },
  // { name: "updatedAt", operator: "inrange", type: "date", value: "" },
];

const detailsFilter = (val) => {
  return [{ name: "ID", operator: "eq", type: "string", value: val }];
};

const transactColumns = [
  {
    name: "ID",
    header: "ID",
    minWidth: 100,
    maxWidth: 100,
    defaultFlex: 1,
    type: "string",
  },
  {
    name: "amount",
    header: "Amount",
    minWidth: 100,
    maxWidth: 150,
    defaultFlex: 2,
    resizable: false,
    type: "number",
    filterEditor: NumberFilter,
  },
  {
    name: "sender",
    header: "Sender",
    minWidth: 100,
    maxWidth: 1000,
    defaultFlex: 1,
    resizable: false,
    type: "string",
  },
  {
    name: "receiver",
    header: "Receiver",
    minWidth: 100,
    maxWidth: 1000,
    defaultFlex: 1,
    resizable: false,
    type: "string",
  },
  {
    name: "confirmed",
    header: "Confirmed",
    minWidth: 80,
    maxWidth: 120,
    defaultFlex: 1,
    resizable: false,
    type: "string",
    render: ({ value }) => {
      if (value === true) {
        return "Yes";
      } else {
        return "No";
      }
    },
  },
  {
    name: "updatedAt",
    header: "Timestamp",
    minWidth: 250,
    defaultFlex: 1,
    type: "date",
    resizable: false,
    dateFormat: "ddd-DD-MM-YYYY [at] HH:MM A",
    render: ({ value, cellProps: { dateFormat } }) => {
      return moment(value).format(dateFormat);
    },
  },
];

const gridStyle = { minHeight: 300 };

export { defaultFilterValue, transactColumns, gridStyle, detailsFilter };
