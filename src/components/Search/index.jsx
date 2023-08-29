import "./Search.css";
import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";
import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { useBoard } from "../../context/ContextBoard";

export function Search({ onSearchQuery }) {
  const [inputSearch, setInputSearch] = useState("");
  const [isFilterBtnActive, setIsFilterBtnActive] = useState(false);
  const selectSearchFormRef = useRef(null);
  const { columns } = useBoard();

  // Block duplicate tags
  let tags = new Set();
  Object.values(columns).map((column) =>
    column.map((task) => task.tags.map((tag) => tags.add(tag)))
  );
  tags = Array.from(tags);

  function handleQuery(e) {
    const querySearch =
      e.type === "change" ? e.target.value : e.target.textContent;

    setInputSearch(querySearch);
    onSearchQuery(querySearch.trim() ? querySearch : "");
  }

  function handleToggleBtnFilter() {
    setIsFilterBtnActive(!isFilterBtnActive);
  }

  // Closes filter selection when the user clicks elsewhere inside the app
  useClickAway(selectSearchFormRef, () => setIsFilterBtnActive(false), [
    "click",
    "touchstart",
  ]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <button
        type="button"
        onClick={handleToggleBtnFilter}
        ref={selectSearchFormRef}
        className="search-btn"
      >
        <FunnelSimple />
        <span>Filtrar</span>
      </button>

      {isFilterBtnActive && (
        <div className="select-search-form">
          <h4 className="title-select-search-form">Tags</h4>
          <ul>
            {tags.map((tag, index) => (
              <li key={index} onClick={handleQuery}>
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
          onChange={handleQuery}
        />
      </div>
    </form>
  );
}
