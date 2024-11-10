import React, { useState } from 'react';
import './FinalSurvey.css';

const FinalSurvey = () => {
  const [formData, setFormData] = useState({
    fechaIngreso: '',
    fechaBaja: '',
    puesto: '',
    categoria: '',
    area: '',
    liderInmediato: '',
    edad: '',
    sexo: '',
    escolaridad: '',
    lugarProcedencia: '',
    estadoCivil: '',
    respetoSupervisor: 3,
    apoyoSupervisor: 3,
    sueldosPrestaciones: 3,
    normasPoliticas: 3,
    herramientasEquipos: 3,
    condicionesTrabajo: 3,
    induccionPuesto: 3,
    misionObjetivo: 3,
    promocionAscensos: 3,
    reconocimientosLogros: 3,
    errorHandling: [],
    communication: [],
    separationReason: [],
    additionalDetails: '',
    expectations: [],
    opinionCSL: '',
    returnWish: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
            console.log('Form submitted successfully:', response.data);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    console.log(formData);
    // Add submission logic here
  };

  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Encuesta de Salida</h1>
      <form onSubmit={handleSubmit}>
      <label>
        Fecha de ingreso:
        <input type="date" name="fechaIngreso" value={formData.fechaIngreso} onChange={handleChange} />
      </label>

      <label>
        Fecha de baja:
        <input type="date" name="fechaBaja" value={formData.fechaBaja} onChange={handleChange} />
      </label>

      <label>
        Puesto:
        <input type="text" name="puesto" value={formData.puesto} onChange={handleChange} />
      </label>

      <label>
        Categoría:
        <select name="categoria" value={formData.categoria} onChange={handleChange}>
          <option value="">Seleccione...</option>
          <option value="Operativo">Operativo</option>
          <option value="Tecnico">Técnico</option>
          <option value="Empleado">Empleado</option>
          <option value="Confidencial">Confidencial</option>
        </select>
      </label>

      <label>
        Área:
        <input type="text" name="area" value={formData.area} onChange={handleChange} />
      </label>

      <label>
        Líder inmediato:
        <input type="text" name="liderInmediato" value={formData.liderInmediato} onChange={handleChange} />
      </label>

      <label>
        Edad:
        <input type="number" name="edad" value={formData.edad} onChange={handleChange} />
      </label>

      <label>
        Sexo:
        <select name="sexo" value={formData.sexo} onChange={handleChange}>
          <option value="">Seleccione...</option>
          <option value="Femenino">Femenino</option>
          <option value="Masculino">Masculino</option>
        </select>
      </label>

      <label>
        Escolaridad:
        <select name="escolaridad" value={formData.escolaridad} onChange={handleChange}>
          <option value="">Seleccione...</option>
          <option value="Secundaria">Secundaria</option>
          <option value="Preparatoria">Preparatoria/Bachillerato</option>
          <option value="Carrera Técnica">Carrera Técnica</option>
          <option value="Ingeniería/Licenciatura">Ingeniería/Licenciatura</option>
          <option value="Maestría/Postgrado">Maestría/Postgrado</option>
        </select>
      </label>

      <label>
        Lugar de procedencia:
        <input type="text" name="lugarProcedencia" value={formData.lugarProcedencia} onChange={handleChange} />
      </label>

      <label>
        Estado Civil:
        <select name="estadoCivil" value={formData.estadoCivil} onChange={handleChange}>
          <option value="">Seleccione...</option>
          <option value="Soltero(a)">Soltero(a)</option>
          <option value="Unión Libre">Unión Libre</option>
          <option value="Casado(a)">Casado(a)</option>
          <option value="Divorciado(a)">Divorciado(a)</option>
          <option value="Viudo(a)">Viudo(a)</option>
        </select>
      </label>

      <label>
        Respeto de tu supervisor/jefe:
        <input
          type="range"
          name="respetoSupervisor"
          min="1"
          max="5"
          value={formData.respetoSupervisor}
          onChange={handleChange}
        />
        <p>Calificación actual: {formData.respetoSupervisor}</p>
      </label>

      <label>
        Apoyo de tu supervisor/jefe:
        <input
          type="range"
          name="apoyoSupervisor"
          min="1"
          max="5"
          value={formData.apoyoSupervisor}
          onChange={handleChange}
        />
        <p>Calificación actual: {formData.apoyoSupervisor}</p>
      </label>

      <label>
        Sueldos y Prestaciones:
        <input
          type="range"
          name="sueldosPrestaciones"
          min="1"
          max="5"
          value={formData.sueldosPrestaciones}
          onChange={handleChange}
        />
        <p>Calificación actual: {formData.sueldosPrestaciones}</p>
      </label>

      <label>
        Normas y Políticas:
        <input
          type="range"
          name="normasPoliticas"
          min="1"
          max="5"
          value={formData.normasPoliticas}
          onChange={handleChange}
        />
        <p>Calificación actual: {formData.normasPoliticas}</p>
      </label>

      <label>
        Herramientas y Equipos:
        <input
          type="range"
          name="herramientasEquipos"
          min="1"
          max="5"
          value={formData.herramientasEquipos}
          onChange={handleChange}
        />
        <p>Calificación actual: {formData.herramientasEquipos}</p>
      </label>

      <label>
        Condiciones Áreas de Trabajo:
        <input
          type="range"
          name="condicionesTrabajo"
          min="1"
          max="5"
          value={formData.condicionesTrabajo}
          onChange={handleChange}
        />
        <p>Calificación actual: {formData.condicionesTrabajo}</p>
      </label>

      <label>
        Inducción Institucional y al Puesto:
        <input
          type="range"
          name="induccionPuesto"
          min="1"
          max="5"
          value={formData.induccionPuesto}
          onChange={handleChange}
        />
        <p>Calificación actual: {formData.induccionPuesto}</p>
      </label>

      <label>
        Misión y Objetivo del Puesto:
        <input
          type="range"
          name="misionObjetivo"
          min="1"
          max="5"
          value={formData.misionObjetivo}
          onChange={handleChange}
        />
        <p>Calificación actual: {formData.misionObjetivo}</p>
      </label>

      <label>
        Promoción y Ascensos:
        <input
          type="range"
          name="promocionAscensos"
          min="1"
          max="5"
          value={formData.promocionAscensos}
          onChange={handleChange}
        />
        <p>Calificación actual: {formData.promocionAscensos}</p>
      </label>

      <label>
        Reconocimientos y Logros:
        <input
          type="range"
          name="reconocimientosLogros"
          min="1"
          max="5"
          value={formData.reconocimientosLogros}
          onChange={handleChange}
        />
        <p>Calificación actual: {formData.reconocimientosLogros}</p>
      </label>

      <h3>Cuando cometías un error o infracción a las normas o políticas de la empresa</h3>
      <label>
        <input
          type="checkbox"
          value="Te suspendían"
          onChange={(e) => handleCheckboxChange(e, 'errorHandling')}
        />
        Te suspendían
      </label>
      <label>
        <input
          type="checkbox"
          value="Te llamaban la atención"
          onChange={(e) => handleCheckboxChange(e, 'errorHandling')}
        />
        Te llamaban la atención
      </label>
      <label>
        <input
          type="checkbox"
          value="Te rebajan de tu sueldo"
          onChange={(e) => handleCheckboxChange(e, 'errorHandling')}
        />
        Te rebajan de tu sueldo
      </label>
      <label>
        <input
          type="checkbox"
          value="Trabajabas horas extras para recuperar"
          onChange={(e) => handleCheckboxChange(e, 'errorHandling')}
        />
        Trabajabas horas extras para recuperar
      </label>
      <label>
        <input
          type="checkbox"
          value="Te despedían"
          onChange={(e) => handleCheckboxChange(e, 'errorHandling')}
        />
        Te despedían
      </label>
      <label>
        <input
          type="checkbox"
          value="El tiempo que te suspendían"
          onChange={(e) => handleCheckboxChange(e, 'errorHandling')}
        />
        El tiempo que te suspendían
      </label>

      <h3>Como se te informaba</h3>
      <label>
        <input
          type="checkbox"
          value="En forma escrita"
          onChange={(e) => handleCheckboxChange(e, 'communication')}
        />
        En forma escrita
      </label>
      <label>
        <input
          type="checkbox"
          value="En forma verbal"
          onChange={(e) => handleCheckboxChange(e, 'communication')}
        />
        En forma verbal
      </label>
      <label>
        <input
          type="checkbox"
          value="En forma verbal por compañero"
          onChange={(e) => handleCheckboxChange(e, 'communication')}
        />
        En forma verbal por compañero
      </label>

      <h3>Motivo de Separación</h3>
      {/* Add checkbox labels for each separation reason in a similar way */}
      <label>
        <input
          type="checkbox"
          value="Falta de respeto de tu Supervisor / Jefe"
          onChange={(e) => handleCheckboxChange(e, 'separationReason')}
        />
        Falta de respeto de tu Supervisor / Jefe
      </label>
      {/* Repeat for all other "Motivo de Separación" options */}

      <h3>Detallar Acontecimientos</h3>
      <textarea
        name="additionalDetails"
        value={formData.additionalDetails}
        onChange={handleChange}
        rows="4"
        placeholder="Escriba detalles aquí..."
      />

      <h3>Que esperabas al ingresar a CSL</h3>
      <label>
        <input
          type="checkbox"
          value="Mejor Sueldo"
          onChange={(e) => handleCheckboxChange(e, 'expectations')}
        />
        Mejor Sueldo
      </label>
      <label>
        <input
          type="checkbox"
          value="Mejor paquete de prestaciones"
          onChange={(e) => handleCheckboxChange(e, 'expectations')}
        />
        Mejor paquete de prestaciones
      </label>

      <h3>Como consideras a CSL</h3>
      <label>
        <input
          type="radio"
          name="opinionCSL"
          value="Excelente lugar para trabajar"
          checked={formData.opinionCSL === "Excelente lugar para trabajar"}
          onChange={handleChange}
        />
        Excelente lugar para trabajar
      </label>
      <label>
        <input
          type="radio"
          name="opinionCSL"
          value="Buen lugar para trabajar"
          checked={formData.opinionCSL === "Buen lugar para trabajar"}
          onChange={handleChange}
        />
        Buen lugar para trabajar
      </label>
      <label>
        <input
          type="radio"
          name="opinionCSL"
          value="Mal lugar para trabajar"
          checked={formData.opinionCSL === "Mal lugar para trabajar"}
          onChange={handleChange}
        />
        Mal lugar para trabajar
      </label>

      <h3>Te gustaría regresar</h3>
      <label>
        <input
          type="radio"
          name="returnWish"
          value="Sí"
          checked={formData.returnWish === "Sí"}
          onChange={handleChange}
        />
        Sí
      </label>
      <label>
        <input
          type="radio"
          name="returnWish"
          value="No"
          checked={formData.returnWish === "No"}
          onChange={handleChange}
        />
        No
      </label>

      <h3>Para Uso de Recursos Humanos</h3>
      <label>
        Fecha de entrevista:
        <input
          type="date"
          name="fechaEntrevista"
          value={formData.fechaEntrevista}
          onChange={handleChange}
        />
      </label>

      <label>
        Nombre y firma del colaborador:
        <input
          type="text"
          name="firmaColaborador"
          value={formData.firmaColaborador}
          onChange={handleChange}
        />
      </label>

      <label>
        Líder de RRHH:
        <input
          type="text"
          name="liderRRHH"
          value={formData.liderRRHH}
          onChange={handleChange}
        />
      </label>

      <button className='buttonBtn' type="submit">Enviar</button>
    </form>
    </header>
    </div>
  );
}

export default FinalSurvey;
