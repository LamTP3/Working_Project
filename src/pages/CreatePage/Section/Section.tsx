import React from "react";
import { Collapse } from "antd";

import TabUpIcon from "../../../Icon/TabUpIcon/TabUpIcon";
import { SectionProps } from "./SectionType";
import { Warraper } from "./styled";
const Section: React.FC<SectionProps> = ({ title }) => {
  console.log("Check: ", title); // This should log 'Link' if everything is correct.
  return (
    <>
      <Warraper>
        {" "}
        <Collapse
          items={[
            {
              key: "1",
              label: (
                <div className="header-style">
                  <div>{title}</div>
                  <div className="line-between"></div>
                  <div>
                    <TabUpIcon />
                  </div>
                </div>
              ),
              children: (
                <p>
                  {/** Truyền các component như Button, Date Picker vào đây */}
                </p>
              ),
              showArrow: false,
            },
          ]}
        />
      </Warraper>
    </>
  );
};

export default Section;
