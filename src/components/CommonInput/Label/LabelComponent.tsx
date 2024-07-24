import React from "react";
import { LabelProps } from "./LabelType";
import { Warraper } from "./styled";
const LabelComponent: React.FC<LabelProps> = ({ label, disabled }) => {
  return (
    <>
      <Warraper $disabled={disabled}>
        <div className="label-color">
          <span>{label}</span>
        </div>
      </Warraper>
    </>
  );
};

export default LabelComponent;
