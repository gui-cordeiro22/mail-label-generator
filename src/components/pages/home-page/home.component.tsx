// Dependencies
import { Fragment, FunctionComponent } from "react";

// Types
import { HomePageProps } from "./home.types";

export const HomePage: FunctionComponent<HomePageProps> = ({
    headerSectionCompositions,
    dashboardSectionCompositions,
}) => {
    return (
        <Fragment>
            {headerSectionCompositions}

            {dashboardSectionCompositions}
        </Fragment>
    );
};
