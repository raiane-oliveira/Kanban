import "./Search.css";
import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { tagsData } from "../data";

export function Search({ onSearchQuery }) {
  const [inputSearch, setInputSearch] = useState("");
  const [isFilterBtnActive, setIsFilterBtnActive] = useState(false);

  useEffect(() => {
    const boardContent = document.querySelector(".board-content");
    const searchBar = document.querySelector(".search-bar");
    searchBar.addEventListener("click", () => setIsFilterBtnActive(false));
    boardContent.addEventListener("click", () => setIsFilterBtnActive(false));
  }, [isFilterBtnActive]);

  function handleChange(e) {
    const querySearch =
      e.type === "change" ? e.target.value : e.target.textContent;

    setInputSearch(querySearch);
    onSearchQuery(querySearch.trim() ? querySearch : "");
    if (e.type !== "change") setIsFilterBtnActive(false);
  }

  function handleToggleBtnFilter() {
    setIsFilterBtnActive(!isFilterBtnActive);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <button
        type="button"
        onClick={handleToggleBtnFilter}
        className="search-btn"
      >
        <FunnelSimple />
        <span>Filtrar</span>
      </button>

      {isFilterBtnActive && (
        <div className="select-search-form">
          <h4 className="title-select-search-form">Tags</h4>
          <ul>
            {tagsData.map((tag, index) => (
              <li key={index} onClick={handleChange}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}

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
