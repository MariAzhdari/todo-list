 export const Task = (props) => {

    return (
      <div className="second"
      style={{backgroundColor:props.completed ?"green" :"white"}}>
        <h1>{props.taskName}</h1>
        <button
          onClick={()=>props.ChangeColor(props.id)} 
        >
          completed
        </button>
        <button onClick={() => props.deleteItemHandler(props.id)}>
          delete
        </button>
      </div>
    );
}