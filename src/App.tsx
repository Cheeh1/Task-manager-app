import RouterLink from "./routes/router";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/AuthContext.tsx";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <ToastContainer />
        <RouterLink />
      </AuthContextProvider>
    </>
  );
};
export default App;
