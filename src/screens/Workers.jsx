import React from "react";
import './Workers.css';

const Workers = () => {
    return <div class="workers">
        <div class="title">Empleados en riesgo de rotacion</div>
        <div>Empleados con su probabilidad de renuncia</div>
        <div class="table">
            <div class="header">
                <div>Num</div>
                <div>Nombre</div>
                <div>Departamento</div>
                <div>Riesgo</div>
                <div>Ver más</div>
            </div>
        </div>
    </div>;
};

export default Workers;