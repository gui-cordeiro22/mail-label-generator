// Dependencies
import { lazy } from "react";
import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import { RouteValidator } from "./route-validator";

// Pages
const Home = lazy(() => import("../pages/home-page"));

export const ApplicationRoutes: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RouteValidator component={Home} />} />

                <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
            </Routes>
        </BrowserRouter>
    );
};
