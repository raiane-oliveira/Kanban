import "./Sidebar.css";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import {
  DeviceTabletSpeaker,
  FileText,
  Gear,
  List,
  Users,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    const contentContainer = document.querySelector(".content-container");
    contentContainer.addEventListener("click", () => setShowMenu(false));
  }, [showMenu]);

  return (
    <aside className={!showMenu ? `sidebar` : `sidebar active-menu`}>
      <div className="menu-wrapper">
        <button onClick={handleMenuToggle} type="button" className="menu-btn">
          <List className="menu-img" />
        </button>
      </div>

      <div className="sidebar-content-wrapper">
        <img src={logo} alt="Logo em espiral Kanban" className="logo" />
        <nav className="sidebar-navigation">
          <NavLink onClick={handleMenuToggle} to="/">
            <DeviceTabletSpeaker weight="fill" />
            <span>Boards</span>
          </NavLink>
          <a onClick={handleMenuToggle} href="#">
            <Users weight="fill" />
            <span>Equipes</span>
          </a>
          <a onClick={handleMenuToggle} href="#">
            <FileText weight="fill" />
            <span>Relatórios</span>
          </a>
          <NavLink onClick={handleMenuToggle} to="/settings">
            <Gear />
            <span>Ajustes</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}
