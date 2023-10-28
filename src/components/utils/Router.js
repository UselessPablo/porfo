import React from 'react'
import { Route, Routes, HashRouter } from "react-router-dom";
import { Español } from '../Español';
import Home from '../Home';
import English from '../English';

const Router = () => {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/espanol" element={<Español/>} />
                <Route path="/english" element={<English/>} />
            </Routes>
        </HashRouter>
    );
}

export default Router;