import { Card } from "./Card";
import "./BoardColumn.css";

export function BoardColumn({ title, content }) {
  return (
    <section className="board-column">
      <h3>{title}</h3>
      {content.map((data) => (
        <Card title={data.title} content={data.paragraph} tags={data.tags} />
      ))}
    </section>
  );
}
