import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import PasswordStrength from "./PasswordStrength.jsx";
import Timer from "./Timer.jsx";

function Routers() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> ||{" "}
        <Link to="/timer">Timer</Link> ||{" "}
        <Link to="/password">Password Strength Checker</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Hello</h2>} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/password" element={<PasswordStrength />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;