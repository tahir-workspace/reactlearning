import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function pageTemplate({ children, ...props }) {
  return (
    <div {...props}>
      <Header />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
