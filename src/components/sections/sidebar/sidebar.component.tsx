// Dependencies
import { FunctionComponent } from "react";

// Components
import { ScreenWidthRender } from "../../utilities/screen-width-render";

// Styles
import {
    Container,
    TopContent,
    MenusCompostionsWrapper,
    StatusIconWrapper,
    ImageElementsWrapper,
    FooterContent,
    InnerContainer,
} from "./sidebar.styles";

// Types
import { SidebarProps } from "./sidebar.types";

export const Sidebar: FunctionComponent<SidebarProps> = ({
    isOpened,
    statusIconElement,
    logoImageElement,
    menusCompositions,
    footerMenusCompositions,
}) => {
    return (
        <Container className="pdg-sidebar" isOpened={isOpened}>
            <InnerContainer isOpened={isOpened}>
                <TopContent>
                    <ScreenWidthRender
                        renderingWidth={1280}
                        actionAfterRenderingWidth="show"
                        content={
                            <ImageElementsWrapper isOpened={isOpened}>
                                <StatusIconWrapper>
                                    {statusIconElement}
                                </StatusIconWrapper>

                                {logoImageElement}
                            </ImageElementsWrapper>
                        }
                    />

                    <MenusCompostionsWrapper>
                        {menusCompositions}
                    </MenusCompostionsWrapper>
                </TopContent>

                <FooterContent>{footerMenusCompositions}</FooterContent>
            </InnerContainer>
        </Container>
    );
};
