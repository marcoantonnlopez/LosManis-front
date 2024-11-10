import React from "react";
import './Department.css';

const Department = (props) => {
    let nameDepartment = props.nameDepartment;
    let risk = props.risk;
    let number = props.number;
    let color;

    if (risk < 34)
        color = '#2CD06B'
    else if (risk > 66)
        color = '#D93636'
    else 
        color = '#FBD813'

    return <div class="Department">
        <div class="infoContainer" style={{ '--color-status': color }}>
            <div class="nameDepartment">{nameDepartment}</div>
            <div class="statusDepartment">
                <div class="messageDepartment">{number} Trabajadores en riesgo</div>
                <div class="riskDepartment">({risk}%)</div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </div>;
};

export default Department;