import RouterLink from "./routes/router";
import { AuthContextProvider } from "./context/AuthContext.tsx";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <RouterLink />
      </AuthContextProvider>
    </>
  );
};
export default App;
