import React, {FC} from 'react';
import '../styles/App.scss';
import Intro from "./Intro";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Site from "./Site";
import Works from "./Works";
import Footer from "./Footer";

const App: FC = () => {
    return (
        <>
            <Header/>
            <Intro/>
            <About/>
            <Skills/>
            <Site/>
            <Works/>
            <Footer/>
        </>
    );
}

export default App;
