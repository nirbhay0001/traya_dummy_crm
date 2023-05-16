import React from "react";
import { Tabs, Tab, Nav, Row, Col } from "react-bootstrap";
import NewOrder from "./NewOrder";
import RepeatOrder from "./RepeatOrder";
import EngagementFilterData from "./EngagementFilterData";

function EngagemenV2() {
  return (
    <>
      <div className="float-end ">
        <EngagementFilterData />
      </div>
      <Tabs
        variant="pills"
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-5"
      >
        <Tab
          eventKey="profile"
          title="New Order Engagement"
          className="border p-3 w-75"
        >
          <RepeatOrder />
        </Tab>
        <Tab
          eventKey="home"
          title="Repeat Order Engagement"
          className="border p-3 w-75"
        >
          <NewOrder />
        </Tab>
      </Tabs>
    </>
  );
}

export default EngagemenV2;
