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
import { useBoard } from "../context/ContextBoard";

export function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useBoard();
  console.log(user);

  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }

  function closeMenu() {
    setShowMenu(false);
  }

  useEffect(() => {
    const contentContainer = document.querySelector(".content-container");
    contentContainer.addEventListener("click", closeMenu);
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
          <NavLink onClick={closeMenu} to="/">
            <DeviceTabletSpeaker weight="fill" />
            <span>Boards</span>
          </NavLink>
          <a onClick={closeMenu} href="#">
            <Users weight="fill" />
            <span>Equipes</span>
          </a>
          <a onClick={closeMenu} href="#">
            <FileText weight="fill" />
            <span>Relatórios</span>
          </a>
          <NavLink onClick={closeMenu} to="/settings">
            <Gear />
            <span>Ajustes</span>
          </NavLink>

          {showMenu && (
            <NavLink onClick={closeMenu} to="/:username">
              <img
                src={user.avatar}
                alt={`${user.firstName} ${user.lastName}`}
                className="avatar-profile"
              />
              <span>Perfil</span>
            </NavLink>
          )}
        </nav>
      </div>
    </aside>
  );
}
