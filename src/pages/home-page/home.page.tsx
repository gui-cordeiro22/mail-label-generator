// Dependencies
import { FunctionComponent } from "react";

// Components
import { DefaultLayout } from "@/components/layout";
import { Sidebar } from "@/components/sections/sidebar";
import { Menu, MenuItem } from "@/components/compositions/menu";

// Assets
import logo from "@/assets/png/brand-logo.png";

export const Home: FunctionComponent = () => {
    return (
        <DefaultLayout
            isSidebarOpened
            headerSection={<p>Header</p>}
            sidebarSection={
                <Sidebar
                    isOpened
                    logoImageElement={<img style={{ width: 200 }} src={logo} />}
                    statusIconElement={"<"}
                    menusCompositions={
                        <Menu
                            isSidebarOpened
                            label="Menu"
                            menuItemCompositions={
                                <MenuItem isSidebarOpened label="Teste" />
                            }
                        />
                    }
                    footerMenusCompositions={
                        <p>Todos os direitos reservados</p>
                    }
                />
            }
            handleSidebarOutsideClick={() => console.log("Click")}
            pageContent={<p>Content Page</p>}
        />
    );
};
