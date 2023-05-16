import React from 'react';
import { Table } from 'react-bootstrap';
import '../../../../src/main.css';

function AllTicketsTable() {
    const rowData = [
    {
      ticketNumber: 454,
      name: 'Name',
      email: 'email@email.con',
      orderId: 34567,
      status: 'Pending',
      category: 'Goods',
      subCategory: 'Sub Category',
      firstComment: 'First Comment',
      priority: 'Priority',
      createdBy: 'Created By',
      assignee: 'Assignee',
      createdDate: 'Created Date',
      lastUpdate: 'Last Update',
      action: 'Action',
    },
    {
      ticketNumber: 455,
      name: 'John',
      email: 'john@example.com',
      orderId: 34568,
      status: 'In Progress',
      category: 'Services',
      subCategory: 'Sub Category',
      firstComment: 'Some Comment',
      priority: 'High',
      createdBy: 'Admin',
      assignee: 'Agent',
      createdDate: '2023-05-15',
      lastUpdate: '2023-05-16',
      action: 'View',
    },
    {
      ticketNumber: 456,
      name: 'Jane',
      email: 'jane@example.com',
      orderId: 34569,
      status: 'Resolved',
      category: 'Goods',
      subCategory: 'Sub Category',
      firstComment: 'Another Comment',
      priority: 'Medium',
      createdBy: 'User',
      assignee: 'Agent',
      createdDate: '2023-05-14',
      lastUpdate: '2023-05-17',
      action: 'Close',
    },
    // Add more objects as needed
  ];

  return (
    <div>
      <Table striped bordered hover size="sm" responsive className="bg-white color mt-5">
        <thead>
          <tr className="bg-secondary text-white">
            <th>Ticket Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Order Id</th>
            <th>Status</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>First Comment</th>
            <th>Priority</th>
            <th>Created By</th>
            <th>Assignee</th>
            <th>Created Date </th>
            <th>Last Update</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, index) => (
            <tr key={index} className='p-4'>
              <td>{row.ticketNumber}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.orderId}</td>
              <td>{row.status}</td>
              <td>{row.category}</td>
              <td>{row.subCategory}</td>
              <td>{row.firstComment}</td>
              <td>{row.priority}</td>
              <td>{row.createdBy}</td>
              <td>{row.assignee}</td>
              <td>{row.createdDate}</td>
              <td>{row.lastUpdate}</td>
              <td>{row.action}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AllTicketsTable;
