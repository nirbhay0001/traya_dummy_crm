import Form from 'react-bootstrap/Form';
import '../../../../src/main.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [createdBy, setCreatedBy] = useState('');

  const handleStatusChange = e => {
    setStatus(e.target.value);
  };

  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  const handlePriorityChange = e => {
    setPriority(e.target.value);
  };

  const handleSubCategoryChange = e => {
    setSubCategory(e.target.value);
  };

  const handleAssignToChange = e => {
    setAssignTo(e.target.value);
  };

  const handleCreatedByChange = e => {
    setCreatedBy(e.target.value);
  };

  const handleStartDateChange = e => {
    setCreatedBy(e.target.value);
  };

  const handleEndDateChange = e => {
    setCreatedBy(e.target.value);
  };

  const handleFilterSubmit = e => {
    e.preventDefault();
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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleFilterSubmit} className="data-filter">
            <Form.Check
              type="checkbox"
              id="defaultCheckbox"
              label="SLA Crossed"
            />
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                value={status}
                onChange={handleStatusChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                value={category}
                onChange={handleCategoryChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Sub Category</Form.Label>
              <Form.Control
                type="text"
                value={subCategory}
                onChange={handleSubCategoryChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Priority</Form.Label>
              <Form.Control
                type="text"
                value={priority}
                onChange={handlePriorityChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Assign To</Form.Label>
              <Form.Control
                type="text"
                value={assignTo}
                onChange={handleAssignToChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Created BY</Form.Label>
              <Form.Control
                type="text"
                value={createdBy}
                onChange={handleCreatedByChange}
              />
            </Form.Group>
            <Button variant="primary" className="mt-4" type="submit">
              Filter
            </Button>
          </Form>

          <Form.Group className="mt-3">
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
          <div className='d-flex gap-3'>
          <button type="button" className="btn btn-primary mt-3">
            <i className="bi bi-cloud-download"></i>Histogram
          </button>
          <button type="button" className="btn btn-primary mt-3">
            <i className="bi bi-cloud-download"></i>Bargraph
          </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function FilterData() {
  return (
    <>
      <OffCanvasExample key={6} placement={'end'} name={'Filter'} />
    </>
  );
}

export default FilterData;
