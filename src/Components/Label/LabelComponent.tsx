import "./LabelComponent.scss";
import React from "react";
import { LabelProps } from "./LabelType";
const LabelComponent: React.FC<LabelProps> = ({ required, label }) => {
  return (
    <div className="label-color">
      <div>{label}</div>
      {required && <div> *</div>}
    </div>
  );
};

export default LabelComponent;
