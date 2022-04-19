import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Musicas from "./pages/Musicas";
import Adicionar from "./pages/Adicionar";

function Rotas(){
    return(
        <BrowserRouter> 
        <Routes> 
            <Route path="/" exact elements={<Musicas/>}/>
            <Route path="/" exact elements={<Adicionar/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default Rotas; 