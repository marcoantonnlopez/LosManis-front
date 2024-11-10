// src/pages/Login.jsx
import React, { useState } from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación
    if (username === 'user' && password === 'password') { // Ejemplo simple
        navigate('/dashboard'); // Redirige a la página principal
      } else {
        alert('Credenciales incorrectas');
      }
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-container">
      <form className='form' onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='buttonBtn' type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
