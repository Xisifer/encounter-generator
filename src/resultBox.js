import React from "react";
import {ListGroup } from "react-bootstrap";

export const ResultBox = ({ data, idPrefix }) => {
  return (
    <div className="result-box">
      <ListGroup>
        {data.map((item, index) => (
          <ListGroup.Item id={`${idPrefix}-result${index}`}>
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
