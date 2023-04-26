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

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="menu-wrapper">
        <List className="menu" />
      </div>

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
      </nav>
    </aside>
  );
}
