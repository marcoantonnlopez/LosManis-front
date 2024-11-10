import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./screens/Dashboard.jsx";
import Workers from "./screens/Workers.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./screens/Home.jsx";
import Survey from "./screens/Survey.jsx"; // Asegúrate de que la ruta sea correcta
import Footer from "./components/Footer.jsx";
import Login from "./screens/LogIn.jsx";
import FollowUpSurvey from "./screens/FollowUpSurvey.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EncuestaSeguimiento" element={<FollowUpSurvey />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/EncuestaInduccion" element={<Survey />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
