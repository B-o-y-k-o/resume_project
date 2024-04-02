import React from "react";
import "./Button.scss";

export interface IButtonProps {
  children: string;
  onClick?: React.DOMAttributes<HTMLButtonElement>['onClick'],
  className: string;
}

export function Button(props: IButtonProps) {
  const { children, onClick, className } = props;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
