import {
  DeviceTabletSpeaker,
  FileText,
  Gear,
  Users,
} from "@phosphor-icons/react";
import logo from "../assets/logo.svg";

import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
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
