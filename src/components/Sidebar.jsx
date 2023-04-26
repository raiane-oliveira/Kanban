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
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { useBoard } from "../context/ContextBoard";

export function Sidebar() {
  const { user } = useBoard();
  const [showMenu, setShowMenu] = useState(false);
  const menuBurgerRef = useRef(null);

  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }

  function closeMenu() {
    setShowMenu(false);
  }

  useClickAway(menuBurgerRef, () => closeMenu(), ["click", "touchstart"]);

  return (
    <aside className={!showMenu ? `sidebar` : `sidebar active-menu`}>
      <div ref={menuBurgerRef} className="menu-wrapper">
        <button onClick={handleMenuToggle} type="button" className="menu-btn">
          <List className="menu-img" />
        </button>
      </div>

      <div className="sidebar-content-wrapper">
        <img src={logo} alt="Logo em espiral Kanban" className="logo" />
        <nav className="sidebar-navigation">
          <NavLink to="/">
            <DeviceTabletSpeaker weight="fill" />
            <span>Boards</span>
          </NavLink>
          <a href="#">
            <Users weight="fill" />
            <span>Equipes</span>
          </a>
          <a href="#">
            <FileText weight="fill" />
            <span>Relatórios</span>
          </a>
          <NavLink to="/settings">
            <Gear />
            <span>Ajustes</span>
          </NavLink>

          {showMenu && (
            <NavLink to="/:username">
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
