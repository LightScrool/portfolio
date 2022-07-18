import React, {FC} from 'react';
import '../styles/App.scss';
import Intro from "./Intro";
import Header from "./Header";

const App: FC = () => {
    return (
        <>
            <Header/>
            <Intro/>
        </>
    );
}

export default App;
