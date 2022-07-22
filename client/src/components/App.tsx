import React, {FC} from 'react';
import '../styles/App.scss';
import Intro from "./Intro";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";

const App: FC = () => {
    return (
        <>
            <Header/>
            <Intro/>
            <About/>
            <Skills/>
        </>
    );
}

export default App;
