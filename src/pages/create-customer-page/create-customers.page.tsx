// Dependencies
import { Fragment, FunctionComponent, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import { DefaultLayout } from "@/components/layout/default-layout";
import { ConditionallyRender } from "@/components/utilities/conditionally-render";
import { Typography } from "@/components/utilities/typography";
import { Sidebar } from "@/components/sections/sidebar";
import { Menu, MenuItem } from "@/components/compositions/menu";
import { CreateCustomersPage } from "@/components/pages/create-customers-page";
import { MobileHeader } from "@/components/sections/mobile-header";
import { Headline } from "@/components/sections/headline";
import { Icon } from "@/components/elements/icon";
import { Chip } from "@/components/elements/chip";
import { Input } from "@/components/elements/input";

// Assets
import { images } from "@/assets";

// Stores
import { useDefaultLayoutStore } from "@/components/layout/default-layout/default-layout.store";

// Utils
import { menuData } from "@/components/compositions/menu/menu.data";
import { createCustomersPageData } from "./create-customers.mock";

// Hooks
import { useWindowDimensions } from "@/hooks/window-dimensions";
import { Form } from "@/components/compositions/form";
import { RegistrationForm } from "@/components/sections/registration-form";
import { Button } from "@/components/elements/button";

export const CreateCustomers: FunctionComponent = () => {
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
                <CreateCustomersPage
                    headlineCompositions={
                        <Headline
                            titleElement={
                                <Typography
                                    text={createCustomersPageData.title}
                                    color="black"
                                    variant="titleLarge"
                                />
                            }
                            subtitleElement={
                                <Typography
                                    element="p"
                                    text={createCustomersPageData.description}
                                    color="black"
                                    variant="bodyMedium"
                                />
                            }
                        />
                    }
                    registrationFormSection={
                        <RegistrationForm
                            formCompositions={
                                <Form
                                    inputsElements={
                                        <Fragment>
                                            <Input
                                                placeholder="Nome do cliente"
                                                labelElement={
                                                    <Typography
                                                        text="Nome do cliente"
                                                        color="gray300"
                                                        variant="microcopy"
                                                    />
                                                }
                                            />

                                            <Input
                                                placeholder="Endereço"
                                                labelElement={
                                                    <Typography
                                                        text="Endereço"
                                                        color="gray300"
                                                        variant="microcopy"
                                                    />
                                                }
                                            />

                                            <Input
                                                placeholder="CEP"
                                                labelElement={
                                                    <Typography
                                                        text="CEP"
                                                        color="gray300"
                                                        variant="microcopy"
                                                    />
                                                }
                                            />

                                            <Input
                                                placeholder="Bairro"
                                                labelElement={
                                                    <Typography
                                                        text="Bairro"
                                                        color="gray300"
                                                        variant="microcopy"
                                                    />
                                                }
                                            />

                                            <Input
                                                placeholder="Cidade"
                                                labelElement={
                                                    <Typography
                                                        text="Cidade"
                                                        color="gray300"
                                                        variant="microcopy"
                                                    />
                                                }
                                            />

                                            <Input
                                                placeholder="Estado"
                                                labelElement={
                                                    <Typography
                                                        text="Estado"
                                                        color="gray300"
                                                        variant="microcopy"
                                                    />
                                                }
                                            />
                                        </Fragment>
                                    }
                                    submitButtonElement={
                                        <Button
                                            labelElement={
                                                <Typography
                                                    text="Cadastrar novo cliente"
                                                    color="white"
                                                    variant="labelSmall"
                                                />
                                            }
                                            variant="dark-cta"
                                            isComingSoon={false}
                                        />
                                    }
                                />
                            }
                        />
                    }
                />
            }
            handleSidebarOutsideClick={handleSidebarStatus}
        />
    );
};
