import { useState, React, useEffect } from "react";
import SidebarPage from "./SidebarPage";
import axios from "axios";
import EquipeForm from "../Forms/EquipeForm";

const baseURL = "http://localhost:8081/eldorado/api/v1/";

function toggleEditar(id) {
    document.getElementById(id).disabled = !document.getElementById(id).disabled;
    document.getElementById(id).focus();
}

function salvarEquipe(equipe) {
    alert(equipe._id + " " + equipe.nome);
}

function Equipe() {
    const [equipes, setEquipes] = useState([]);
    useEffect(()=> {
        axios.get(baseURL + "equipes").then(res => {
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
                                <th>Editar</th>
                                <th>Deletar</th>
                                <th>Salvar</th>
                            </tr>
                        </tbody>
                        {equipes.map(equipe =>
                            <tbody key={equipe._id}>
                                <tr>
                                    <td><input id={equipe._id} className="form-control" type="text" defaultValue={equipe.nome} disabled
                                    onChange={(e) => equipe.nome = e.target.value} /></td>
                                    <td><img alt="Editar equipe" height="40" width="40" src="imagens/editar.png" onClick={() => toggleEditar(equipe._id)} /></td>
                                    <td><a href={baseURL + "equipe/deletar/"+equipe._id}><img alt="Deletar equipe" height="50" width="50" src="imagens/lixeira.png" /></a></td>
                                    <td><button type="button" className="form-control btn btn-primary btn-sm" onClick={() => salvarEquipe(equipe)}>Salvar alterações</button></td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Equipe;