import { useState, useEffect } from "react";
import SidebarPage from "./SidebarPage";
import axios from "axios";

const baseURL = "http://localhost:8081/eldorado/api/v1/";
function Home() {
    const [mensagem, setMensagem] = useState("");
    useEffect(()=> {
        axios.get(baseURL).then(res => {
            const msg = res.data;
            setMensagem(msg);
        })
    }, []);
    return (
        <div className="container-fluid">
	        <div className="row flex-nowrap">
                <SidebarPage />
                <div className="col py-3">
                    <p>{mensagem.mensagem}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Home;