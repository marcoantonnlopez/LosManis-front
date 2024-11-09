import React from "react";
import './dataContainer.css';

const DataContainer = (props) => {
    let number = props.number;
    let title = props.title;

    return <div class="dataContainer">
        <div class="number">{number}</div>
        <div class="dataTitle">{title}</div>
    </div>;
};

export default DataContainer;