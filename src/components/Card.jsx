import "./Card.css";

export function Card({ title, content, tags }) {
  return (
    <div className="card">
      <h4 className="card-title">{title}</h4>
      <p>{content}</p>
      <div className="card-tags-wrapper">
        {tags.map((tag) => (
          <span className="card-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
