import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";

import "./Search.css";

export function Search() {
  return (
    <form className="search-form">
      <button className="search-btn">
        <FunnelSimple />
        <span>Filtrar</span>
      </button>

      <div className="search-bar">
        <MagnifyingGlass />
        <input
          type="search"
          className="search-input"
          aria-label="Barra de pesquisa"
          placeholder="Busque por cards, assuntos ou responsáveis..."
        />
      </div>
    </form>
  );
}
