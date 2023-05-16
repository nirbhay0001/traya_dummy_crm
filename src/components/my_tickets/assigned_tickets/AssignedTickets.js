import React from 'react';
import DateFilter from './DateFilter';
import TicketsOverall from './TicketsOverall';
import Ticketstoday from './TicketsToday';
import InputSearch from './InputSearch';
import TicketsTable from './TicketsTable';
// import Flex from 'components/common/Flex';

const AssignedTickets = () => {
  return (
    <>
      <div className="">
        <h1>Tickets</h1>
        <div className="float-end">
          <DateFilter />
        </div>
        <div className="d-flex flex-wrap gap-5">
          <TicketsOverall />
          <Ticketstoday />
        </div>
        <div className="d-flex flex-column">
        <div className=''>
          <InputSearch />
        </div>
        <TicketsTable />
        </div>
      </div>
    </>
  );
};

export default AssignedTickets;
