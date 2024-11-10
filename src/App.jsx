import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./screens/Dashboard.jsx";
import Workers from "./screens/Workers.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./screens/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/workers" element={<Workers/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
    </>
  )
}

export default App
