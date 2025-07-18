import PageTemplate from "./pageTemplate";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/commonSlice";

export default function Todolist() {
  const todos = useSelector((state) => state.common.todos);
  const dispatch = useDispatch();
  console.log("Todos:", todos);

  const handleDelete = (id) => {
    const data = {
      type: "remove",
      payload: { id },
    };
    console.log("Deleting todo with id:", data);
    dispatch(removeTodo(data.payload));
  };

  if (todos.length > 0) {
    return (
      <PageTemplate>
        <div>
          <h1>Todo List</h1>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.todo}</span>
                <a
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Delete
                </a>
              </li>
            ))}
          </ul>
        </div>
      </PageTemplate>
    );
  } else
    return (
      <PageTemplate>
        <div>
          <h1>Todo List</h1>
          <p>No list </p>
          <p>
            Click on "<a href="/create-todo">Create Todo</a>" to add a new todo.
          </p>
        </div>
      </PageTemplate>
    );
}
