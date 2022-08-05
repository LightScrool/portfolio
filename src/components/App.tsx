import React, {FC, useEffect, useRef} from 'react';
import '../styles/App.scss';
import Intro from "./Intro";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Site from "./Site";
import Works from "./Works";
import Footer from "./Footer";
import Popup from "./Popup";
import CustomScrollbar from "./CustomScrollbar";
import {Scrollbars} from "react-custom-scrollbars-2";
import {useDispatch} from "react-redux";
import {TBodyScrollbarReducerActionType} from "../types/bodyScrollbar";

const App: FC = () => {
    const dispatch = useDispatch();
    const bodyScroll = useRef<Scrollbars>(null);

    useEffect(() => {
        if (!bodyScroll.current) return;

        dispatch({
            type: TBodyScrollbarReducerActionType.SET_SCROLL_TO,
            payload: bodyScroll.current.scrollTop
        });

        return function () {
            dispatch({
                type: TBodyScrollbarReducerActionType.SET_SCROLL_TO,
                payload: () => {}
            });
        }
    }, [bodyScroll]);

    function onScroll() {
        if (!bodyScroll.current) return;
        dispatch({
            type: TBodyScrollbarReducerActionType.SET_CURRENT_SCROLL,
            payload: bodyScroll.current.getScrollTop()
        });
    }

    return (
        <div className="App">
            <CustomScrollbar
                className="App__scroll"
                ref={bodyScroll}
                onScroll={onScroll}
            >
                <Popup/>
                <Header/>
                <Intro/>
                <About/>
                <Skills/>
                <Site/>
                <Works/>
                <Footer/>
            </CustomScrollbar>
        </div>
    );
}

export default App;
