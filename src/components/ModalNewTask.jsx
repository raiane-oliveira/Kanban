import "./ModalNewTask.css";
import { XCircle, CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { tagsData } from "../data";
import { useBoard } from "../context/ContextBoard";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";

export function ModalNewTask({ closeModal }) {
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
  const { columns, setColumns, modalId } = useBoard();

  let newId = 0;
  function addTask(values, setSubmitting) {
    setSubmitting(false);

    setColumns({
      ...columns,
      [modalId]: [
        ...columns[modalId],
        {
          id: `${values.title + ++newId}`,
          title: values.title,
          paragraph: values.description,
          tags: [values.tags],
        },
      ],
    });

    // Clear all fields and close modal
    setFields({
      title: "",
      paragraph: "",
      tags: [],
    });
    closeModal();
  }

  function updateFields(e) {
    if (e.target.name === "tags") {
      setFields({
        ...fields,
        tags: [...fields.tags, e.target.value],
      });
      return;
    }

    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
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

      <h2 className="title-modal-new-task">Adicione uma tarefa nova</h2>

      <Formik
        initialValues={initialValuesFormik}
        validationSchema={validationYup}
        onSubmit={(values, { setSubmitting }) => addTask(values, setSubmitting)}
      >
        <Form>
          <TextInputs label="Nome" name="title" type="text" />
          <TextareaDescription label="Descrição" name="description" />
          <CheckboxTags name="tags">Rocketseat</CheckboxTags>
          <SelectColors label="Cor" name="colors">
            <option value="green">Green</option>
          </SelectColors>
        </Form>
      </Formik>
    </div>
  );
}

function TextInputs({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input className="title-input-task" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error-task">{meta.error}</div>
      ) : null}
    </>
  );
}

function TextareaDescription({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <textarea name={props.name} id={props.name}></textarea>
      {meta.touched && meta.error ? (
        <div className="error-task">{meta.error}</div>
      ) : null}
    </>
  );
}

function CheckboxTags({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div className="checkbox-tags">
      <label className="label-tags-checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>

      {meta.touched && meta.erro ? (
        <div className="error-task">{meta.error}</div>
      ) : null}
    </div>
  );
}

function SelectColors({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="select-colors">
      <label htmlFor={props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error-task">{meta.error}</div>
      ) : null}
    </div>
  );
}
