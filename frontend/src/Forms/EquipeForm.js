import { useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:8081/eldorado/api/v1/equipe";

function EquipeForm() {
    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }
    const [campos, setCampos] = useState({
        nome: '',
        apelido: ''
    });
    function salvarEquipe(event){
        event.preventDefault();
        axios.post(baseURL, campos).then(response => {
            alert("Equipe cadastrada!");
            window.location.href = "/equipes";
        });
    }
    return (
        <div className="container-fluid">
	        <div className="row flex-nowrap">
                <div className="col py-3">
                    <form onSubmit={salvarEquipe}>
                        <div className="form-group">
                            <label htmlFor="equipe_nome_id">Nome da equipe</label>
                            <input type="text" id="equipe_nome_id" name="nome" className="form-control" required onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="equipe_apelido_id">Apelido da equipe</label>
                            <input type="text" id="equipe_apelido_id" name="apelido" className="form-control" required onChange={handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EquipeForm;