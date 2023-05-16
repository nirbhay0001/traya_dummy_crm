// import React from "react";
// // import Table from "components/doc-components/Table";
// import Table from "react-bootstrap/Table";
// import NewWindowLogo from "assets/img/illustrations/NewWindowLogo";
// import CustomerTest from "./CustomerTest";

// function CustomerTable() {

//     // const [state, useState]=(null);

//   let customerTable = [
//     {
//       name: "deepa",
//       agentName: "medRene",
//       orderId: 45,
//       cartLink: "cart link",
//       cartLink3: "cart Link(3 month",
//       LastUpdated: "29/04/23 10:35:42",
//     },
//     {
//       name: "sjpa",
//       agentName: "medRepghjkjh",
//       orderId: 45,
//       cartLink: "cart link",
//       cartLink3: "cart Link(3 month",
//       LastUpdated: "29/04/23 10:35:42",
//     },
//     {
//       name: "yuerpa",
//       agentName: "medRep",
//       orderId: 45,
//       cartLink: "cart link",
//       cartLink3: "cart Link(3 month",
//       LastUpdated: "29/04/23 10:35:42",
//     },
//     {
//       name: "chitra",
//       agentName: "medRep",
//       orderId: 45,
//       cartLink: "cart link",
//       cartLink3: "cart Link(3 month",
//       LastUpdated: "29/04/23 10:35:42",
//     },
//   ];

//   const handleClick=(item)=>{
//     <CustomerTest customerResult={item}/>
//   }

//   return (

//     <div className=" border border-rounded p-3" style={{width:"75%"}}>
//       <div className="d-flex bg-primary text-white m-2 p-2">
//         <th className="flex-1">Name</th>
//         <th className="flex-1">Agent Name</th>
//         <th className="flex-1">Order Diaplay Id</th>
//         <th className="flex-1">Cart LInk</th>
//         <th className="flex-1">Cart Link (3 month)</th>
//         <th className="flex-1">Last Updated</th>
//       </div>
//       {customerTable.map((item, index) => {
//         return (
//           <div
//             className={
//               index % 2 !== 0
//                 ? "p-2 bg-secondary d-flex text-white m-2"
//                 : "d-flex text-black p-2 m-2 border"
//             }
//             key={index}
//           >
//             <td onClick={(item)=>handleClick(item)} className="flex-1"><NewWindowLogo />{"  "}{item.name}</td>
//             <td className="flex-1">{item.agentName}</td>
//             <td className="flex-1">{item.orderId}</td>
//             <td className="flex-1">{item.cartLInk}</td>
//             <td className="flex-1">{item.cartLInk3}</td>
//             <td className="flex-1">{item.lastUpdated}</td>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default CustomerTable;

// <div>
//   <Table striped bordered hover size="sm" className="bg-white color mt-3 w-50">
//     <thead>
//       <tr className="bg-secondary text-white ">
//         <th>Name</th>
//         <th>Agent Name</th>
//         <th>Order Display Id</th>
//         <th>Cart Link</th>
//         <th>Cart Link (3 month)</th>
//         <th>Last Updated</th>
//       </tr>
//     </thead>
//     <tbody>
//       {customerTable.map((item) => {
//         return (
//           <tr className="p-2">
//             <td className="text-black"><NewWindowLogo />{item.name} </td>
//             <td>{item.agentName}</td>
//             <td>{item.orderId}</td>
//             <td>{item.cartLink}</td>
//             <td>{item.cartLink3}</td>
//             <td>{item.LastUpdated}</td>
//           </tr>
//         );
//       })}
//     </tbody>
//   </Table>
// </div>import React from "react";
// // import Table from "components/doc-components/Table";
// import Table from "react-bootstrap/Table";
// import NewWindowLogo from "assets/img/illustrations/NewWindowLogo";
// import CustomerTest from "./CustomerTest";

// function CustomerTable() {

//     // const [state, useState]=(null);

//   let customerTable = [
//     {
//       name: "deepa",
//       agentName: "medRene",
//       orderId: 45,
//       cartLink: "cart link",
//       cartLink3: "cart Link(3 month",
//       LastUpdated: "29/04/23 10:35:42",
//     },
//     {
//       name: "sjpa",
//       agentName: "medRepghjkjh",
//       orderId: 45,
//       cartLink: "cart link",
//       cartLink3: "cart Link(3 month",
//       LastUpdated: "29/04/23 10:35:42",
//     },
//     {
//       name: "yuerpa",
//       agentName: "medRep",
//       orderId: 45,
//       cartLink: "cart link",
//       cartLink3: "cart Link(3 month",
//       LastUpdated: "29/04/23 10:35:42",
//     },
//     {
//       name: "chitra",
//       agentName: "medRep",
//       orderId: 45,
//       cartLink: "cart link",
//       cartLink3: "cart Link(3 month",
//       LastUpdated: "29/04/23 10:35:42",
//     },
//   ];

//   const handleClick=(item)=>{
//     <CustomerTest customerResult={item}/>
//   }

//   return (

//     <div className=" border border-rounded p-3" style={{width:"75%"}}>
//       <div className="d-flex bg-primary text-white m-2 p-2">
//         <th className="flex-1">Name</th>
//         <th className="flex-1">Agent Name</th>
//         <th className="flex-1">Order Diaplay Id</th>
//         <th className="flex-1">Cart LInk</th>
//         <th className="flex-1">Cart Link (3 month)</th>
//         <th className="flex-1">Last Updated</th>
//       </div>
//       {customerTable.map((item, index) => {
//         return (
//           <div
//             className={
//               index % 2 !== 0
//                 ? "p-2 bg-secondary d-flex text-white m-2"
//                 : "d-flex text-black p-2 m-2 border"
//             }
//             key={index}
//           >
//             <td onClick={(item)=>handleClick(item)} className="flex-1"><NewWindowLogo />{"  "}{item.name}</td>
//             <td className="flex-1">{item.agentName}</td>
//             <td className="flex-1">{item.orderId}</td>
//             <td className="flex-1">{item.cartLInk}</td>
//             <td className="flex-1">{item.cartLInk3}</td>
//             <td className="flex-1">{item.lastUpdated}</td>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default CustomerTable;

import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import NewWindowLogo from "assets/img/illustrations/NewWindowLogo";
import CustomerTest from "./CustomerTest";

function CustomerTable() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  let customerTable = [
    {
      name: "deepa",
      agentName: "medRene",
      orderId: 45,
      cartLink: "cart link",
      cartLink3: "cart Link(3 month)",
      LastUpdated: "29/04/23 10:35:42",
    },
    {
      name: "sjpa",
      agentName: "medRepghjkjh",
      orderId: 45,
      cartLink: "cart link",
      cartLink3: "cart Link(3 month)",
      LastUpdated: "29/04/23 10:35:42",
    },
    {
      name: "yuerpa",
      agentName: "medRep",
      orderId: 45,
      cartLink: "cart link",
      cartLink3: "cart Link(3 month)",
      LastUpdated: "29/04/23 10:35:42",
    },
    {
      name: "chitra",
      agentName: "medRep",
      orderId: 45,
      cartLink: "cart link",
      cartLink3: "cart Link(3 month)",
      LastUpdated: "29/04/23 10:35:42",
    },
  ];

  const handleClick = (item) => {
    setSelectedCustomer(item);
  };

  return (
    <div className="d-flex gap-4 mt-3 flex-wrap">
    <div className=" mt-3 border p-4" style={{width:"67%"}}>
      <div className="d-flex bg-primary text-white m-2 p-2">
        <th className="flex-1">Name</th>
        <th className="flex-1">Agent Name</th>
        <th className="flex-1">Order Display Id</th>
        <th className="flex-1">Cart Link</th>
        <th className="flex-1">Cart Link (3 months)</th>
        <th className="flex-1 ms-3">Last Updated</th>
      </div>
      {customerTable.map((item, index) => (
        <div
          className={
            index % 2 !== 0
              ? "p-2 bg-secondary d-flex text-white m-2"
              : "d-flex text-black p-2 m-2 border"
          }
          key={index}
        >
          <td
            onClick={() => handleClick(item)}
            className="flex-1"
            style={{ cursor: "pointer" }}
          >
            <NewWindowLogo /> {item.name}
          </td>
          <td className="flex-1">{item.agentName}</td>
          <td className="flex-1">{item.orderId}</td>
          <td className="flex-1">{item.cartLink}</td>
          <td className="flex-1">{item.cartLink3}</td>
          <td className="flex-1 ms-3">{item.LastUpdated}</td>
        </div>
      ))}

    </div>
    <div className="mt-3" style={{width:"30%"}}>
    {selectedCustomer && <CustomerTest customerResult={selectedCustomer} />}
    </div>
    </div>
  );
}

export default CustomerTable;
