import React from 'react'
import { Route, Routes, HashRouter } from "react-router-dom";
import { Español } from '../Español';
import Home from '../Home';
import English from '../English'
import Contact from '../Contact';
import Settings from '../Settings';
import EngSettings from '../EngSettings';
import EngContact from '../EngContacts';

const Router = () => {
    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/espanol" element={<Español/>} />
                <Route path="/english" element={<English/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/engcontact" element={<EngContact />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/engsettings" element={<EngSettings />} />
            </Routes>
        </HashRouter>
    );
}

export default Router;