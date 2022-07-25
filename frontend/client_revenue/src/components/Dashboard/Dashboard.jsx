import React from "react";
import { ListItem } from "../ListItem";
import useApi from "../../hooks/useApi";
import apiClient from "../../api/client";
import { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const clientApi = useApi(apiClient.getClients);

  const [data, setData] = useState(null);
  const [checked, setChecked] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);

  useEffect(() => {
    clientApi.request();
  }, []);

  useEffect(() => {
    if (clientApi.data) {
      setData(clientApi.data);
    }
  }, [clientApi.data]);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Select all items
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setChecked(data.map((item) => item.id));
      setCheckedAll(!checkedAll);
    } else {
      setChecked([]);
      setCheckedAll(!checkedAll);
    }
  };

  var checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  const handleExport = () => {
    if (checked.length) {
      exportToExcel();
    }
  };

  const exportToExcel = () => {
    fetch("http://127.0.0.1:8000/api/v1/client-revenue/export/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clients: checked,
      }),
    }).then((data) => {
      data.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        console.log(url);
        a.href = url;
        a.download = "Revenue.xlsx";
        a.click();
      });
    });
  };

  function checkIfChecked(id) {
    return checked.indexOf(id) === -1 ? false : true;
  }

  return (
    <div>
      <h1>Clients Revenue</h1>
      <div>
        {checkedAll && <h1>All Clients Selected</h1>}
        <h3>{`Selected Clients ids are:  ${checkedItems}`}</h3>
      </div>
      <div className="header-div">
        <div>
          <input type="checkbox" onChange={handleSelectAll} value={"Select All"} />{" "}
          Select All
        </div>
        <button onClick={handleExport}>Export</button>
      </div>
      <div className="list">
        {data &&
          data.map((client) => (
            <ListItem
              key={client.id}
              item={client}
              checked={() => {
                return checkIfChecked(client.id);
              }}
              onChange={handleCheck}
            />
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
