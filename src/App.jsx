import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./screens/Dashboard.jsx";
import Workers from "./screens/Workers.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./screens/Home.jsx";
<<<<<<< HEAD
import Survey from "./screens/survey.jsx";
=======
import Footer from "./components/Footer.jsx";
>>>>>>> ce9d0585fc29eb2ad8ce138647f2d04e2c2abbfc

function App() {

  return (
    <>
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/workers" element={<Workers/>}/>
        <Route path="/EncuestaInduccion" element={<Survey/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
    </>
  )
}

export default App
