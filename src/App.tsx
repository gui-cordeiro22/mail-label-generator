// Dependencies
import { Fragment } from "react/jsx-runtime";

// Styles
import { GlobalStyle } from "./styles/global";

// Routes
import { ApplicationRoutes } from "./routes";

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <ApplicationRoutes />
        </Fragment>
    );
}

export default App;
