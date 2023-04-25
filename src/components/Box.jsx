import "./Box.css";

export function Box({ className, children, label }) {
  return (
    <div className={`box-information ${className && className}`}>
      <span className="label-section-profile">{label}</span>
      {children}
    </div>
  );
}
