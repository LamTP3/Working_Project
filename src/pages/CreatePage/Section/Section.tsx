import React from "react";
import { Collapse } from "antd";
import "./Section.scss";
import TabUpIcon from "../../../Icon/TabUpIcon/TabUpIcon";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Section: React.FC = () => (
  <>
    <Collapse
      items={[
        {
          key: "1",
          label: (
            <div className="header-style">
              <div>Link</div>
              <div className="line-between"></div>
              <div>
                <TabUpIcon />
              </div>
            </div>
          ),
          children: <p>{text}</p>,
          showArrow: false,
        },
      ]}
    />
  </>
);

export default Section;
