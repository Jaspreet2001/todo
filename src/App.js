import "./App.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ForgotPassword from "./components/ForgotPassword";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/reset" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
