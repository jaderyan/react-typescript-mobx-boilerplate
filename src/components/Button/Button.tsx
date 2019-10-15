import React from "react";

interface IProps {
  text: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: any;
}

const Button: React.FunctionComponent<IProps> = ({
  text,
  disabled = false,
  type = "button",
  onClick
}) => (
  <button className="button" disabled={disabled} type={type} onClick={onClick}>
    {text}
  </button>
);

export default Button;
