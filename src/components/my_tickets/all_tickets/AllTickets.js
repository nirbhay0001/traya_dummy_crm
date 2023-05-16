import React from 'react';
import AllDateFilter from './AllDateFilter';
import AllTicketsOverall from './AllTicketsOverall';
import AllTicketsToday from './AllTicketsToday';
import AllInputSearch from './AllInputSearch';
import AllTicketsTable from './AllTicketsTable';
// import Flex from 'components/common/Flex';


const AllTickets = () => {
  return (
    <>
      <div className="">
        <h1>Tickets</h1>
        <div className="float-end">
          <AllDateFilter />
        </div>
        <div className="d-flex flex-wrap gap-5">
          <AllTicketsOverall />
          <AllTicketsToday />
        </div>
        <div className="d-flex flex-column">
        <div className=''>
          <AllInputSearch />
        </div>
        <AllTicketsTable />
        </div>
      </div>
    </>
  );
};

export default AllTickets;