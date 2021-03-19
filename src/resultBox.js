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

export const ResultBox = ({ data, setData }) => {
  const dataLockToggle = (id) => {
    const index = data.findIndex((d) => d.id === id);
    const newDataPoint = data[index];
    newDataPoint.locked = !newDataPoint.locked;
    // const newDataPoint = {
    //     ...data[index],
    //     locked:!data[index].locked
    // }
    const newData = data
      .slice(0, index)
      .concat(newDataPoint)
      .concat(data.slice(index + 1));
    setData(newData);
  };

  return (
    <div className="result-box">
      <div className="list-group">
        {data.map((item) => (
          <div key={item.id}>
            <div className="result-line">
              <div className="lockbox">
                <div className="locktext">Lock Choice</div>
                <input
                  type="checkbox"
                  className="check-box"
                  checked={item.locked}
                  onChange={() => dataLockToggle(item.id)}
                />
                {item.locked && <div className="lock-confirm">Is locked</div>}
              </div>
              <div className="result-item">{item.text}</div>
              <div className="description-box">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
