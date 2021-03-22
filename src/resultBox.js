import React from "react";
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
    <div className="flex flex-col">
      {data.map((item) => (
        <div className="flex" key={item.id}>
          <div className="pr-12">
            <div className="locktext">Lock</div>
            <input
              type="checkbox"
              className="check-box"
              checked={!!item.locked}
              onChange={() => {
                const newData = dataLockToggle({ id: item.id, data });
                setData(newData);
              }}
            />
            {/* {item.locked && <div className="lock-confirm">Is locked</div>} */}
          </div>
          <div className="px-12">{item.text}</div>
          <div className="pl-12 w-1/4">{item.description}</div>
        </div>
      ))}
    </div>
  );
};
