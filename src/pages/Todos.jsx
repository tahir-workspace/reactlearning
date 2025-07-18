import PageTemplate from "./pageTemplate";
import Input from "./Input";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../store/commonSlice";
import { useParams } from "react-router-dom";

export default function Todos() {
  const todos = useSelector((state) => state.common.todos);
  const { id } = useParams();
  const todoRef = useRef(null);
  const [form, setForm] = useState("add");
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      setForm("edit");
      todoRef.current.value =
        todos.find((todo) => todo.id === parseInt(id))?.todo || "";

      if (todoRef.current.value == "") {
        alert("Todo not found");
        window.location.href = "/create-todo";
        return;
      }
    } else {
      console.log("Creating a new todo");
    }
  }, [id, todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      type: form,
      payload: {
        id: form == "edit" ? parseInt(id) : Math.round(Math.random() * 10000),
        todo: todoRef.current.value,
      },
    };

    form == "add"
      ? dispatch(addTodo(data.payload))
      : dispatch(updateTodo(data.payload));
    todoRef.current.value = "";
  };
  return (
    <PageTemplate>
      <div className="contact-container">
        <h1>{form} New Todo</h1>
        <p></p>
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
