// Dependencies
import { FunctionComponent, useCallback, useEffect } from "react";

// Types
import { OverlayProps } from "./overlay.types";

// Styles
import { Container } from "./overlay.styles";

export const Overlay: FunctionComponent<OverlayProps> = ({
    handleOutsideClick,
}) => {
    const scrollYWhenOpeningComponent = window.scrollY;

    const handleScroll = useCallback(() => {
        window.scrollTo({ top: scrollYWhenOpeningComponent });
    }, [scrollYWhenOpeningComponent]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return <Container className="pdg-overlay" onClick={handleOutsideClick} />;
};
