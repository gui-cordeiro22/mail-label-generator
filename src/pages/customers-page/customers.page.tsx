// Dependencies
import { Fragment, FunctionComponent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import { DefaultLayout } from "@/components/layout/default-layout";
import { ConditionallyRender } from "@/components/utilities/conditionally-render";
import { Typography } from "@/components/utilities/typography";
import { Sidebar } from "@/components/sections/sidebar";
import { Menu, MenuItem } from "@/components/compositions/menu";
import { CustomersPage } from "@/components/pages/customers-page";
import { MobileHeader } from "@/components/sections/mobile-header";
import { Headline } from "@/components/sections/headline";
import {
    CustomersList,
    CustomersListItem,
} from "@/components/compositions/customers-list";
import { Icon } from "@/components/elements/icon";
import { Card } from "@/components/compositions/card";

// Assets
import { images } from "@/assets";

// Stores
import { useDefaultLayoutStore } from "@/components/layout/default-layout/default-layout.store";

// Utils
import { menuData } from "@/components/compositions/menu/menu.data";
import { customersPageData } from "./customers.mock";

// Hooks
import { useWindowDimensions } from "@/hooks/window-dimensions";

// Helpers
import { formattedCepBuilder } from "./customers.helpers";
import { Input } from "@/components/elements/input";
import { Chip } from "@/components/elements/chip";

export const Customers: FunctionComponent = () => {
    const [queryState, setQueryState] = useState("");

    const customersListLenght = (customersPageData.mock.customers ?? []).filter(
        (customer) =>
            customer.name.toLowerCase().includes(queryState.toLowerCase()),
    ).length;

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
                                content={
                                    <Icon variant="mobileMenu" color="black" />
                                }
                            />
                        </Fragment>
                    }
                />
            }
            sidebarSection={
                <Sidebar
                    isOpened={sidebarStatus}
                    handleClick={handleSidebarStatus}
                    logoImageElement={
                        <img className="pdg-logo" src={images.brandLogo} />
                    }
                    statusIconElement={
                        <Icon
                            hasCursorPointer
                            variant={sidebarStatus ? "caretLeft" : "caretRight"}
                            color="warning500"
                            size={16}
                        />
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
                                        navigationSource={
                                            !item.isComingSoon
                                                ? item.path
                                                : undefined
                                        }
                                        isSelected={
                                            location.pathname === item.path
                                        }
                                        chipElement={
                                            <Chip
                                                labelElement={
                                                    <Typography
                                                        text="Em breve..."
                                                        variant="microcopy"
                                                        color="gray300"
                                                    />
                                                }
                                            />
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
                <CustomersPage
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
                            cardsReportCompositions={
                                <Fragment>
                                    <Card
                                        variant="report"
                                        content={
                                            <Typography
                                                text={`${
                                                    customersPageData.mock
                                                        .customers.length
                                                }
                                                `}
                                                color="gray500"
                                                variant="display"
                                            />
                                        }
                                        labelElement={
                                            <Typography
                                                text={
                                                    customersPageData.mock
                                                        .customers.length > 1
                                                        ? "Clientes cadastrados"
                                                        : "Cliente cadastrado"
                                                }
                                                color="gray300"
                                                variant="bodyMedium"
                                            />
                                        }
                                        iconElement={
                                            <Icon
                                                variant="customersList"
                                                color="gray200"
                                                size={
                                                    windowWidth >= 768 ? 40 : 32
                                                }
                                            />
                                        }
                                    />

                                    <Card
                                        variant="input"
                                        labelElement={
                                            <Typography
                                                text="Pesquise seus clientes pelo nome"
                                                color="gray500"
                                                variant="bodyMedium"
                                            />
                                        }
                                        content={
                                            <Fragment>
                                                <Input
                                                    placeholder="Digite o nome..."
                                                    handleChange={(e) => {
                                                        setTimeout(() => {
                                                            setQueryState(
                                                                e.target.value,
                                                            );
                                                        }, 1000);
                                                    }}
                                                />

                                                <Typography
                                                    text={
                                                        customersListLenght <= 0
                                                            ? "Nenhum resultado encontrado..."
                                                            : customersListLenght >
                                                                1
                                                                ? `Exibindo ${customersListLenght} resultados.`
                                                                : `Exibindo ${customersListLenght} resultado.`
                                                    }
                                                    variant="microcopy"
                                                    color="gray300"
                                                />
                                            </Fragment>
                                        }
                                        iconElement={
                                            <Icon
                                                variant="searchIcon"
                                                color="gray200"
                                                size={
                                                    windowWidth >= 768 ? 40 : 32
                                                }
                                            />
                                        }
                                    />
                                </Fragment>
                            }
                            customersListItemComposition={(
                                customersPageData.mock.customers ?? []
                            )
                                .filter((item) =>
                                    item.name
                                        .toLowerCase()
                                        .includes(queryState.toLowerCase()),
                                )
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((item, index) => (
                                    <CustomersListItem
                                        key={`customer-list-item-${index}`}
                                        handleClick={() =>
                                            navigate(`/clientes/${item.id}`)
                                        }
                                        customerNameElement={
                                            <Typography
                                                element="p"
                                                text={item.name}
                                                color="gray500"
                                                variant="labelMedium"
                                            />
                                        }
                                        customerAddressElement={
                                            <Typography
                                                element="p"
                                                text={`Endereço: ${item.address} - ${item.neighborhood}, ${item.city} - ${item.uf.toUpperCase()}, CEP: ${formattedCepBuilder(item.cep)}`}
                                                color="gray300"
                                                variant="microcopy"
                                            />
                                        }
                                        contextMenuIconElement={
                                            <Icon
                                                variant="dotsThreeVertical"
                                                color="gray300"
                                                size={32}
                                                handleClick={(event) => {
                                                    event?.stopPropagation();

                                                    console.log(
                                                        "Botão que abrirá o menu de contexto de um determinado cliente, onde oferecerá as opções de: Editar ou excluir esse cliente.",
                                                    );
                                                }}
                                            />
                                        }
                                    />
                                ))}
                        />
                    }
                />
            }
            handleSidebarOutsideClick={handleSidebarStatus}
        />
    );
};
