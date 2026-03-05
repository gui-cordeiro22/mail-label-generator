// Dependencies
import { css } from "styled-components";

export const pageGutter = css`
    padding: 24px;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
        max-width: 677px;
        padding: 40px;
    }

    @media (min-width: 1024px) {
        max-width: 972px;
        padding: 80px 40px;
    }

    @media (min-width: 1366px) {
        max-width: 1226px;
        padding: 80px 76px;
    }

    @media (min-width: 1920px) {
        max-width: 1440px;
    }
`;
