// Survey.js
import React, { useState } from 'react';
//import axios from 'axios';
import FeedbackSlider from '../components/slider.jsx';
// import FeedbackSlider from '../components/FeedbackSlider';
import './Survey.css';

function Survey() {
  const [formData, setFormData] = useState({
    feltWelcome: 3,
    feltWelcomeText: '',
    induccionScore: 3,
    induccionText: '',
    firmasteDescripcion: false,
    firmasteDescripcionText: '',
    recibioEntrenamiento: 3,
    recibioEntrenamientoText: '',
    actividadesScore: 3,
    actividadesText: '',
    equipoPorporcionado: false,
    equipoPorporcionadoText: '',
    presentarIntegrantes: false,
    presentarIntegrantesText: '',
    presentarAreaContacto: false,
    presentarAreaContactoText: '',
    ambienteScore: 3,
    ambienteText: '',
    documentacion: false,
    documentacionText: '',
    inasistencias: false,
    inasistenciasText: '',
    disciplinasPorogresivas: false,
    disciplinasPorogresivasText: '',
    liderRRHH: 3,
    liderRRHHText: '',
    hospedajeScore: 3,
    hospedajeText: '',
    casaEscuelaScore: 3,
    casaEscuelaText: '',
    comedorScore: 3,
    comedorText: '',
    transporteScore: 3,
    transporteText: '',
    rrhhScore: 3,
    rrhhText: '',
    serMedScore: 3,
    serMedText: '',
    seguridadScore: 3,
    seguridadText: '',
    nominaScore: 3,
    nominaText: '',
    laborandoScore: 3,
    laborandoText: '',
    magnaScore: 3,
    magnaText: '',
    date: '',
    aplicoEntrevista: '',
    puestoDeQuienAplicaEntrevista: '',
    comentarios: '',
    nombre: '',
    numeroNomina: '',
    puesto: '',
    area: '',
    fechaIngreso: '',
    lider: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://example.com/api/submit-survey', formData);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
            <h1>Encuesta de Inducción</h1>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>No. Nomina</label>
            <input
              type="text"
              name="numeroNomina"
              value={formData.numeroNomina}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Puesto</label>
            <input
              type="text"
              name="puesto"
              value={formData.puesto}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Area</label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Fecha Ingreso</label>
            <input
              type="date"
              name="fechaIngreso"
              value={formData.fechaIngreso}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Lider</label>
            <input
              type="text"
              name="lider"
              value={formData.lider}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Cuando ingresé a la Compañia me sentí bienvenido:</label>
            <FeedbackSlider onChange={(value) => setFormData({...formData, feltWelcome: value})} />
            <input
              type="text"
              name="feltWelcomeText"
              value={formData.feltWelcomeText}
              onChange={handleChange}
              placeholder="¿Por Qué?"
              required
            />
          </div>

          <div>
            <label>¿Cómo calificas la induccion que se te dio a compañía?</label>
            <FeedbackSlider onChange={(value) => setFormData({...formData, induccionScore: value})} />
            <input
              type="text"
              name="induccionText"
              value={formData.induccionText}
              onChange={handleChange}
              placeholder="¿Por Qué?"
              required
            />
          </div>

          <div>
            <label>¿Ya firmaste tu descripcion de puesto?</label>
            <input
              type="checkbox"
              name="firmasteDescripcion"
              checked={formData.firmasteDescripcion}
              onChange={handleChange}
            />
            <input
              type="text"
              name="firmasteDescripcionText"
              value={formData.firmasteDescripcionText}
              onChange={handleChange}
              placeholder="¿Por Qué?"
              required
            />
          </div>

          {/* Add additional survey questions with FeedbackSlider as needed */}

          <button className='buttonBtn' type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default Survey;
