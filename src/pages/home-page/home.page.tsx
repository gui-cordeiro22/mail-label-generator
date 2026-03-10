// Dependencies
import { FunctionComponent } from "react";

// Components
import { Sidebar } from "@/components/sections/sidebar";

// Assets
import logo from "../../assets/png/brand-logo.png";

export const Home: FunctionComponent = () => {
    return (
        <div>
            <Sidebar
                isOpened
                statusIconElement={<p>{"<"}</p>}
                logoImageElement={<img src={logo} />}
                menusCompositions={
                    <ul>
                        <li>Teste</li>
                        <li>Teste</li>
                        <li>Teste</li>
                        <li>Teste</li>
                    </ul>
                }
                footerMenusCompositions
            />
        </div>
    );
};
