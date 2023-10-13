import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Forgotten from "../pages/Forgotten";
import Errorpage from "../pages/Errorpage";
import Protected from "../components/Protected";
import Home from "../pages/Home";

const RouterLink = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotten" element={<Forgotten />} />
        <Route path="/home" element={<Protected><Home /></Protected>} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
};
export default RouterLink;
