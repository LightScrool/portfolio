import useTypedSelector from "./useTypedSelector";

const useScrollTo = () => {
    const bodyScrollbar = useTypedSelector(state => state.bodyScrollbar);

    return function (offset: number) {
        // For some reason TypeScript doesn't see "view" field of Scrollbars
        // @ts-ignore
        if (bodyScrollbar) bodyScrollbar.view.scroll({
            top: offset,
            behavior: 'smooth',
        });
    }
}

export default useScrollTo;