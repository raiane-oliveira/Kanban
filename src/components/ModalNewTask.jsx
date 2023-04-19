import { XCircle, CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { tagsData } from "../data";
import "./ModalNewTask.css";

export function ModalNewTask({ onCloseModal }) {
  const [colorSelected, setColorSelected] = useState("white");
  const [openColorsSelect, setOpenColorsSelect] = useState(false);
  const hexColors = {
    white: "#fff",
    gray: "#EBECED",
    brown: "#E9E5E3",
    orange: "#FAEBDD",
    yellow: "#FBF3DB",
    green: "#DDEDEA",
    blue: "#DDEBF1",
    purple: "#EAE4F2",
    pink: "#F4DFEB",
    red: "#FBE4E4",
  };

  return (
    <div className="modal-new-task" role="modal">
      <div className="close-modal-wrapper">
        <XCircle onClick={onCloseModal} className="close-modal" />
      </div>

      <h2 className="title-modal-new-task">Adicione uma tarefa nova</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label className="name-task">
          Título:
          <input type="text" />
        </label>

        <label className="description-task">
          Descrição:
          <textarea name="description"></textarea>
        </label>

        <div className="tags-wrapper-task">
          <label className="tags-task">
            Tags:
            <select name="tags">
              {tagsData.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="colors-wrapper-task">
          <label htmlFor="colors" className="title-colors">
            Cor:
            <div
              id="colors"
              className="color-selected"
              onClick={() => setOpenColorsSelect(!openColorsSelect)}
              style={{ background: `${hexColors[colorSelected]}` }}
            >
              <span>{colorSelected}</span>
              <CaretDown size={14} weight="bold" className="arrow-down" />
            </div>
          </label>
        </div>

        {openColorsSelect && (
          <ColorsSelect
            hexColors={hexColors}
            onColorSelect={setColorSelected}
            onOpenColorsSelect={setOpenColorsSelect}
          />
        )}

        <button
          type="submit"
          className="search-btn btn-modal"
          onMouseOver={() => setOpenColorsSelect(false)}
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}

function ColorsSelect({ hexColors, onColorSelect, onOpenColorsSelect }) {
  function handleClick(e) {
    onColorSelect(e.target.textContent);
    onOpenColorsSelect(false);
  }

  return (
    <div id="colors" className="colors-select-task">
      {Object.keys(hexColors).map((color) => (
        <button
          type="button"
          className="item-colors-select-task"
          key={color}
          style={{ background: `${hexColors[color]}` }}
          onClick={handleClick}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
