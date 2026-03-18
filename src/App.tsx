// Dependencies
import { Fragment } from "react/jsx-runtime";
import { ToastContainer } from "react-toastify";

// Styles
import { GlobalStyle } from "./styles/global";

// Routes
import { ApplicationRoutes } from "./routes";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ToastContainer theme="light" position="bottom-right" limit={1} />
      <ApplicationRoutes />
    </Fragment>
  );
}

export default App;
