import React, { useEffect, useState } from "react";
import ItemMusica from "../components/ItemMusica";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import api from "../api";

function Musicas() {
  const navigate = useNavigate(); 
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((res) => {
        console.log(res.data);
        setMusicas(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function irPaginaAdicionar(){
    navigate("/adicionar")
  }

  return (
    <>
      <Menu />

      <div className="container">
        <div className="filter">
          <button className="btn">Adicionar</button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">
          {musicas.map(musica => (
            <ItemMusica
              musica={musica.musica}
              artista={musica.artista}
              genero={musica.categoria}
              ano={musica.ano}
              id={musica.id}
              imagem={musica.imagem}
              key={musica.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Musicas;
