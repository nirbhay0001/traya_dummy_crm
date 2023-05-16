import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../../../src/main.css';

function InputSearch() {
  return (
    <>
      <InputGroup className="input-search">
        <Form.Control
          placeholder="Ticket NUmber / Name / Email Id / Case Id / Order Id"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2" className='bg-primary text-white'>Search</InputGroup.Text>
      </InputGroup>
    </>
  );
}

export default InputSearch;
