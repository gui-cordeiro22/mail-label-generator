// Dependencies
import { FunctionComponent } from "react";

// Components
import { Overlay } from "@/components/elements/overlay";
import { ScreenWidthRender } from "@/components/utilities/screen-width-render";
import { ConditionallyRender } from "@/components/utilities/conditionally-render";

// Types
import { DefaultLayoutProps } from "./default-layout.types";

// Styles
import {
    Container,
    PageContentWrapper,
    SidebarAndPageWrapper,
} from "./default-layout.styles";

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({
    isSidebarOpened,
    sidebarSection,
    mobileHeaderSection,
    pageContent,
    handleSidebarOutsideClick,
}) => {
    return (
        <Container>
            <ScreenWidthRender
                renderingWidth={1280}
                actionAfterRenderingWidth="hide"
                content={mobileHeaderSection}
            />

            <SidebarAndPageWrapper>
                {sidebarSection}

                <PageContentWrapper isSidebarOpened={isSidebarOpened}>
                    <ConditionallyRender
                        shouldRender={isSidebarOpened}
                        content={
                            <ScreenWidthRender
                                renderingWidth={1280}
                                actionAfterRenderingWidth="hide"
                                content={
                                    <Overlay
                                        handleOutsideClick={
                                            handleSidebarOutsideClick
                                        }
                                    />
                                }
                            />
                        }
                    />

                    {pageContent}
                </PageContentWrapper>
            </SidebarAndPageWrapper>
        </Container>
    );
};
