import { useState, React, useEffect } from "react";
import SidebarPage from "./SidebarPage";
import axios from "axios";
import EquipeForm from "../Forms/EquipeForm";

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
                <SidebarPage />
                <div className="col py-3">
                    <EquipeForm />
                    <div>Equipes existentes</div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Nome</th>
                            </tr>
                        </tbody>
                        {equipes.map(equipe =>
                            <tbody key={equipe.id}> 
                                <tr>
                                    <td>{equipe.nome}</td>
                                </tr>
                            </tbody>)}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Equipe;