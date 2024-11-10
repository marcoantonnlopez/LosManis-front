// src/pages/SurveyForm.jsx
import React, { useState } from 'react';
import './followUpSurvey.css';

function FollowUpSurvey() {
  const [formData, setFormData] = useState({
    id: '',
    email: '',
    name: '',
    name2: '',
    employeeNumber: '',
    position: '',
    area: '',
    zone: '',
    station: '',
    entryDate: '',
    leader: '',
    feltWelcome: '',
    feltWelcomeReason: '',
    inductionRating: '',
    inductionReason: '',
    jobDescriptionSigned: null, // Sí o No
    jobDescriptionReason: '',
    trainingReceived: '',
    trainingProvider: '',
    roleDoubts: '',
    roleDoubtDetails: '',
    equipmentProvided: null, // Sí o No
    equipmentNeeded: '',
    departmentIntroduction: null, // Sí o No
    departmentIntroductionReason: '',
    contactAreaIntroduction: null, // Sí o No
    contactAreaIntroductionReason: '',
    workEnvironment: '',
    workEnvironmentReason: '',
    pendingDocumentation: null, // Sí o No
    pendingDocumentationDetails: '',
    absences: null, // Sí o No
    absencesReason: '',
    progressiveDiscipline: null, // Sí o No
    progressiveDisciplineReason: '',
    rrhhLeaderKnown: null, // Sí o No
    rrhhLeaderKnownReason: '',
    lodgingRating: '', // Solo foráneos
    lodgingReason: '',
    relocationHousing: null, // Solo foráneos, Sí o No
    relocationHousingReason: '',
    diningRating: '',
    diningReason: '',
    transportRating: '',
    transportReason: '',
    hrRating: '',
    hrReason: '',
    medicalServiceRating: '',
    medicalServiceReason: '',
    securityRating: '',
    securityReason: '',
    payrollRating: '',
    payrollReason: '',
    mediumTermJobVision: '',
    mediumTermJobReason: '',
    companyRating: '',
    companyRatingReason: '',
    interviewerName: '',
    interviewerPosition: '',
    signatureStatus: null, // Sí o No
    interviewDate: '',
    additionalComments: '',
    magnaPrinciples: null, // Sí o No
    magnaPrinciplesReason: '',
    companySafetyEfforts: '',
    safetyEffortsReason: '',
    qualityApplication: '',
    openDoorProcessDoubts: '',
    progressiveDisciplineDoubts: '',
    teamworkEnvironment: '',
    teamworkEnvironmentReason: '',
    categoryChangeKnowledge: null, // Sí o No
    categoryChangeReason: '',
    teamworkBonus: null, // Sí o No
    teamworkBonusFrequency: '',
    additionalTrainingNeed: '',
    additionalTrainingDetails: '',
    improvementSuggestions: '',
    improvementSuggestionsDetails: '',
    additionalInterviewComments: '',
    interviewApplierName: '',
    interviewApplierPosition: '',
    isSigned: null, // Sí o No
    finalDate: '',
    leaderSupport: '',
    supportDetails: '',
    leaderExpectationLevel: '',
    leaderFairness: null, // Sí o No
    fairnessReason: '',
    workplaceClimate: null, // Sí o No
    climateReason: '',
    dignityAndRespect: null, // Sí o No
    dignityRespectReason: '',
    leaderPerformance: null, // Sí o No
    leaderPerformanceReason: '',
    workAreaImprovements: '',
    workAreaImprovementsDetails: '',
    companyRecommendation: null, // Sí o No
    recommendationReason: '',
    firstInterviewComments: '',
    secondaryInterviewerName: '',
    secondaryInterviewerPosition: '',
    signatureConfirmation: null, // Sí o No
    finalInterviewDate: '',
    additionalFinalComments: '',
    submissionTimestamp: '' // Este campo guardará la fecha y hora de envío
});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTimestamp = new Date().toISOString(); // Obtiene la fecha y hora actuales en formato ISO

    setFormData((prevData) => ({
        ...prevData,
        submissionTimestamp: currentTimestamp, // Guarda la fecha y hora de envío
    }));

    // Aquí podrías enviar formData al servidor o realizar otras acciones
    console.log({ ...formData, submissionTimestamp: currentTimestamp });
  };

  return (
    <div className="survey-form-container">
      <form className='form' onSubmit={handleSubmit}>
      <h2>Encuesta de Seguimiento</h2>
      <div className="form-group">
          <label>ID</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Segundo Nombre</label>
          <input type="text" name="name2" value={formData.name2} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Nombre de empleado</label>
          <input type="text" name="employeeNumber" value={formData.employeeNumber} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Posición</label>
          <input type="text" name="position" value={formData.position} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Area</label>
          <input type="text" name="area" value={formData.area} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Zone</label>
          <input type="text" name="zone" value={formData.zone} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Station</label>
          <input type="text" name="station" value={formData.station} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Entry Date</label>
          <input type="date" name="entryDate" value={formData.entryDate} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Leader</label>
          <input type="text" name="leader" value={formData.leader} onChange={handleChange} />
        </div>
        {/* Repite el patrón anterior para los demás campos */}

        <div className="form-group">
          <label>¿Cuando ingresé en la Compañía me sentí bienvenido?</label>
          <input type="text" name="feltWelcome" value={formData.feltWelcome} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Por qué? (Bienvenida)</label>
          <input type="text" name="feltWelcomeReason" value={formData.feltWelcomeReason} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Como calificas la inducción que se te dio a compañía?</label>
          <input type="number" name="inductionRating" value={formData.inductionRating} onChange={handleChange} min="1" max="5" />
        </div>
          
        <div className="form-group">
          <label>¿Por qué? (Inducción)</label>
          <input type="text" name="inductionReason" value={formData.inductionReason} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Ya firmaste tu descripción de puesto?</label>
          <div>
            <label>
              <input
                type="radio"
                name="jobDescriptionSigned"
                value="yes"
                checked={formData.jobDescriptionSigned === "yes"}
                onChange={handleChange}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="jobDescriptionSigned"
                value="no"
                checked={formData.jobDescriptionSigned === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
          
        <div className="form-group">
          <label>¿Por qué? (Descripción de puesto)</label>
          <input type="text" name="jobDescriptionReason" value={formData.jobDescriptionReason} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Recibiste entrenamiento para el manejo de tu operación o las actividades de tu puesto?</label>
          <input type="text" name="trainingReceived" value={formData.trainingReceived} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Quién proporcionó el entrenamiento?</label>
          <input type="text" name="trainingProvider" value={formData.trainingProvider} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Tienes dudas sobre las actividades que debes desempeñar en tu puesto?</label>
          <input type="text" name="roleDoubts" value={formData.roleDoubts} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Cuáles son tus dudas? (Actividades del puesto)</label>
          <input type="text" name="roleDoubtDetails" value={formData.roleDoubtDetails} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Te proporcionaron el equipo y/o herramientas necesarias para desempeñar tu trabajo?</label>
          <div>
            <label>
              <input
                type="radio"
                name="equipmentProvided"
                value="yes"
                checked={formData.equipmentProvided === "yes"}
                onChange={handleChange}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="equipmentProvided"
                value="no"
                checked={formData.equipmentProvided === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
          
        <div className="form-group">
          <label>¿Qué necesitas? (Equipo/Herramientas)</label>
          <input type="text" name="equipmentNeeded" value={formData.equipmentNeeded} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Te presentaron formalmente con los integrantes de tu departamento?</label>
          <div>
            <label>
              <input
                type="radio"
                name="departmentIntroduction"
                value="yes"
                checked={formData.departmentIntroduction === "yes"}
                onChange={handleChange}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="departmentIntroduction"
                value="no"
                checked={formData.departmentIntroduction === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
          
        <div className="form-group">
          <label>¿Por qué? (Presentación con el departamento)</label>
          <input type="text" name="departmentIntroductionReason" value={formData.departmentIntroductionReason} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Te presentaron con las áreas que tendrás contacto?</label>
          <div>
            <label>
              <input
                type="radio"
                name="contactAreaIntroduction"
                value="yes"
                checked={formData.contactAreaIntroduction === "yes"}
                onChange={handleChange}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="contactAreaIntroduction"
                value="no"
                checked={formData.contactAreaIntroduction === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
          
        <div className="form-group">
          <label>¿Por qué? (Presentación con áreas de contacto)</label>
          <input type="text" name="contactAreaIntroductionReason" value={formData.contactAreaIntroductionReason} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Como es el ambiente en el área de trabajo?</label>
          <input type="text" name="workEnvironment" value={formData.workEnvironment} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Por qué? (Ambiente en el área de trabajo)</label>
          <input type="text" name="workEnvironmentReason" value={formData.workEnvironmentReason} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Tienes documentación pendiente por entregar?</label>
          <div>
            <label>
              <input
                type="radio"
                name="pendingDocumentation"
                value="yes"
                checked={formData.pendingDocumentation === "yes"}
                onChange={handleChange}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="pendingDocumentation"
                value="no"
                checked={formData.pendingDocumentation === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
          
        <div className="form-group">
          <label>¿Cuál? (Documentación pendiente)</label>
          <input type="text" name="pendingDocumentationDetails" value={formData.pendingDocumentationDetails} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Has tenido inasistencias?</label>
          <div>
            <label>
              <input
                type="radio"
                name="absences"
                value="yes"
                checked={formData.absences === "yes"}
                onChange={handleChange}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="absences"
                value="no"
                checked={formData.absences === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
          
        <div className="form-group">
          <label>¿Por qué? (Inasistencias)</label>
          <input type="text" name="absencesReason" value={formData.absencesReason} onChange={handleChange} />
        </div>
          
        <div className="form-group">
          <label>¿Has tenido disciplinas progresivas?</label>
          <div>
            <label>
              <input
                type="radio"
                name="progressiveDiscipline"
                value="yes"
                checked={formData.progressiveDiscipline === "yes"}
                onChange={handleChange}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="progressiveDiscipline"
                value="no"
                checked={formData.progressiveDiscipline === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
          
        <div className="form-group">
          <label>¿Por qué? (Disciplinas progresivas)</label>
          <input type="text" name="progressiveDisciplineReason" value={formData.progressiveDisciplineReason} onChange={handleChange} />
        </div>

        
        <button className='buttonBtn' type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FollowUpSurvey;
