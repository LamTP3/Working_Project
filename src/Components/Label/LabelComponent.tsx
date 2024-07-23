import "./LabelComponent.scss";
import React from "react";
import { LabelProps } from "./LabelType";
const LabelComponent: React.FC<LabelProps> = ({ label }) => {
  return (
    <div className="label-color">
      <span>{label}</span>
    </div>
  );
};

export default LabelComponent;
