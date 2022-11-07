import React, { useState, useRef, useEffect, useCallback } from "react";
import { io } from "socket.io-client";
import { Helmet } from "react-helmet";
import filter from "@inovua/reactdatagrid-community/filter";
import { defaultFilterValue, detailsFilter } from "../configs/configValues";
import { DateRangeFilter } from "../components/DateRangeFilter/DateRangeFilter";
import { DataGrid } from "../components/DataGrid/DataGrid";
import { FScreenDetailsModal } from "../components/FScreenDetailsModal/FScreenDetailsModal";
import { FScreenAddModal } from "../components/FScreenAddModal/FScreenAddModal";
import { AddTransactRow } from "../components/AddTransactRow/AddTransactRow";

const Home = (props) => {
  const socket = useRef(null);
  const SOCKETPOINT = "http://localhost:7000";
  const [filterValue, setFilterValue] = useState(defaultFilterValue);
  const [initData, setInitData] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [dateRangeValue, setDateRangeValue] = useState([
    new Date(),
    new Date(),
  ]);
  const [selected, setSelected] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [isAddView, setIsAddView] = useState(false);
  const [detailValue, setDetailValue] = useState([]);

  const toogleIsAddView = () => {
    setIsAddView(!isAddView);
  };

  const onSelectionChange = ({ selected }) => {
    setDetailValue(filter(initData, detailsFilter(selected)));
    toogleIsDetailView();
    setSelected(selected);
  };

  const toogleIsDetailView = () => {
    setIsDetailView(!isDetailView);
  };

  const resetDataTable = () => {
    setDataSource(filter(initData, defaultFilterValue));
  };

  const socketEmitFetchData = () => {
    if (socket.current.connected) {
      socket.current.emit("fetchData");
    }
  };

  const socketEmitFetchDataByTimeRange = () => {
    if (socket.current.connected) {
      socket.current.emit("fetchDateRangeData", {
        from: dateRangeValue[0],
        to: dateRangeValue[1],
      });
    }
  };

  useEffect(() => {
    socket.current = io(SOCKETPOINT);
    socket.current.on("pushData", (data) => {
      setInitData(filter(data, defaultFilterValue));
      setDataSource(filter(data, defaultFilterValue));
    });
    socket.current.on("pushTimeRangedTransactionData", (data) => {
      setDataSource(filter(data, defaultFilterValue));
    });

    setTimeout(() => {
      socketEmitFetchData();
    }, 3000);
  }, []);

  const onFilterValueChange = (filterValue) => {
    const data = filter(initData, filterValue);
    setFilterValue(filterValue);
    setDataSource(data);
  };

  return (
    <div className="h-screen w-screen">
      {isDetailView ? (
        <FScreenDetailsModal
          toogleIsDetailView={toogleIsDetailView}
          data={detailValue}
        />
      ) : null}
      {isAddView ? <FScreenAddModal toogleIsAddView={toogleIsAddView} /> : null}
      <div className="w-full h-full bg-slate-200 p-20 flex justify-center">
        <Helmet>
          <title>Home | TransactTrackingSys</title>
        </Helmet>
        <div className="p-5 mt-20 w-11/12 h-5/6">
          <div className="text-3xl text-gray-700 font-bold mb-10 text-center">
            <h2>TransactTrackingSys Web Client</h2>
          </div>
          <div className="w-full flex justify-between">
            <DateRangeFilter
              dateRangeValue={dateRangeValue}
              setDateRangeValue={setDateRangeValue}
              socketEmitFetchDataByTimeRange={socketEmitFetchDataByTimeRange}
              resetDataTable={resetDataTable}
            />
            <AddTransactRow toogleIsAddView={toogleIsAddView} />
          </div>
          <DataGrid
            onFilterValueChange={onFilterValueChange}
            filterValue={filterValue}
            dataSource={dataSource}
            selected={selected}
            onSelectionChange={onSelectionChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
