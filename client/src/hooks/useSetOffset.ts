import {useDispatch} from "react-redux";
import {TOffsetsReducerActionType} from "../types/offsets";
import {RefObject, useEffect} from "react";
import {createWindowEventListeners} from "../utils";

const useSetOffset = (
    offsetCheckoutBlock: RefObject<HTMLElement>,
    actionType: TOffsetsReducerActionType
): void => {

    const dispatch = useDispatch();

    useEffect(() => {
        const onResize = (): void => {
            if (!offsetCheckoutBlock.current) return;

            const offsetWoMargin = offsetCheckoutBlock.current.offsetTop;
            const marginTop = Number(window
                .getComputedStyle(offsetCheckoutBlock.current)
                .getPropertyValue('margin-top')
                .slice(0, -2));
            let offset = offsetWoMargin - marginTop;
            const minValue = 0;
            const maxValue = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            offset = (offset < minValue) ? minValue : offset;
            offset = (offset > maxValue) ? maxValue : offset;

            dispatch({type: actionType, payload: offset});
        }

        return createWindowEventListeners(onResize, ['resize']);
    }, [offsetCheckoutBlock, actionType, dispatch])
}

export default useSetOffset;