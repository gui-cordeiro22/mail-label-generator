// Dependencies
import { Fragment } from "react/jsx-runtime";

// Styles
import { GlobalStyle } from "./styles/global";

// Routes
import { ApplicationRoutes } from "./routes";
import { handleCreateRegister } from "../test-file";

function App() {
    handleCreateRegister();
    return (
        <Fragment>
            <GlobalStyle />
            <ApplicationRoutes />
        </Fragment>
    );
}

export default App;
