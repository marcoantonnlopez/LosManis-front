import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./screens/Dashboard.jsx";
import WorkersList from "./screens/WorkersList.jsx";
import Worker from "./screens/Worker.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./screens/Home.jsx";
import Survey from "./screens/Survey.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workers" element={<WorkersList />} />
          <Route path="/EncuestaInduccion" element={<Survey />} />
          <Route path="/trabajador" element={<Worker />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
