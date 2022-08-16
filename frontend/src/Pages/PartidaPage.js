import { useState, React, useEffect } from "react";
import SidebarPage from "./SidebarPage";
import axios from "axios";

const baseURL = "http://localhost:8081/eldorado/api/v1/partidas";

function Partida() {
    const [partidas, setPartidas] = useState([]);
    useEffect(()=> {
        axios.get(baseURL).then(res => {
            const eq = res.data;
            setPartidas(eq);
        })
    }, []);
    return(
        <div className="container-fluid">
	        <div className="row flex-nowrap">
                <SidebarPage />
                <div className="col py-3">
                    <div>Partidas existentes</div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Rodada</th>
                                <th>Mandante</th>
                                <th></th>
                                <th></th>
                                <th>Visitante</th>
                            </tr>
                        </tbody>
                        {partidas.map(partida =>
                            <tbody key={partida.id}> 
                                <tr>
                                    <td>{partida.rodada}</td>
                                    <td>{partida.mandante.nome}</td>
                                    <td>{partida.mandante.gols.length}</td>
                                    <td>{partida.visitante.gols.length}</td>
                                    <td>{partida.visitante.nome}</td>
                                </tr>
                            </tbody>)}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Partida;