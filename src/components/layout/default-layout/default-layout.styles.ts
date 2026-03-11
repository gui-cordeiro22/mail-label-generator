// Dependencies
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const SidebarAndPageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 100%;
`;

type PageContentWrapperStyleProps = {
    isSidebarOpened: boolean;
};

export const PageContentWrapper = styled.div<PageContentWrapperStyleProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
`;
