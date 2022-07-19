import React, {FC} from 'react';
import '../styles/App.scss';
import Intro from "./Intro";
import Header from "./Header";
import About from "./About";

const App: FC = () => {
    return (
        <>
            <Header/>
            <Intro/>
            <About/>
        </>
    );
}

export default App;
