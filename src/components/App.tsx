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
import {createWindowEventListeners} from "../utils";

const App: FC = () => {
    useEffect(() => {
        function onResize() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        return createWindowEventListeners(onResize, ['resize']);
    }, [])


    const dispatch = useDispatch();
    const bodyScrollbar = useRef<Scrollbars>(null);
    useEffect(() => {
        if (!bodyScrollbar.current) return;

        dispatch({
            type: TBodyScrollbarReducerActionType.SET_SCROLLBAR,
            payload: bodyScrollbar.current
        });

        return function () {
            dispatch({
                type: TBodyScrollbarReducerActionType.SET_SCROLLBAR,
                payload: null
            });
        }
    }, [bodyScrollbar, dispatch]);

    function onScroll() {
        window.dispatchEvent(new Event("scroll"));
    }

    return (
        <div className="App">
            <CustomScrollbar
                className="App__scroll"
                ref={bodyScrollbar}
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
