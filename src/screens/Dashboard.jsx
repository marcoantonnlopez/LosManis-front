import React from "react";
import './Dashboard.css';
import DataContainer from "../components/dataContainer";    
import BasicPie from "../components/BasicPie";
import WorkerDashboard from "../components/WorkerDashboard";
import Department from "../components/Department";
import { useNavigate } from 'react-router-dom';

function Dashboard ()  {
    const navigate = useNavigate();

    return <div class="dashboard">
        <div class="title">Dashboard</div>
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
                <div class="verMas" onClick={() => navigate("/workers")} >
                    <div>Ver más</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </div>
            </div>
            <div class="graphContainer">
                <div class="titleContainer">Riesgo de renuncia de empleados </div>
                <div class="subtitleContainer">Porcentaje general de empleados con mayor riesgo de desempleo</div>
                <div class ="graphRow">
                    <div class="graph">
                        <BasicPie></BasicPie>
                    </div>
                </div>
            </div>
        </div>
        <div class="departmentsContainer">
            <div class="titleContainer">Departamentos</div>
            <div class="subtitleContainer">Departamentos con mayor empleados con riesgo de renuncias</div>
            <div class="departmentsWrapper">
                <Department risk={83} nameDepartment="Pintura"></Department>
                <Department risk={83} nameDepartment="Pintura"></Department>
                <Department risk={45} nameDepartment="Pintura"></Department>
                <Department risk={8} nameDepartment="Pintura"></Department>
                <Department risk={15} nameDepartment="Pintura"></Department>
                <Department risk={95} nameDepartment="Pintura"></Department>
                <Department risk={53} nameDepartment="Pintura"></Department>
                <Department risk={83} nameDepartment="Pintura"></Department>
                <Department risk={7} nameDepartment="Pintura"></Department>
                <Department risk={10} nameDepartment="Pintura"></Department>
            </div>
        </div>
    </div>;
};

export default Dashboard;