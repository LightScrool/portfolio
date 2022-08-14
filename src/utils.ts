/* Function invokes callback and adds event listeners on window, it also returns another function, that removes these event listeners */
export const createWindowEventListeners = (
    callback: () => void,
    windowEvents: string[],
): () => void => {
    callback();
    for (let event of windowEvents) window.addEventListener(event, callback);

    return function () {
        for (let event of windowEvents) window.removeEventListener(event, callback);
    }
}

export const combineClassNames = (
    ...classNames: Array<string | undefined | null>
): string => {
    classNames = classNames.filter(value => value);
    return classNames.length ? classNames.join(" ") : "";
}