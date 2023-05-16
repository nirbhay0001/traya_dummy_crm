import Table from "react-bootstrap/Table";

function RepeatOrder() {
  const tableRows = [
    {
      engagements: "Week 1",
      assigned: 54,
      finished: 24,
      completed: 22.45,
    },
    {
      engagements: "Week 2",
      assigned: 3,
      finished: 54,
      completed: 23,
    },
    {
      engagements: "Week 3",
      assigned: 3,
      finished: 54,
      completed: 23,
    },
    {
      engagements: "Week 4",
      assigned: 3,
      finished: 54,
      completed: 23,
    },
    {
      engagements: "Retention",
      assigned: 54,
      finished: 24,
      completed: 22.45,
    },
    {
      engagements: "Slot Booking",
      assigned: 54,
      finished: 24,
      completed: 22.45,
    },
    {
      engagements: "Total",
      assigned: 54,
      finished: 24,
      completed: 33.3,
    },
  ];

  return (
    <div className="">
      <div className="d-flex bg-primary text-white m-2 p-2">
          <th className="flex-1" >Engagements</th>
          <th className="flex-1" >Assigned</th>
          <th className="flex-1" >Finished</th>
          <th className="flex-1" >Completed(%)</th>
          </div>
        {tableRows.map((row, index) => {
        return (
          <div
            className={
              index % 2 !== 0
                ? "p-2 bg-secondary d-flex text-white m-2"
                : "d-flex text-black p-2 m-2 border"
            }
            key={index}
          >
            <td className="flex-1" >{row.engagements}</td>
            <td className="flex-1 " >{row.assigned}</td>
            <td className="flex-1" >{row.finished}</td>
            <td className="flex-1 " >{row.completed}</td>
            </div>
        );
      })}
    </div>
  );
}

export default RepeatOrder;

