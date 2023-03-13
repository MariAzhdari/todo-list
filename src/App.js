import { useState } from 'react';
import './App.css';

function App() {
  const[toDoList ,setToDoList] = useState([]);
  const[newTask,setNewTask] =useState("");

 const taskHandler =(event)=>{
  setNewTask(event.target.value)
 };


 const addTask=()=>{
  const task={
    id:toDoList.length === 0 ? 1 :toDoList[toDoList.length-1].id+1,
    taskName:newTask
  };
  setToDoList([...toDoList,task]);
 };

 const deleteItemHandler = (id) => {
  setToDoList(toDoList.filter((task)=> task.id !== id
  ));
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
          <h1>{task.taskName}</h1>
          <button onClick={() => deleteItemHandler(task.id)}>delete</button>
        </div>
       )
      })}
    </div>
   </div>
)
}

export default App;
