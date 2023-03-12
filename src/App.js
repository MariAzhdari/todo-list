import { useState } from 'react';
import './App.css';

function App() {
  const[toDoList ,setToDoList] = useState([]);
  const[newTask,setNewTask] =useState("");

 const taskHandler =(event)=>{
  setNewTask(event.target.value)
 };
 const addTask=()=>{
  setToDoList([...toDoList,newTask]);
 };

  return (
   <div>
    <div>
      <input onChange={taskHandler}/>
      <button onClick={addTask}>Add Task</button>
     
    </div>
    <div>
      {toDoList.map((task)=>{
       return(
        <div>
          <h1>{task}</h1>
          <button>delete</button>
        </div>
       )
      })}
    </div>
   </div>
)
}

export default App;
