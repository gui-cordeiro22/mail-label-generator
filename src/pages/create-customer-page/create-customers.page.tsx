// Dependencies
import { Fragment, FunctionComponent, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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
import { Form } from "@/components/compositions/form";
import { RegistrationForm } from "@/components/sections/registration-form";
import { Button } from "@/components/elements/button";

// Assets
import { images } from "@/assets";

// Types
import { CreateCustomerCustomerData } from "./create-customers.types";

// Stores
import { useDefaultLayoutStore } from "@/components/layout/default-layout/default-layout.store";
import { useCreateCustomerStores } from "./create-customers.stores";

// Utils
import { menuData } from "@/components/compositions/menu/menu.data";
import { createCustomersPageData } from "./create-customers.mock";

// Hooks
import { useWindowDimensions } from "@/hooks/window-dimensions";

export const CreateCustomers: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { state, actions } = useDefaultLayoutStore();
  const { width: windowWidth } = useWindowDimensions();

  const { actions: createCustomerActions } = useCreateCustomerStores();

  const { createCustomer } = createCustomerActions;

  const { sidebarIsOpened, sidebarIsExpanded } = state;
  const { clearState, setSidebarIsOpened, setSidebarIsExpanded } = actions;

  const { register, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      address: "",
      cep: "",
      neighborhood: "",
      city: "",
      uf: "",
    },
  });

  const handleCustomerCreate = async (
    customerData: CreateCustomerCustomerData,
  ) => {
    await createCustomer(customerData);
  };

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
                  navigationSource={!item.isComingSoon ? item.path : undefined}
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
                  handleSubmitForm={handleSubmit(handleCustomerCreate)}
                  inputsElements={
                    <Fragment>
                      <Input
                        {...register("name")}
                        type="text"
                        placeholder={
                          createCustomersPageData.registrationForm
                            .nameInputLabel
                        }
                        labelElement={
                          <Typography
                            text={
                              createCustomersPageData.registrationForm
                                .nameInputLabel
                            }
                            color="gray300"
                            variant="microcopy"
                          />
                        }
                      />

                      <Input
                        {...register("address")}
                        type="text"
                        placeholder={
                          createCustomersPageData.registrationForm
                            .addressInputLabel
                        }
                        labelElement={
                          <Typography
                            text={
                              createCustomersPageData.registrationForm
                                .addressInputLabel
                            }
                            color="gray300"
                            variant="microcopy"
                          />
                        }
                      />

                      <Input
                        {...register("cep")}
                        type="text"
                        placeholder={
                          createCustomersPageData.registrationForm.cepInputLabel
                        }
                        labelElement={
                          <Typography
                            text={
                              createCustomersPageData.registrationForm
                                .cepInputLabel
                            }
                            color="gray300"
                            variant="microcopy"
                          />
                        }
                      />

                      <Input
                        {...register("neighborhood")}
                        type="text"
                        placeholder={
                          createCustomersPageData.registrationForm
                            .neighborhoodInputLabel
                        }
                        labelElement={
                          <Typography
                            text={
                              createCustomersPageData.registrationForm
                                .neighborhoodInputLabel
                            }
                            color="gray300"
                            variant="microcopy"
                          />
                        }
                      />

                      <Input
                        {...register("city")}
                        type="text"
                        placeholder={
                          createCustomersPageData.registrationForm
                            .cityInputLabel
                        }
                        labelElement={
                          <Typography
                            text={
                              createCustomersPageData.registrationForm
                                .cityInputLabel
                            }
                            color="gray300"
                            variant="microcopy"
                          />
                        }
                      />

                      <Input
                        {...register("uf")}
                        type="text"
                        placeholder={
                          createCustomersPageData.registrationForm.ufInputLabel
                        }
                        labelElement={
                          <Typography
                            text={
                              createCustomersPageData.registrationForm
                                .ufInputLabel
                            }
                            color="gray300"
                            variant="microcopy"
                          />
                        }
                      />
                    </Fragment>
                  }
                  submitButtonElement={
                    <Button
                      type="submit"
                      labelElement={
                        <Typography
                          text={
                            createCustomersPageData.registrationForm.buttonLabel
                          }
                          color="white"
                          variant="labelMedium"
                        />
                      }
                      variant="dark-cta"
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
