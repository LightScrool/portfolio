import {useDispatch} from "react-redux";
import {TOffsetsReducerActionType} from "../types/offsets";
import {RefObject, useEffect} from "react";

const useSetOffset = (offsetCheckoutBlock: RefObject<any>, actionType: TOffsetsReducerActionType): void => {
    const dispatch = useDispatch();

    useEffect(() => {
        const onResize = (): void => {
            if (!offsetCheckoutBlock.current) return;
            const offset = offsetCheckoutBlock.current.offsetTop;
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