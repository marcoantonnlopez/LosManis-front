// src/Button.jsx
import React from 'react';
import './Button.css'; // Importa el archivo CSS si quieres estilos personalizados

function Button({ label, onClick, type = "button", style }) {
    return (
        <button type={type} onClick={onClick} style={style} className="custom-button">
            {label}
        </button>
    );
}

export default Button;
