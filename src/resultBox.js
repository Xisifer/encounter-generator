import React from "react";
import { Padlock } from "./icons/padlock";
// import {
//   ListGroup,
//   Col,
//   Tab,
//   Row,
//   Popover,
//   Overlay,
//   OverlayTrigger,
// } from "react-bootstrap";

// const popover = (
//     <Popover eventKey="#showDesc">
//         <Popover.Content>

//         </Popover.Content>
//     </Popover>
//     )

export const dataLockToggle = ({ id, data }) => {
  const index = data.findIndex((d) => d.id === id);
  const newDataPoint = { ...data[index] };
  newDataPoint.locked = !newDataPoint.locked;
  // const newDataPoint = {
  //     ...data[index],
  //     locked:!data[index].locked
  // }
  return data
    .slice(0, index)
    .concat(newDataPoint)
    .concat(data.slice(index + 1));
};

export const ResultBox = ({ data, setData }) => {
  return (
    <div className="border-2">
      {data.map((item) => (
        <div className="h-32 flex" key={item.id}>
          <div className="px-6 w-1/12 pt-6">
            <div
              className={`transition duration-200 ease-in-out rounded-full h-10 w-10 flex items-center justify-center border ${
                item.locked
                  ? "border-indigo-500 bg-indigo-100"
                  : "border-gray-300 bg-gray-100"
              }`}
              onClick={() => {
                const newData = dataLockToggle({ id: item.id, data });
                setData(newData);
              }}
            >
              <Padlock
                color={`transition duration-200 ease-in-out ${
                  item.locked ? "text-indigo-500" : "text-gray-300"
                }`}
              />
            </div>
            {/* <div className="locktext">Lock</div> */}
            {/* <input
              type="checkbox"
              className="check-box shadow-checkbox"
              checked={!!item.locked}
              onChange={() => {
                const newData = dataLockToggle({ id: item.id, data });
                setData(newData);
              }}
            /> */}
            {/* {item.locked && <div className="lock-confirm">Is locked</div>} */}
          </div>
          <div className="w-1/4 pt-6">
            <div className="px-12">{item.text}</div>
          </div>
          <div className="w-8/12 pt-6">{item.description}</div>
        </div>
      ))}
    </div>
  );
};
