import "./Search.css";
import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import data from "../data";

export function Search({ setSearchQuery }) {
  const [inputSearch, setInputSearch] = useState("");
  const [isFilterBtnActive, setIsFilterBtnActive] = useState(false);

  const newData = { ...data };
  let tags = new Set();
  Object.values(newData).map((column) =>
    column.map((task) => {
      task.tags.map((tag) => tags.add(tag));
    })
  );

  function handleChange(e) {
    const querySearch =
      e.type === "change" ? e.target.value : e.target.textContent;

    setInputSearch(querySearch);
    setSearchQuery(querySearch.trim() ? querySearch : "");
    if (e.type !== "change") setIsFilterBtnActive(false);
  }

  function handleFilterByTags(e) {
    setIsFilterBtnActive(!isFilterBtnActive);
  }

  let countKeySelect = 0;
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <button type="button" onClick={handleFilterByTags} className="search-btn">
        <FunnelSimple />
        <span>Filtrar</span>
      </button>

      {isFilterBtnActive && (
        <div className="select-search-form">
          <h4 className="title-select-search-form">Tags</h4>
          <ul>
            {Array.from(tags).map((tag) => (
              <li key={`${tag}${countKeySelect++}`} onClick={handleChange}>
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
