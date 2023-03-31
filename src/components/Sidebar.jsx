import {
  DeviceTabletSpeaker,
  FileText,
  Gear,
  Users,
} from "@phosphor-icons/react";
import logo from "../assets/logo.svg";

import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={logo} alt="Logo em espiral Kanban" className="logo" />

      <nav className="sidebar-navigation">
        <a className="active" href="#">
          <DeviceTabletSpeaker weight="fill" />
          <span>Boards</span>
        </a>
        <a href="#">
          <Users weight="fill" />
          <span>Equipes</span>
        </a>
        <a href="#">
          <FileText weight="fill" />
          <span>Relatórios</span>
        </a>
        <a href="#">
          <Gear />
          <span>Ajustes</span>
        </a>
      </nav>
    </aside>
  );
}
