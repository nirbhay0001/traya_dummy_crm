import Form from 'react-bootstrap/Form';
import '../../../../src/main.css';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import CategoryFilter from './CategoryFilter';
import SubCategoryFilter from './SubCategoryFilter';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = e => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = e => {
    setEndDate(e.target.value);
  };

  const handleFilterSubmit = e => {
    e.preventDefault();
    // Perform filtering logic with the selected start and end dates
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Traya</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleFilterSubmit} className="data-filter">
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </Form.Group>
            <Button variant="primary" className="mt-4 w-100" type="submit">
              Filter by Date
            </Button>
          </Form>
          <h5 className="mt-3">Filter the Table</h5>
          <div className="d-flex flex-column gap-3">
            <StatusFilter />
            <CategoryFilter />
            <SubCategoryFilter />
            <PriorityFilter />
            <Button variant="primary" className="mt-4" type="submit">
              Filter by Table Data
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function AllDateFilter() {
  return (
    <>
      <OffCanvasExample key={6} placement={'end'} name={'Filter'} />
    </>
  );
}

export default AllDateFilter;
