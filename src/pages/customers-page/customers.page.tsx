// Dependencies
import {
  Fragment,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
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
import { Input } from "@/components/elements/input";
import { Chip } from "@/components/elements/chip";
import { Button } from "@/components/elements/button";

// Assets
import { images } from "@/assets";

// Stores
import { useDefaultLayoutStore } from "@/components/layout/default-layout/default-layout.store";
import { useCustomersListStores } from "./customers.stores";

// Utils
import { menuData } from "@/components/compositions/menu/menu.data";
import { customersPageData } from "./customers.mock";

// Hooks
import { useWindowDimensions } from "@/hooks/window-dimensions";

// Helpers
import { formattedCepBuilder } from "@/utils/helpers/format-cep";

export const Customers: FunctionComponent = () => {
  const [queryState, setQueryState] = useState("");

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const { state, actions } = useDefaultLayoutStore();
  const { width: windowWidth } = useWindowDimensions();

  const customersListData = useCustomersListStores(
    (state) => state.customersListData.data,
  );

  const deleteCustomer = useCustomersListStores(
    (state) => state.deleteCustomer,
  );

  const fetchCustomers = useCustomersListStores(
    (state) => state.fetchCustomers,
  );

  const customersListLenght = (customersListData ?? []).filter((customer) =>
    customer.name.toLowerCase().includes(queryState.toLowerCase()),
  ).length;

  const { sidebarIsOpened, sidebarIsExpanded } = state;
  const { clearState, setSidebarIsOpened, setSidebarIsExpanded } = actions;

  const handleDeleteCustomer = async (id: number) => {
    await deleteCustomer(id);
  };

  useEffect(() => {
    fetchCustomers();
  }, [customersListData]);

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
          logoElement={<img className="pdg-logo" src={images.brandLogo} />}
          navigationLinksCompositions={
            <Fragment>
              <ConditionallyRender
                shouldRender={windowWidth > 768}
                content={menuData.menus.links.map((item, index) => (
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
                content={<Icon variant="mobileMenu" color="black" />}
              />
            </Fragment>
          }
        />
      }
      sidebarSection={
        <Sidebar
          isOpened={sidebarStatus}
          handleClick={handleSidebarStatus}
          logoImageElement={<img className="pdg-logo" src={images.brandLogo} />}
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
              menuItemCompositions={menuData.menus.links.map((item, index) => (
                <MenuItem
                  key={`menu-item-${index}`}
                  isSidebarOpened={sidebarStatus}
                  label={item.label}
                  isComingSoon={item.isComingSoon}
                  handleClick={() =>
                    !item.isComingSoon ? navigate(item.path) : undefined
                  }
                  isSelected={location.pathname === item.path}
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
                    handleClick: () => handleMenuClick(item.path),
                  })}
                  {...(windowWidth >= 1280 &&
                    !item.isComingSoon &&
                    !item.isExpandable && {
                    navigationSource: item.path,
                  })}
                />
              ))}
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
                        text={`${customersListLenght}
                                                `}
                        color="gray500"
                        variant="display"
                      />
                    }
                    labelElement={
                      <Typography
                        text={
                          customersListLenght > 1
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
                        size={windowWidth >= 768 ? 40 : 32}
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
                            if (timeoutRef.current) {
                              clearTimeout(timeoutRef.current);
                            }

                            timeoutRef.current = setTimeout(() => {
                              setQueryState(e.target.value);
                            }, 800);
                          }}
                        />

                        <Typography
                          text={
                            customersListLenght <= 0
                              ? "Nenhum resultado encontrado..."
                              : customersListLenght > 1
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
                        size={windowWidth >= 768 ? 40 : 32}
                      />
                    }
                  />
                </Fragment>
              }
              customersListItemComposition={(customersListData ?? [])
                .filter((item) =>
                  item.name.toLowerCase().includes(queryState.toLowerCase()),
                )
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <CustomersListItem
                    key={`customer-list-item-${item.id}`}
                    handleClick={() => {
                      navigate(`/editar-cliente/${item.id}`);
                    }}
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
                    actionMenuElement={
                      <Fragment>
                        <Button
                          labelElement={
                            <Typography
                              text="Editar"
                              color="info300"
                              variant="labelMedium"
                            />
                          }
                          variant="link"
                          handleClick={(e) => {
                            e?.stopPropagation();

                            navigate(`/editar-cliente/${item.id}`);
                          }}
                        />

                        <Button
                          labelElement={
                            <Typography
                              text="Excluir"
                              color="danger300"
                              variant="labelMedium"
                            />
                          }
                          variant="link"
                          handleClick={(e) => {
                            e?.stopPropagation();

                            handleDeleteCustomer(Number(item.id));
                          }}
                        />
                      </Fragment>
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
