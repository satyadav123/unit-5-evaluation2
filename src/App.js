import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import './App.css'
function App() {
  const [showform,setform]=useState(false)
  const [btncontent,setbtncontent]=useState("Add a new Student")
  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>{
        if(btncontent=="Add a new Student"){
          setbtncontent("Go to student list")
        }
        else{
          setbtncontent("Add a new Student")
        }
       
        setform(!showform)
      }}>{btncontent}</button>
      <br/>
      <br/>
      { showform && <AddStudent/> }
      <br/>
      <br/>
      
  
      { !showform &&<ShowStudents/>}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;