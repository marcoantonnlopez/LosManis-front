import React from "react";
import './WorkerWorkers.css';
import WorkerGraph from "./workerGraph";
import { useNavigate } from 'react-router-dom';

const WorkerWorkers = (props) => {
    const navigate = useNavigate();

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

    return <div class="workerWorkers">
        <div class="numWorker">{number}</div>
        <div class="workersTableRight">
            <div class="nameWorker">{name}</div>
            <div class="positionContainer">
                <div>{position}</div>
            </div>
            <div class="riskWorker" style={{ '--my-color': color }}>
                <div style={{ color: 'var(--my-color)' }} class="riskMessage">{message}</div>
                <div><WorkerGraph riskPercentage={risk}></WorkerGraph></div>
            </div>
            <div class="ver" onClick={() => navigate("/trabajador")} >
                <div>Ver</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </div>
        </div>
    </div>;
};

export default WorkerWorkers;