// Dependencies
import { Fragment, FunctionComponent, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import { DefaultLayout } from "@/components/layout/default-layout";
import { ConditionallyRender } from "@/components/utilities/conditionally-render";
import { Typography } from "@/components/utilities/typography";
import { Sidebar } from "@/components/sections/sidebar";
import { Menu, MenuItem } from "@/components/compositions/menu";
import { ClientsPage } from "@/components/pages/clients-page";
import { MobileHeader } from "@/components/sections/mobile-header";
import { Headline } from "@/components/sections/headline";
import {
    CustomersList,
    CustomersListItem,
} from "@/components/compositions/customers-list";

// Assets
import { images, icons } from "@/assets";

// Stores
import { useDefaultLayoutStore } from "@/components/layout/default-layout/default-layout.store";

// Utils
import { menuData } from "@/components/compositions/menu/menu.data";
import { customersPageData } from "./customers.mock";

// Hooks
import { useWindowDimensions } from "@/hooks/window-dimensions";

// Helpers
import { formattedCepBuilder } from "./customers.helpers";

export const Customers: FunctionComponent = () => {
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
            mobileHeaderSection={
                <MobileHeader
                    logoElement={
                        <img className="pdg-logo" src={images.brandLogo} />
                    }
                    navigationLinksCompositions={
                        <Fragment>
                            <ConditionallyRender
                                shouldRender={windowWidth > 768}
                                content={menuData.menus.links.map(
                                    (item, index) => (
                                        <Typography
                                            key={`navigation-link-${index}`}
                                            text={item.label}
                                            color="black"
                                            variant="bodyMedium"
                                        />
                                    ),
                                )}
                            />

                            <ConditionallyRender
                                shouldRender={windowWidth <= 768}
                                content={<img src={icons.mobileMenuIcon} />}
                            />
                        </Fragment>
                    }
                />
            }
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
                            label={menuData.menus.label}
                            menuItemCompositions={menuData.menus.links.map(
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
                        <Typography
                            text={menuData.footer.message}
                            color="black"
                            variant="bodySmall"
                        />
                    }
                />
            }
            pageContent={
                <ClientsPage
                    headlineCompositions={
                        <Headline
                            titleElement={
                                <Typography
                                    text={customersPageData.title}
                                    color="black"
                                    variant="titleLarge"
                                />
                            }
                            subtitleElement={
                                <Typography
                                    element="p"
                                    text={customersPageData.description}
                                    color="black"
                                    variant="bodyMedium"
                                />
                            }
                        />
                    }
                    clientsListSection={
                        <CustomersList
                            customersListItemComposition={customersPageData.mock.customers.map(
                                (item, index) => (
                                    <CustomersListItem
                                        key={`customer-list-item-${index}`}
                                        customerNameElement={
                                            <Typography
                                                text={item.name}
                                                color="black"
                                                variant="labelMedium"
                                            />
                                        }
                                        customerAddressElement={
                                            <Typography
                                                text={`Endereço: ${item.address} - ${item.neighborhood}, ${item.city} - ${item.uf}, CEP: ${formattedCepBuilder(item.cep)}`}
                                                color="black"
                                                variant="microcopy"
                                            />
                                        }
                                    />
                                ),
                            )}
                        />
                    }
                />
            }
            handleSidebarOutsideClick={handleSidebarStatus}
        />
    );
};
