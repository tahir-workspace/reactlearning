import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./pages/Loader";

// Lazy load components
const Todolist = lazy(() => import("./pages/Todolist"));
const Todos = lazy(() => import("./pages/Todos"));
const NoPage = lazy(() => import("./pages/NoPage"));
const PageTemplate = lazy(() => import("./pages/pageTemplate"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PageTemplate />}>
            <Route index element={<Todolist />} />
            <Route path="create-todo/:id?" element={<Todos />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
