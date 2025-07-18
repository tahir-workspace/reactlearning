import PageTemplate from "./pageTemplate";
import Input from "./Input";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/commonSlice";

export default function Todos() {
  const todoRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      type: "add",
      payload: {
        id: Math.round(Math.random() * 10000),
        todo: todoRef.current.value,
      },
    };

    dispatch(addTodo(data.payload));
    todoRef.current.value = "";
  };
  return (
    <PageTemplate>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
        <form>
          <div className="form-group">
            <Input
              label="Todo"
              type="text"
              id="todo"
              name="todo"
              ref={todoRef}
            />
          </div>
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </PageTemplate>
  );
}
