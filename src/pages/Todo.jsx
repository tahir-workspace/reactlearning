import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/commonSlice";

export default function Todos() {
  const todos = useSelector((state) => state.common.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const data = {
      type: "remove",
      payload: { id },
    };
    console.log("Deleting todo with id:", data);
    if (!window.confirm("Are you sure you want to delete this todo?")) {
      return;
    }
    dispatch(removeTodo(data.payload));
  };

  return (
    <div>
      <h2 className="todo-heading">Todo List</h2>
      <ul className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span>{todo.todo}</span>
              <a
                data-id={todo.id}
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                Delete
              </a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href={`/create-todo/${todo.id}`}>Edit</a>
            </li>
          ))
        ) : (
          <li>No Todo list</li>
        )}
      </ul>
      <p className="m-50">
        Click on "<a href="/create-todo">Create Todo</a>" to add a new todo.
      </p>
    </div>
  );
}
