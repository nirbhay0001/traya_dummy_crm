import Form from 'react-bootstrap/Form';
import '../../../../src/main.css';
// import { Dropdown } from 'react-bootstrap';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import DropdownButton from 'react-bootstrap';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import CategoryFilter from './CategoryFilter';
import SubCategoryFilter from './SubCategoryFilter';

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
          <Offcanvas.Title><h1>Traya</h1></Offcanvas.Title>
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
          <h3 className="mt-3">Filter the Table</h3>
          <div className="d-flex flex-column gap-3">
            <StatusFilter />
            <CategoryFilter />
            <SubCategoryFilter />
            <PriorityFilter />
            <Button variant="primary" className="mt-4" type="submit">
              Filter by Table Data
            </Button>
          </div>
          {/* <div className="d-flex gap-3 flex-column">
            <DropdownButton id="dropdown-basic-button" title="status">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Category">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Sub category">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Priority">
              <Dropdown.Item href="#/action-1">
                {' '}
                <Form.Check
                  type="checkbox"
                  id="defaultCheckbox"
                  label="Default Checkbox"
                />
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function DateFilter() {
  return (
    <>
      <OffCanvasExample key={6} placement={'end'} name={'Filter'} />
    </>
  );
}

export default DateFilter;
