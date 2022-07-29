import {useDispatch} from "react-redux";
import {TOffsetsReducerActionType} from "../types/offsets";
import {RefObject, useEffect} from "react";

const useSetOffset = (offsetCheckoutBlock: RefObject<any>, actionType: TOffsetsReducerActionType): void => {
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
        window.addEventListener('resize', onResize);
        onResize();

        return function () {
            window.removeEventListener('resize', onResize);
        }
    }, [])
}

export default useSetOffset;