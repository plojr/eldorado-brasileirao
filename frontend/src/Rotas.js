import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";

import Home from "./Pages/Home";
import Equipe from "./Pages/Equipe";

function Rotas() {
    return (
        <BrowserRouter basename="/eldorado">
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Equipe />} path="/equipes" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;