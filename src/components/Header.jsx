import { PencilSimple } from "@phosphor-icons/react";

import "./Header.css";

export function Header({ title, img, imgAlt }) {
  return (
    <header className="header">
      <div className="title-header">
        <h1>{title}</h1>
        <PencilSimple weight="fill" />
      </div>
      <img src="" alt="" className="img-profile" />
    </header>
  );
}
