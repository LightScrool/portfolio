import {TypedUseSelectorHook, useSelector} from "react-redux";
import {TState} from "../types";

const useTypedSelector: TypedUseSelectorHook<TState> = useSelector;

export default useTypedSelector;