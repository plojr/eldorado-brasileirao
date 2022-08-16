import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import EquipePage from "./Pages/EquipePage";
import PartidaPage from "./Pages/PartidaPage";

function Rotas() {
    return (
        <BrowserRouter basename="/eldorado">
            <Routes>
                <Route element={<HomePage />} path="/" exact />
                <Route element={<EquipePage />} path="/equipes" />
                <Route element={<PartidaPage />} path="/partidas" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;