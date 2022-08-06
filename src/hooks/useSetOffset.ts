import {useDispatch} from "react-redux";
import {TOffsetsReducerActionType} from "../types/offsets";
import {RefObject, useEffect} from "react";
import {createWindowEventListeners} from "../utils";
import useTypedSelector from "./useTypedSelector";

const useSetOffset = (
    offsetCheckoutBlock: RefObject<HTMLElement>,
    actionType: TOffsetsReducerActionType
): void => {

    const dispatch = useDispatch();
    const bodyScrollbar = useTypedSelector(state => state.bodyScrollbar);

    useEffect(() => {
        const onResize = (): void => {
            if (!offsetCheckoutBlock.current || !bodyScrollbar) return;

            const offsetCheckoutBlockBCR = offsetCheckoutBlock.current.getBoundingClientRect();
            const offsetWoMargin = offsetCheckoutBlockBCR.top + bodyScrollbar.getScrollTop();
            const marginTop = Number(window
                .getComputedStyle(offsetCheckoutBlock.current)
                .getPropertyValue('margin-top')
                .slice(0, -2));

            let offset = offsetWoMargin - marginTop;

            const minValue = 0;
            const maxValue = bodyScrollbar.getScrollHeight() - document.documentElement.clientHeight;
            offset = (offset < minValue) ? minValue : offset;
            offset = (offset > maxValue) ? maxValue : offset;

            dispatch({type: actionType, payload: offset});
        }

        return createWindowEventListeners(onResize, ['resize']);
    }, [offsetCheckoutBlock, actionType, dispatch, bodyScrollbar])
}

export default useSetOffset;