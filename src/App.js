import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from 'react'

import TextForm from './components/TextForm';
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [btn, setBtn] = useState('primary');

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      // document.title="TextUtils-Home(Dark)"
      setBtn('primary');
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      setBtn('primary');

    }
  }

  const green = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#002100';
      showAlert("Green mode has been enabled", "success")
      // document.title="TextUtils-Home(Green)"
      setBtn('success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      setBtn('primary');
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="Textutils" mode ={mode} toggleMode = {toggleMode} green={green}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">

          </Route>
        </Switch> */}
        {/* <About/> */}
          <TextForm heading="Enter the text to analyze" mode ={mode} showAlert={showAlert}  btn = {btn}/>

      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
