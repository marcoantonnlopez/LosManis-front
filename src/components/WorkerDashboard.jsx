import React from "react";
import './WorkerDashboard.css';
import WorkerGraph from "./workerGraph";

const WorkerDashboard = (props) => {
    let number = props.number;
    let name = props.name;
    let position = props.position;
    let risk = props.risk;

    return <div class="workerDashboard">
        <div class="numberWorker">{number}</div>
        <div class="nameWorker">{name}</div>
        <div class="positionContainer">
            <div class="positionWorker">Departamento</div>
            <div>{position}</div>
        </div>
        <div class="riskWorker">
            <div><WorkerGraph riskPercentage={risk}></WorkerGraph></div>
        </div>
    </div>;
};

export default WorkerDashboard;