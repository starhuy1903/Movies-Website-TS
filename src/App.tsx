import React from 'react';

//Styles
import {GlobalStyle} from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";

import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import MovieWithParams from "./components/Movie";
import NotFound from "./components/NotFound";

const App: React.FC = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:movieId" element={<MovieWithParams/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>

            <GlobalStyle/>
        </Router>
    );
}

export default App;
