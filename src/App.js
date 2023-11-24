import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    },2000);
  }
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled.","success")
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled.","success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/>} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
