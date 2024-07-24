import React from "react";
import { Button } from "antd";
import { ButtonProps } from "./ButtonType";
import { ButtonWarraper } from "./styled";
import { ArrowIcon } from "../../../Icon";
const ButtonComponent: React.FC<ButtonProps> = ({
  background_color,
  button_content,
  arrow_icon,
  onClick,
  width,
}) => {
  return (
    <div>
      <ButtonWarraper $width={width}>
        <Button
          type="primary"
          className={`no-border ${background_color}`}
          onClick={onClick}
        >
          <div>{button_content}</div>
          <div>{arrow_icon && <ArrowIcon />}</div>
        </Button>
      </ButtonWarraper>
    </div>
  );
};

export default ButtonComponent;
