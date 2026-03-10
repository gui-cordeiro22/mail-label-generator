// Dependencies
import { FunctionComponent, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import { DefaultLayout } from "@/components/layout/default-layout";
import { Sidebar } from "@/components/sections/sidebar";
import { Menu, MenuItem } from "@/components/compositions/menu";

// Assets
import { images, icons } from "@/assets";

// Utils
import { data } from "./home.mocks";

// Stores
import { useDefaultLayoutStore } from "@/components/layout/default-layout/default-layout.store";

// Hooks
import { useWindowDimensions } from "@/hooks/window-dimensions";

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
            headerSection={<p>Header</p>}
            sidebarSection={
                <Sidebar
                    isOpened={sidebarStatus}
                    logoImageElement={
                        <img style={{ width: 200 }} src={images.brandLogo} />
                    }
                    statusIconElement={
                        sidebarStatus ? (
                            <img style={{ width: 16 }} src={icons.caretLeft} />
                        ) : (
                            <img style={{ width: 16 }} src={icons.caretRight} />
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
                            label="Capas de Gaiola | Vera Brito"
                        />
                    }
                />
            }
            handleSidebarOutsideClick={handleSidebarStatus}
            pageContent={<p>Content Page</p>}
        />
    );
};
