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
import { ReactComponent as scissorsIcon } from "./icons/scissors";
import { ReactComponent as truck } from "./icons/truck";
import { ReactComponent as closedPackage } from "./icons/package";

export const images: Images = {
  brandLogo: logo,
  searchingOnFolders: searchingOnFolders,
};

export const icons: Icons = {
  whatsappIcon: { source: whatsappIcon },
  spinner: { source: spinner },
  caretLeft: { source: caretLeft },
  caretRight: { source: caretRight },
  mobileMenu: { source: mobileMenu },
  dotsThreeVertical: { source: dotsThreeVertical },
  mapPin: { source: mapPin },
  customersList: { source: customersList },
  searchIcon: { source: searchIcon },
  scissorsIcon: { source: scissorsIcon },
  truck: { source: truck },
  closedPackage: { source: closedPackage },
};
