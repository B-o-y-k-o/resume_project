import "./Header.scss";
import logo from "../../assets/logo-svgrepo-com.svg";
import { memo } from "react";

export const Header = memo(function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <p>
        <strong>Вопросы для собеседования.</strong>
      </p>
    </div>
  );
});
