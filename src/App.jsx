import { BrowserRouter, Link } from "react-router-dom";

import Router from "./router/Router";
import "./styles.css";

export default function App() {
  console.log("App start");
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Link to="/xxxx">404ページ</Link>
        <br />
      </div>
      <Router />
    </BrowserRouter>
  );
}
