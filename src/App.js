import { useState } from 'react';
import { Task } from './Task';
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
    taskName:newTask,
    completed :false,
  };
  setToDoList([...toDoList,task]);
 };

 const deleteItemHandler = (id) => {
  setToDoList(toDoList.filter((task)=> task.id !== id
  ));
 };
 const ChangeColor=(id)=>{
  setToDoList(
    toDoList.map((task)=>{
      if (task.id === id){
        return{...task,completed:true}
      }else{
        return task;
      }

    })
  )
 }

  return (
   <div className='all'>
    <div className='first'>
      <input onChange={taskHandler}/>
      <button onClick={addTask}>Add Task</button>
    </div>
    <div>
      {toDoList.map((task)=>{
       return (
         <Task
          completed={task.completed}
           taskName={task.taskName}
           id={task.id}
           deleteItemHandler={deleteItemHandler}
           ChangeColor={ChangeColor}
         />
       );   
      })}
    </div>
   </div>
)
}

export default App;
