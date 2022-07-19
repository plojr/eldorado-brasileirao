import { useState, React, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const baseURL = "http://localhost:8081/eldorado/api/v1/equipes";

function Equipe() {
    const [equipes, setEquipes] = useState([]);
    useEffect(()=> {
        axios.get(baseURL).then(res => {
            const eq = res.data;
            setEquipes(eq);
        })
    }, []);
    return(
        <div className="container-fluid">
	        <div className="row flex-nowrap">
                <Sidebar />
                <div className="col py-3">
                    <table className="table table-bordered">
                        <tr>
                            <th>Nome</th>
                            <th>Apelido</th>
                        </tr>
                        {equipes.map(equipe => 
                            <tr key={equipe.id}>
                                <td>{equipe.nome}</td>
                                <td>{equipe.apelido}</td>
                            </tr>)}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Equipe;