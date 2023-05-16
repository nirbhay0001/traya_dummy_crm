import React from "react";
import "../../main.css";

function CustomerTest(props) {
  let customerFeedback = [
    {
      // Feedback data
    },
  ];
  console.log(props.customerResult);
  return (
    <div className="px-2 border">
      <div className="p-2 font-weight-bold text-black">
        {props.customerResult.name}
      </div>
      <div className="d-flex gap-5 bg-primary text-white p-2">
        <div className="flex-1">Questions</div>
        <div className="">Answer</div>
      </div>
      <table>
        <tbody>
          <tr className="p-5">
            <td className="flex-1">
              How is your overall mood and sleep these days?
            </td>
            <td className="text-end">N/A</td>
          </tr>
          <tr className="bg-secondary text-white">
            <td className="flex-1">
              Were you regular with your hair routine this month?
            </td>
            <td className="text-end">N/A</td>
          </tr>
          <tr>
            <td className="flex-1">How is your hair fall now?</td>
            <td className="text-end">no</td>
          </tr>
          <tr className="bg-secondary text-white ">
            <td className="flex-1">
              Were you able to follow Traya diet to some extent this month?
            </td>
            <td className="text-end">no</td>
          </tr>
          <tr>
            <td className="flex-1">How is bloating, gas, acidity now?</td>
            <td className="text-end">N/A</td>
          </tr>
          <tr className="bg-secondary text-white ">
            <td className="flex-1">How would you rate your Overall Health?</td>
            <td className="text-end">N/A</td>
          </tr>
          <tr>
            <td className="flex-1">How is your scalp health now?</td>
            <td className="text-end">I have itching and dandruff.</td>
          </tr>
          <tr className="bg-secondary text-white ">
            <td className="flex-1">
              Do you feel your hair is more nourished and healthy now?
            </td>
            <td className="text-end">N/A</td>
          </tr>
          <tr>
            <td className="flex-1">Has hair breakage reduced?</td>
            <td className="text-end">N/A</td>
          </tr>
          <tr className="bg-secondary text-white ">
            <td className="flex-1">
              Do you see an increase in your hair volume? Any change in dandruff?
            </td>
            <td className="text-end">N/A</td>
          </tr>
          <tr>
            <td className="flex-1">
              Are you seeing any improvement with your PCOS symptoms?
            </td>
            <td className="text-end">N/A</td>
          </tr>
          <tr className="bg-secondary text-white ">
            <td className="flex-1">Are you happy with Traya?</td>
            <td className="text-end">N/A</td>
          </tr>
          <tr>
            <td className="flex-1">
              Choose your preferred Language. We will let your coach know about your choice.
            </td>
            <td className="text-end">N/A</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTest;
