// import Table from "react-bootstrap/Table";
import React from "react";
import '../../main.css';
function IvrTable() {
  let tableData = [
    {
      name: "john",
      email: "email@gmail.com",
      ivrCall: 500,
      type: "call",
    },
    {
      name: "john",
      email: "email@gmail.com",
      ivrCall: 50,
      type: "call",
    },
    {
      name: "john",
      email: "email@gmail.com",
      ivrCall: 50,
      type: "call",
    },
    {
      name: "john",
      email: "email@gmail.com",
      ivrCall: 5,
      type: "call",
    },
  ];

  return (
    <div className=" border border-rounded p-3 scrollable ivr-table">
      <div className="d-flex bg-primary text-white m-2 p-2">
        <th className="flex-1 ">Name</th>
        <th className="flex-1 ">Email</th>
        <th className="flex-1 ">Ivr Call</th>
        <th className="flex-1">Type</th>
      </div>
      {tableData.map((item, index) => {
        return (
          <div
            className={
              index % 2 !== 0
                ? "p-2 bg-secondary d-flex text-white m-2"
                : "d-flex text-black p-2 m-2 border"
            }
            key={index}
          >
            <td className="flex-1 ">{item.name}</td>
            <td className="flex-1 ">{item.email}</td>
            <td className="flex-1 ">{item.ivrCall}</td>
            <td className="flex-1">{item.type}</td>
          </div>
        );
      })}
    </div>
  );
}

export default IvrTable;