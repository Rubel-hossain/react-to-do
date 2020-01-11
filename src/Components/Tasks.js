import React,{useState,useEffect} from "react";
import uuid from "uuid/v4";

const Tasks = () => {
  const TASKS_STORAGE_KEY = "TASKS_STORAGE_KEY";
  const readStorage = () => {
    const data = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
    return data ? data : { task: [], completedTasks: [] }
  }
  const storeData = readStorage();
 const [taskText, setTaskText] = useState("");
  const [task, setTask] = useState(storeData.task);
  const [completedTasks, setCompletedTasks] = useState(storeData.completedTasks);

 const tasksStorage = (tasksMap) => {

  localStorage.setItem(
    TASKS_STORAGE_KEY,
    JSON.stringify(tasksMap)
  );
 }



 const updatedTaskText = (e) => {
    setTaskText(e.target.value);
 }
 const addTasks = (e) => {
  setTask([...task, {taskText, id: uuid()}]);
   e.preventDefault();
   setTaskText("");
 }
 const taskCompleted = (taskData) => {
   setCompletedTasks([...completedTasks, taskData]);
   setTask(task.filter(task => task.id !== taskData.id ));
 }

  const deleteTask = (completedTask) => {
    setCompletedTasks(completedTasks.filter((completedT) => completedT.id !== completedTask.id));
  }
  useEffect(()=>{
    tasksStorage({ task, completedTasks })
  });
      return(
       <>
       
       <div className="form">
        <form onSubmit={addTasks}> 
          <input value={taskText} value={taskText} onChange={updatedTaskText}/>
          <button>Add Task</button>
        </form>
       </div>
        <h3>Tasks</h3>
        {task.map(task=>{
         const {taskText,id} = task;
          return (
           <div key={id}> 
              <p onClick={()=> taskCompleted(task)}>{taskText}</p>
           </div>
          )
        })}
        <div className="completed-list">
            {completedTasks.map(completedTasks=>{
              return (
                <div key={completedTasks.id}>
                  <p>{completedTasks.taskText} <span onClick={()=> deleteTask(completedTasks)} className="delete-task">X</span></p>
                </div>
              )
            })}
        </div>
       </>
      );
}

export default Tasks;