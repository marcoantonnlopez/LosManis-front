import React from "react";
import './WorkersList.css';
import WorkerWorkers from "../components/WorkerWorkers";

const WorkersList = () => {

    return <div class="workersList">
        <div class="title">Empleados en riesgo de rotacion</div>
        <div>Empleados con su probabilidad de renuncia</div>
        <div class="table">
            <div class="header">
                <div>Num</div>
                <div class="headerRight">
                    <div>Nombre</div>
                    <div>Departamento</div>
                    <div>Riesgo</div>
                    <div>Ver más</div>
                </div>
            </div>
            <div class="workersTable">
                <WorkerWorkers number="1" name="Beesie Cooper" position="Gerente" risk="83"></WorkerWorkers>
                <WorkerWorkers number="2" name="Beesie Cooper" position="Gerente" risk="80"></WorkerWorkers>
                <WorkerWorkers number="3" name="Beesie Cooper" position="Gerente" risk="75"></WorkerWorkers>
                <WorkerWorkers number="4" name="Beesie Cooper" position="Gerente" risk="65"></WorkerWorkers>
                <WorkerWorkers number="5" name="Beesie Cooper" position="Gerente" risk="65"></WorkerWorkers>
                <WorkerWorkers number="6" name="Beesie Cooper" position="Gerente" risk="63"></WorkerWorkers>
                <WorkerWorkers number="7" name="Beesie Cooper" position="Gerente" risk="58"></WorkerWorkers>
                <WorkerWorkers number="8" name="Beesie Cooper" position="Gerente" risk="55"></WorkerWorkers>
                <WorkerWorkers number="9" name="Beesie Cooper" position="Gerente" risk="49"></WorkerWorkers>
                <WorkerWorkers number="10" name="Beesie Cooper" position="Gerente" risk="32"></WorkerWorkers>
                <WorkerWorkers number="11" name="Beesie Cooper" position="Gerente" risk="32"></WorkerWorkers>
                <WorkerWorkers number="12" name="Beesie Cooper" position="Gerente" risk="12"></WorkerWorkers>
            </div>
        </div>
    </div>;
};

export default WorkersList;