// Types
import { Icons, Images } from "./assets.types";

// Images
import logo from "./images/png/brand-logo.png";
import searchingOnFolders from "./images/svg/customers-chart-empty-state.svg";

// Icons
import { ReactComponent as caretLeft } from "./icons/caret-left";
import { ReactComponent as caretRight } from "./icons/caret-right";
import { ReactComponent as dotsThreeVertical } from "./icons/dots-three-vertical";
import { ReactComponent as mobileMenu } from "./icons/menu";
import { ReactComponent as spinner } from "./icons/spinner";
import { ReactComponent as whatsappIcon } from "./icons/whatsapp";
import { ReactComponent as mapPin } from "./icons/map-pin";
import { ReactComponent as customersList } from "./icons/customers-list";
import { ReactComponent as searchIcon } from "./icons/list-magnifying-glass";

export const images: Images = {
    brandLogo: logo,
    searchingOnFolders: searchingOnFolders,
};

export const icons: Icons = {
    whatsappIcon: { source: whatsappIcon, type: "fill" },
    spinner: { source: spinner, type: "stroke" },
    caretLeft: { source: caretLeft, type: "fill" },
    caretRight: { source: caretRight, type: "fill" },
    mobileMenu: { source: mobileMenu, type: "stroke" },
    dotsThreeVertical: { source: dotsThreeVertical, type: "stroke" },
    mapPin: { source: mapPin, type: "fill" },
    customersList: { source: customersList, type: "fill" },
    searchIcon: { source: searchIcon, type: "fill" },
};
