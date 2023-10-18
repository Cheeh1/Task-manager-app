import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Forgotten from "../pages/Forgotten";
import Errorpage from "../pages/Errorpage";
import Protected from "../components/Protected";
import Home from "../pages/Home";
import { store } from "../store";

const RouterLink = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotten" element={<Forgotten />} />
        {/* <Route path="/home" element={<Protected><Home /></Protected>} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
    </Provider>
  );
};
export default RouterLink;
