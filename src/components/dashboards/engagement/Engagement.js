import React from 'react'
import EngagementScheduleFilter from './EngagementScheduleFilter';
import EngagementSchedule from './EngagementSchedule';



function Engagement() {
  return (
    <div className='mt-3'>
        <h3>Engagement Schedule</h3>
      <div className="float-end mb-3">
        <EngagementScheduleFilter />
      </div>
      <div >
      <EngagementSchedule />
      </div>
    </div>
  )
}

export default Engagement
