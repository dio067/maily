import { BrowserRouter, Route, Link } from "react-router-dom";
import { Routes } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'></Link>
      </nav>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}
