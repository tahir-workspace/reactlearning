import Header from "./Header";
import Footer from "./Footer";

export default function pageTemplate({ children, ...props }) {
  return (
    <div {...props}>
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
}
