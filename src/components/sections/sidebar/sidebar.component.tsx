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
import { ConditionallyRender } from "@/components/utilities/conditionally-render";

export const Sidebar: FunctionComponent<SidebarProps> = ({
    isOpened,
    statusIconElement,
    handleClick,
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
                                <StatusIconWrapper onClick={handleClick}>
                                    {statusIconElement}
                                </StatusIconWrapper>

                                {logoImageElement}
                            </ImageElementsWrapper>
                        }
                    />

                    <ConditionallyRender
                        shouldRender={!!isOpened}
                        content={
                            <MenusCompostionsWrapper>
                                {menusCompositions}
                            </MenusCompostionsWrapper>
                        }
                    />
                </TopContent>

                <ConditionallyRender
                    shouldRender={!!isOpened}
                    content={
                        <FooterContent>{footerMenusCompositions}</FooterContent>
                    }
                />
            </InnerContainer>
        </Container>
    );
};
