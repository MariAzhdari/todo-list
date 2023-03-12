import { useState } from 'react';
import './App.css';

function App() {
  const[toDoList ,setToDoList] = useState([]);
  const[newTask,setNewTask] =useState("");

 const taskHandler =(event)=>{
  setNewTask(event.target.value)
 };
 const addTask=()=>{
  const newArray =[...toDoList,newTask]
  setToDoList(newArray);
 };

  return (
   <div>
    <div>
      <input onChange={taskHandler}/>
      <button onClick={addTask}>Add Task</button>
     
    </div>
    <div>
      {toDoList.map((task)=>{
        return <h1>{task}</h1>
      })}
    </div>
   </div>
)
}

export default App;
