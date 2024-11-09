import React from "react";
import './Dashboard.css';
import DataContainer from "../components/dataContainer";    
import BasicPie from "../components/BasicPie";
import WorkerDashboard from "../components/WorkerDashboard";

const Dashboard = () => {

    return <div class="dashboard">
        <div class="title">Tablero</div>
        <div class="dataWrapper">
            <DataContainer number="400" title="Empleados encuestados"></DataContainer>
            <DataContainer number="180" title="Empleados con bajo riesgo de renuncia"></DataContainer>
            <DataContainer number="150" title="Medio riesgo de renuncia"></DataContainer>
            <DataContainer number="70" title="Alto riesgo de renuncia"></DataContainer>
            <DataContainer number="33" title="Renuncias"></DataContainer>
        </div>
        <div class="content">
            <div class="employeesContainer">
                <div class="titleContainer">Empleados por salvar</div>
                <div class="subtitleContainer">Empleados con mayor riesgo de renuncia</div>
                <div class="workersContainer">
                    <WorkerDashboard number="1" name="Beesie Cooper" position="Gerente" risk="83"></WorkerDashboard>
                    <WorkerDashboard number="2" name="Theresa Webb" position="Ensamblaje" risk="80"></WorkerDashboard>
                    <WorkerDashboard number="3" name="Albert Flores" position="Ensamblaje" risk="75"></WorkerDashboard>
                    <WorkerDashboard number="4" name="Darlene Robertson" position="Ensamblaje" risk="65"></WorkerDashboard>
                </div>
            </div>
            <div class="graphContainer">
                <div class="titleContainer">Riesgo de renuncia de empleados </div>
                <div class="subtitleContainer">Porcentaje general de empleados con mayor riesgo de desempleo</div>
                <div class ="graphRow">
                    <div class="graph">
                        <BasicPie></BasicPie>
                    </div>
                    <div class="graphColors"></div>
                </div>
            </div>
        </div>
    </div>;
};

export default Dashboard;