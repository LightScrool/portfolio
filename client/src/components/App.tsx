import React, {FC} from 'react';
import '../styles/App.scss';
import Intro from "./Intro";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Site from "./Site";
import Works from "./Works";
import Footer from "./Footer";
import {Provider} from "react-redux";
import store from "../store";

const App: FC = () => {
    return (
        <Provider store={store}>
            <Header/>
            <Intro/>
            <About/>
            <Skills/>
            <Site/>
            <Works/>
            <Footer/>
        </Provider>
    );
}

export default App;
