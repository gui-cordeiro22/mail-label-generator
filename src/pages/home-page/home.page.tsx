// Dependencies
import { FunctionComponent, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import { DefaultLayout } from "@/components/layout/default-layout";
import { Sidebar } from "@/components/sections/sidebar";
import { Menu, MenuItem } from "@/components/compositions/menu";
import { HomePage } from "@/components/pages/home-page";
import { Header } from "@/components/sections/header";

// Assets
import { images, icons } from "@/assets";

// Utils
import { data } from "./home.mocks";

// Stores
import { useDefaultLayoutStore } from "@/components/layout/default-layout/default-layout.store";

// Hooks
import { useWindowDimensions } from "@/hooks/window-dimensions";
import { Typography } from "@/components/utilities/typography";

export const Home: FunctionComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { state, actions } = useDefaultLayoutStore();

    const { width: windowWidth } = useWindowDimensions();

    const { sidebarIsOpened, sidebarIsExpanded } = state;
    const { clearState, setSidebarIsOpened, setSidebarIsExpanded } = actions;

    useEffect(() => {
        return clearState;
    }, [clearState]);

    const sidebarStatus =
        windowWidth < 1280 ? sidebarIsOpened : sidebarIsExpanded;

    const handleMenuClick = (path: string) => {
        if (windowWidth < 1280) {
            setSidebarIsOpened(false);
        }

        navigate(path);
    };

    const handleSidebarStatus = () => {
        if (windowWidth < 1280) {
            setSidebarIsOpened(!sidebarIsOpened);
        } else {
            setSidebarIsExpanded(!sidebarIsExpanded);
        }
    };

    return (
        <DefaultLayout
            isSidebarOpened={sidebarStatus}
            sidebarSection={
                <Sidebar
                    isOpened={sidebarStatus}
                    logoImageElement={
                        <img className="pdg-logo" src={images.brandLogo} />
                    }
                    statusIconElement={
                        sidebarStatus ? (
                            <img
                                className="pdg-status-icon"
                                src={icons.caretLeft}
                                onClick={handleSidebarStatus}
                            />
                        ) : (
                            <img
                                className="pdg-status-icon"
                                src={icons.caretRight}
                                onClick={handleSidebarStatus}
                            />
                        )
                    }
                    menusCompositions={
                        <Menu
                            isSidebarOpened={sidebarStatus}
                            label="Menu"
                            menuItemCompositions={data.menus.map(
                                (item, index) => (
                                    <MenuItem
                                        key={`menu-item-${index}`}
                                        isSidebarOpened={sidebarStatus}
                                        label={item.label}
                                        isComingSoon={item.isComingSoon}
                                        navigationSource={item.path}
                                        isSelected={
                                            location.pathname === item.path
                                        }
                                        {...(windowWidth < 1280 &&
                                            !item.isComingSoon && {
                                            handleClick: () =>
                                                handleMenuClick(item.path),
                                        })}
                                        {...(windowWidth >= 1280 &&
                                            !item.isComingSoon &&
                                            !item.isExpandable && {
                                            navigationSource: item.path,
                                        })}
                                    />
                                ),
                            )}
                        />
                    }
                    footerMenusCompositions={
                        <MenuItem
                            isSidebarOpened={sidebarStatus}
                            label="Gerador de Etiquetas"
                        />
                    }
                />
            }
            handleSidebarOutsideClick={handleSidebarStatus}
            pageContent={
                <HomePage
                    headerSectionCompositions={
                        <Header
                            titleElement={
                                <Typography
                                    text="Página inicial"
                                    color="black"
                                    variant="titleLarge"
                                />
                            }
                            subtitleElement={
                                <Typography
                                    text="Confira abaixo um relatório de todos os seus clientes cadastrados"
                                    color="black"
                                    variant="bodyMedium"
                                />
                            }
                        />
                    }
                    dashboardSectionCompositions={<p>Dashboard</p>}
                />
            }
        />
    );
};
