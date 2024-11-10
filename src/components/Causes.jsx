import React from "react";
import './Causes.css';

const Causes = ({ children, message, risk }) => {

    return <div class="causes">
        <div class="box">
            {children}
        </div>
        <div class="boxMessage">{message}</div>
        <div class="boxRisk">{risk}%</div>
    </div>;
};

export default Causes;