/* Function invokes callback and adds event listeners on window, it also returns another function, that removes these event listeners */
export const createWindowEventListeners = (
    callback: () => void,
    windowEvents: string[],
) => {
    callback();
    for (let event of windowEvents) window.addEventListener(event, callback);

    return function () {
        for (let event of windowEvents) window.removeEventListener(event, callback);
    }
}
