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
import { Icon } from "@/components/elements/icon";
import { Chip } from "@/components/elements/chip";

// Assets
import { images } from "@/assets";

// Utils
import { menuData } from "@/components/compositions/menu/menu.data";

// Stores
import { useDefaultLayoutStore } from "@/components/layout/default-layout/default-layout.store";
import { useCustomersChartDataStores } from "./home.stores";

// Hooks
import { useWindowDimensions } from "@/hooks/window-dimensions";

export const Home: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { state, actions } = useDefaultLayoutStore();

  const { state: customersChartDataState, actions: customersChartDataActions } =
    useCustomersChartDataStores();

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
                  text="Confira abaixo um relatório completo com todos os clientes cadastrados em seu sistema,nesta seção você poderá visualizar de forma organizada as informações registradas, facilitando a análise, o acompanhamento e o controle dos dados dos seus clientes."
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
                    shouldRender={!!chartData?.data?.length}
                    content={<CustomerChart data={chartData?.data ?? []} />}
                  />

                  <ConditionallyRender
                    shouldRender={!chartData?.data?.length}
                    content={
                      <CustomerChartEmptyState
                        illustrationSource={images.searchingOnFolders}
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
