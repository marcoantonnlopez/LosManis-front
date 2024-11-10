import React from "react";
import './WorkerDashboard.css';
import WorkerGraph from "./workerGraph";

const WorkerDashboard = (props) => {
    let number = props.number;
    let name = props.name;
    let position = props.position;
    let risk = props.risk;
    let message;
    let color;

    if (risk < 34)
    {
        message = "Bajo Riesgo"
        color = '#2CD06B'
    }
    else if (risk > 66)
    {
        message = "Alto Riesgo"
        color = '#D93636'
    }
    else 
    {
        message = "Medio Riesgo"
        color = '#FBD813'
    }

    return <div class="workerDashboard">
        <div class="numberWorker">{number}</div>
        <div class="nameWorker">{name}</div>
        <div class="positionContainer">
            <div class="positionWorker">Departamento</div>
            <div>{position}</div>
        </div>
        <div class="riskWorker" style={{ '--my-color': color }}>
            <div style={{ color: 'var(--my-color)' }} class="riskMessage">{message}</div>
            <div><WorkerGraph riskPercentage={risk}></WorkerGraph></div>
        </div>
    </div>;
};

export default WorkerDashboard;