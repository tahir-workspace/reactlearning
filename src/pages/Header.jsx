export default function Header() {
  return (
    <header>
      {/* <h1>Todos</h1> */}
      <nav>
        <ul>
          <li>
            <a href="/">Todos</a>
          </li>
          {/* <li>
            <a href="/blogs">Blogs</a>
          </li> */}
          <li>
            <a href="/create-todo">Create Todo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
