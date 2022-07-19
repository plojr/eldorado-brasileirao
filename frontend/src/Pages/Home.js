import React from "react";
import Sidebar from "./Sidebar";

function Home() {
    return (
        <div className="container-fluid">
	        <div className="row flex-nowrap">
                <Sidebar />
                <div className="col py-3">
                    <p>Bem vindo ao Eldorado!</p>
                </div>
            </div>
        </div>
    );
}
 
export default Home;