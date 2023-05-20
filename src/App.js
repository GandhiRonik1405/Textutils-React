import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom';


function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      message:message,
      type:type
    })
  //   setTimeout(()=>{
  //     setAlert(null);
  //   },1500);
   }


    const toggleMode =()=>{
      if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor = '#b4902b';
        showAlert("Dark mode has been enable","Success");
        document.title=("Textutils to DarkMode....")
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
            showAlert("light mode has been enable","Success");
            document.title=("Textutils to LightMode....")
      }
    }
    
  return (
    <>
    <Router>
    <Alert alert={alert}/>

<div className="container my-3 ">
<Navbar title="Textutils" mode={mode} toggleMode = {toggleMode}/>
<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze "mode={mode}/>
            </Route>
        </Switch>
              </div>
              </Router>
    </>

  );
}

export default App;