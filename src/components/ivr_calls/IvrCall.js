import React from "react";
import IvrDateFilter from "./IvrDateFilter";
import IvrTable from "./IvrTable";

function IvrCall() {
  return (
    <div>
        <h1>IVR Calls</h1>
      <div className="float-end mb-3">
        <IvrDateFilter />
      </div>
      <div className="mt-5 w-75">
      <IvrTable />
      </div>
    </div>
  );
}

export default IvrCall;
