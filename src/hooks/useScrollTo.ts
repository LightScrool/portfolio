import useTypedSelector from "./useTypedSelector";

const useScrollTo = () => {
    const bodyScrollbar = useTypedSelector(state => state.bodyScrollbar);

    return function (offset: number) {
        if (bodyScrollbar) bodyScrollbar.scrollTop(offset);
    }
}

export default useScrollTo;