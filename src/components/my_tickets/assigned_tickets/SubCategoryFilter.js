import React from 'react';
import { useState } from 'react';
// import Select from 'react-select';
import { default as ReactSelect } from 'react-select';
import { components } from 'react-select';

function SubCategoryFilter() {
  const [selectedOptions, setSelectedOptions] = useState();

  const Option = props => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{' '}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };
  // Array of all options
  const optionList = [
    { value: 'Adress or Phone Change', label: 'Red' },
    { value: 'Order Cancellation', label: 'Order Cancellation' },
    { value: 'Reverse Pick up', label: 'Reverse Pickup' },
    { value: 'Return Product', label: 'Return Product' },
    { value: 'Reattempt Product', label: 'Reattempt Product' },
    { value: 'Mismatch Product', label: 'Mismatch Product' },
    { value: 'Missing Product', label: 'Missing Product' },
    { value: 'Refund', label: 'Refund' }
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <>
      <h5 className="mt-3">Sub Category</h5>
      <span
        class="d-inline-block"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please selecet account(s)"
      >
        <ReactSelect
          options={optionList}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option
          }}
          onChange={handleSelect}
          allowSelectAll={true}
          value={selectedOptions}
        />
      </span>
    </>
  );
}

export default SubCategoryFilter;
