// Dependencies
import { useCallback } from "react";
import { useImmer } from "use-immer";

// Types
import {
    DefaultLayoutStore,
    DefaultLayoutState,
    DefaultLayoutActions,
} from "./default-layout.types";

const defaultState: DefaultLayoutState = {
    sidebarIsOpened: false,
    sidebarIsExpanded: true,
};

export const useDefaultLayoutStore = (): DefaultLayoutStore => {
    const [state, setState] = useImmer<DefaultLayoutState>(defaultState);

    const clearState: DefaultLayoutActions["clearState"] = useCallback(() => {
        setState(defaultState);
    }, [setState]);

    const setSidebarIsOpened: DefaultLayoutActions["setSidebarIsOpened"] =
        useCallback(
            (isOpened: boolean) => {
                setState((draft: DefaultLayoutState) => {
                    draft.sidebarIsOpened = isOpened;
                });
            },
            [setState],
        );

    const setSidebarIsExpanded: DefaultLayoutActions["setSidebarIsExpanded"] =
        useCallback(
            (isExpanded: boolean) => {
                setState((draft: DefaultLayoutState) => {
                    draft.sidebarIsExpanded = isExpanded;
                });
            },
            [setState],
        );

    return {
        state,
        actions: {
            clearState,
            setSidebarIsOpened,
            setSidebarIsExpanded,
        },
    };
};
