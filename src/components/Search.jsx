import "./Search.css";
import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";

export function Search({ setSearchQuery }) {
  const [inputSearch, setInputSearch] = useState("");

  function handleChange(e) {
    let querySearch = e.target.value;
    setInputSearch(querySearch);
    setSearchQuery(querySearch.trim() ? querySearch : "");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <button type="button" className="search-btn">
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
          value={inputSearch}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
