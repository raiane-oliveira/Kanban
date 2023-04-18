import { PencilSimple } from "@phosphor-icons/react";

import "./Header.css";
import { useState } from "react";

export function Header({ title, img, imgAlt }) {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  function handleEditTitle() {
    setIsEditingTitle(!isEditingTitle);
  }

  return (
    <header className="header">
      <div className="title-header">
        {isEditingTitle ? (
          <form onSubmit={handleEditTitle}>
            <input
              type="text"
              value={currentTitle}
              className="input-edit-header"
              onBlur={handleEditTitle}
              onChange={(e) => setCurrentTitle(e.target.value)}
              autoFocus
            />
          </form>
        ) : (
          <h1>{currentTitle}</h1>
        )}
        <PencilSimple onClick={handleEditTitle} weight="fill" />
      </div>
      <img src="" alt="" className="img-profile" />
    </header>
  );
}
