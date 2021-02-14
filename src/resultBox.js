import React from "react";
import {
  ListGroup,
  Col,
  Tab,
  Row,
  Popover,
  Overlay,
  OverlayTrigger,
} from "react-bootstrap";

// const popover = (
//     <Popover eventKey="#showDesc">
//         <Popover.Content>

//         </Popover.Content>
//     </Popover>
//     )

export const ResultBox = ({ data, idPrefix }) => {
  return (
    <div className="result-box">
      <Tab.Container id="list-group-tabs" defaultActiveKey="#link1">
        {/* <Row> */}
        {/* <Col sm={4}> */}
        <ListGroup>
          {data.map((item, index) => (
            <ListGroup.Item
              key={index}
              action
              href="#showDesc"
            >
              <img src={item.icon} alt="" />
              {item.text}
            </ListGroup.Item>
          ))}
        </ListGroup>
        {/* </Col> */}
        {/* <Col sm={8}> */}
        {/* <Tab.Content>
                        {data.map((item) => (
                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                {item.description}
                            // </OverlayTrigger>

                        <Tab.Pane eventKey="#showDesc">
                            {description}
                        </Tab.Pane>
                        ))}
                    </Tab.Content> */}
        {/* </Col> */}
        {/* </Row> */}
      </Tab.Container>
    </div>
  );
};
