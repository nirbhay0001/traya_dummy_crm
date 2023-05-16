// import Table from "react-bootstrap/Table";

// function EngagementSchedule() {
//   return (
//     <Table striped bordered hover size="sm" className="bg-white color">
//       <thead>
//         <tr className="bg-secondary text-white">
//           <th>Hair Coach</th>
//           <th>Type</th>
//           <th>Prescription call</th>
//           <th>Week 1</th>
//           <th>Week 3</th>
//           <th>Retention and others</th>
//           <th>Slot bookings</th>
//           <th>Total</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>45</td>
//           <td>2</td>
//           <td>44</td>
//           <td>45</td>
//           <td>45</td>
//           <td>35</td>
//           <td>15</td>
//           <td>51</td>
//         </tr>
//         <tr>
//           <td>45</td>
//           <td>2</td>
//           <td>44</td>
//           <td>45</td>
//           <td>45</td>
//           <td>35</td>
//           <td>15</td>
//           <td>51</td>
//         </tr>
//         <tr>
//           <td>45</td>
//           <td>2</td>
//           <td>44</td>
//           <td>45</td>
//           <td>45</td>
//           <td>35</td>
//           <td>15</td>
//           <td>51</td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }

// export default EngagementSchedule;

import React from "react";
// import "../../main.css";

function CustomerTest(props) {
  const tableData = [
    {
      hairCoach: 45,
      type: 2,
      prescriptionCall: 44,
      week1: 45,
      week3: 45,
      retentionAndOthers: 35,
      slotBookings: 15,
      total: 51,
    },
    {
      hairCoach: 30,
      type: 1,
      prescriptionCall: 28,
      week1: 29,
      week3: 29,
      retentionAndOthers: 20,
      slotBookings: 10,
      total: 35,
    },
    {
      hairCoach: 50,
      type: 3,
      prescriptionCall: 48,
      week1: 49,
      week3: 49,
      retentionAndOthers: 40,
      slotBookings: 20,
      total: 55,
    },
    // Add more objects as needed
  ];

  // console.log(props.customerResult);

  return (
    <div className=" border border-rounded p-3  mt-5 ">
      <div className="d-flex bg-primary text-white m-2 p-2">
          <th className="flex-1 ">Hair Coach</th>
          <th className="flex-1 ">Type</th>
          <th className="flex-1 ">Prescription call</th>
          <th className="flex-1 ">Week 1</th>
          <th className="flex-1 ">Week 3</th>
          <th className="flex-1 ">Retention and others</th>
          <th className="flex-1 ">Slot bookings</th>
          <th className="flex-1"  >Total</th>
      </div>
      {tableData.map((row, index) => {
        return (
          <div
            className={
              index % 2 !== 0
                ? "p-2 bg-secondary d-flex text-white m-2"
                : "d-flex text-black p-2 m-2 border"
            }
            key={index}
          >
            <td className="flex-1 ">{row.hairCoach}</td>
            <td className="flex-1 ">{row.type}</td>
            <td className="flex-1 ">{row.prescriptionCall}</td>
            <td className="flex-1 ">{row.week1}</td>
            <td className="flex-1 ">{row.week3}</td>
            <td className="flex-1 ">{row.retentionAndOthers}</td>
            <td className="flex-1 ">{row.slotBookings}</td>
            <td className="flex-1 ">{row.total}</td>
          </div>
        );
      })}
    </div>
  );
}

export default CustomerTest;
