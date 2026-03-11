// Dependencies
import { Fragment, FunctionComponent, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import { ConditionallyRender } from "@/components/utilities/conditionally-render";
import { DefaultLayout } from "@/components/layout/default-layout";
import { Sidebar } from "@/components/sections/sidebar";
import { Menu, MenuItem } from "@/components/compositions/menu";
import { HomePage } from "@/components/pages/home-page";
import { Headline } from "@/components/sections/headline";
import { Typography } from "@/components/utilities/typography";
import { MobileHeader } from "@/components/sections/mobile-header";
import { DashboardSection } from "@/components/sections/dashboard";
import { CustomerChart } from "@/components/compositions/customer-chart";
import { CustomerChartEmptyState } from "@/components/compositions/customer-chart-empty-state";

// Assets
import { images, icons } from "@/assets";

// Utils
import { data } from "./home.mocks";

// Stores
import { useDefaultLayoutStore } from "@/components/layout/default-layout/default-layout.store";
import { useCustomersChartDataStores } from "./home.stores";

// Hooks
import { useWindowDimensions } from "@/hooks/window-dimensions";

export const Home: FunctionComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { state, actions } = useDefaultLayoutStore();

    const {
        state: customersChartDataState,
        actions: customersChartDataActions,
    } = useCustomersChartDataStores();

    const { width: windowWidth } = useWindowDimensions();

    const { sidebarIsOpened, sidebarIsExpanded } = state;
    const { clearState, setSidebarIsOpened, setSidebarIsExpanded } = actions;

    const { chartData } = customersChartDataState;
    const { fetchCustomersData } = customersChartDataActions;

    useEffect(() => {
        fetchCustomersData();
    }, []);

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
                                content={data.menus.links.map((item, index) => (
                                    <Typography
                                        key={`navigation-link-${index}`}
                                        text={item.label}
                                        color="black"
                                        variant="bodyMedium"
                                    />
                                ))}
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
                            label={data.menus.label}
                            menuItemCompositions={data.menus.links.map(
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
                            text={data.footer.message}
                            color="black"
                            variant="bodySmall"
                        />
                    }
                />
            }
            pageContent={
                <HomePage
                    headerSectionCompositions={
                        <Headline
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
                    dashboardSectionCompositions={
                        <DashboardSection
                            customersChartCompositions={
                                <Fragment>
                                    <ConditionallyRender
                                        shouldRender={!!chartData?.data}
                                        content={
                                            <CustomerChart
                                                data={chartData?.data ?? []}
                                            />
                                        }
                                    />

                                    <ConditionallyRender
                                        shouldRender={!chartData?.data}
                                        content={
                                            <CustomerChartEmptyState
                                                illustrationSource={
                                                    images.searchingOnFolders
                                                }
                                                titleElement={
                                                    <Typography
                                                        text="Nenhum resultado encontrado por aqui..."
                                                        color="info300"
                                                        variant="labelLarge"
                                                    />
                                                }
                                                descriptionElement={
                                                    <Typography
                                                        text="Ao cadastrar clientes, será exibido um dashboard nesta seção."
                                                        color="info300"
                                                        variant="bodySmall"
                                                    />
                                                }
                                            />
                                        }
                                    />
                                </Fragment>
                            }
                        />
                    }
                />
            }
            handleSidebarOutsideClick={handleSidebarStatus}
        />
    );
};
