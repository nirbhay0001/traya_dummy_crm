import React from 'react'
import CustomerTable from './CustomerTable'
import CustomerFilter from './CustomerFilter'

function CustomerFeedback() {
  return (
    <div >
      <div className="float-end">
        <CustomerFilter />
      </div>
      <div className='mt-5'>
      <CustomerTable />
      </div>
    </div>
  )
}

export default CustomerFeedback
