import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import "@inovua/reactdatagrid-community/base.css";
import "@inovua/reactdatagrid-community/theme/blue-light.css";
import {
  defaultFilterValue,
  transactColumns,
  gridStyle,
} from "../../configs/configValues";

const DataGrid = (props) => {
  return (
    <div className="w-full p-2 flex-col h-5/6">
      <div className="w-full flex justify-center h-full border-gray-700 border-2">
        <ReactDataGrid
          idProperty="ID"
          onFilterValueChange={props.onFilterValueChange}
          filterValue={props.filterValue}
          defaultFilterValue={defaultFilterValue}
          columns={transactColumns}
          dataSource={props.dataSource}
          style={gridStyle}
          enableFiltering
          pagination
          defaultLimit={10}
          selected={props.selected}
          onSelectionChange={props.onSelectionChange}
        />
      </div>
    </div>
  );
};

export { DataGrid };
