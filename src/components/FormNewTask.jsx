import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import { useBoard } from "../context/ContextBoard";
import "./FormNewTask.css";

const validationSchema = Yup.object({
  title: Yup.string().required("Obrigatório"),
  description: Yup.string().required("Obrigatório"),
  tags: Yup.array(),
  color: Yup.string(),
});

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

export function FormNewTask({ onSubmit }) {
  const { columns } = useBoard();
  let tags = new Set();
  Object.values(columns).map((column) =>
    column.map((task) => task.tags.map((tag) => tags.add(tag)))
  );
  tags = Array.from(tags);

  const initialValuesFormik = {
    title: "",
    description: "",
    tags: [],
    color: hexColors.white,
  };
  return (
    <Formik
      initialValues={initialValuesFormik}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      <Form className="form-new-task">
        <div className="title-task">
          <label htmlFor="title" className="title-task-label">
            Nome
          </label>
          <Field autoFocus={true} name="title" className="title-task-input" />
          <ErrorMessage name="title" component="span" className="error-task" />
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
          {tags.map((tag) => (
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
