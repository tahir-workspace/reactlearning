import { forwardRef } from "react";

const Input = forwardRef(({ label, type = "text", id, name }, ref) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <input ref={ref} type={type} id={id} name={name} />
    </div>
  );
});

export default Input;
