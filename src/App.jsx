import './App.css';
import React from "react"
import Homepage from './components/Homepage';
import Employee from './components/Employee';


function App() {
  return (
    <div className ="app">
      <Homepage text="Employee Directory"/>
      <Employee text="Employee"/>
      <div>test</div>
    </div>
  );
}

export default App;
