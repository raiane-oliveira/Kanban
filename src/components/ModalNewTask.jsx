import "./ModalNewTask.css";
import { XCircle, CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { tagsData } from "../data";
import { useBoard } from "../context/ContextBoard";
import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  useField,
} from "formik";
import * as Yup from "yup";

export function ModalNewTask({ closeModal }) {
  const hexColors = {
    white: "rgba(255, 255, 255, 0.9)",
    gray: "rgba(151,154,155,0.95)",
    brown: "#937264",
    orange: "#FFA344",
    yellow: "#FFDC49",
    green: "#4DAB9A",
    blue: "#529CCA",
    purple: "#9A6DD7",
    pink: "#E255A1",
    red: "#FF7369",
  };
  const { columns, setColumns, modalId } = useBoard();

  let newId = 0;
  function addTask(values, setSubmitting) {
    console.log(values.description);
    setColumns({
      ...columns,
      [modalId]: [
        ...columns[modalId],
        {
          id: `${values.title + ++newId}`,
          title: values.title,
          paragraph: values.description,
          tags: values.tags,
          hexColor: values.color,
        },
      ],
    });
    setSubmitting(false);
    closeModal();
  }

  const initialValuesFormik = {
    title: "",
    description: "",
    tags: [],
    color: "",
  };

  const validationYup = Yup.object({
    title: Yup.string().required("Obrigatório"),
    description: Yup.string().required("Obrigatório"),
    tags: Yup.array(),
    color: Yup.string(),
  });

  return (
    <div className="modal-new-task" role="modal">
      <div className="close-modal-wrapper">
        <XCircle onClick={closeModal} className="close-modal" />
      </div>

      <h2 className="title-modal-new-task">
        Adicione uma tarefa nova em:{" "}
        {modalId === "todo"
          ? "A fazer"
          : modalId === "doing"
          ? "Fazendo"
          : "Feito"}
      </h2>

      <Formik
        initialValues={initialValuesFormik}
        validationSchema={validationYup}
        onSubmit={(values, { setSubmitting }) => addTask(values, setSubmitting)}
      >
        <Form>
          <div className="title-task">
            <label htmlFor="title" className="title-task-label">
              Nome
            </label>
            <Field autoFocus={true} name="title" className="title-task-input" />
            <ErrorMessage
              name="title"
              component="span"
              className="error-task"
            />
          </div>

          <div className="description-task">
            <label htmlFor="description" className="description-task-label">
              Descrição
            </label>
            <Field
              name="description"
              as="textarea"
              className="description-task-input"
            />
            <ErrorMessage
              name="description"
              component="span"
              className="error-task"
            />
          </div>

          <div className="tags-task">
            <label className="name-tags-task">Tags</label>
            {tagsData.map((tag) => (
              <CheckboxTags key={tag} name="tags" value={tag} tag={tag} />
            ))}
          </div>

          <div className="color-task">
            <label htmlFor="color" className="color-task-label">
              Cor
            </label>
            <Field name="color" as="select" className="color-task-select">
              {Object.keys(hexColors).map((color) => (
                <option
                  key={color}
                  value={hexColors[color]}
                  style={{ background: hexColors[color] }}
                >
                  {color}
                </option>
              ))}
            </Field>
          </div>

          <button className="search-btn btn-modal" type="submit">
            Adicionar tarefa
          </button>
        </Form>
      </Formik>
    </div>
  );
}

function CheckboxTags({ children, tag, ...props }) {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="label-tags-checkbox">
        <input type="checkbox" {...field} {...props} />
        {tag}
      </label>

      {meta.touched && meta.error ? (
        <div className="error-task">{meta.error}</div>
      ) : null}
    </>
  );
}
