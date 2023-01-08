import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom/client";
import TaskContainer from "./components/TaskContainer";
import Task from "./components/Task";

const taskList = [
  { id: "task1", title: "Buy Milk", isComplete: true },
  { id: "task2", title: "Read a book", isComplete: false },
  { id: "task3", title: "Early morning run", isComplete: false },
  { id: "task4", title: "Drink water", isComplete: false },
  { id: "task5", title: "Visit the puppy shelter", isComplete: true },
  { id: "task6", title: "Watch Bad Sisters", isComplete: false },
];


function App() {
  const [task, setTasks] = useState(taskList);

  function toggleComplete(id,isComplete) {
  
   setTasks(taskList.map(task => {
    if (task.id === id){
      task.isComplete = !task.isComplete;
      console.log( `Task with the id '${id}' is ${task.isComplete? 'Completed': 'Incomplete'}`);
    }
    return task;
  }))
  
  }

  return (
    <Fragment>
      <h1 key="heading">Task List</h1>
      <TaskContainer>
        {/*<Task id="task1" title="Buy Milk" isComplete={true} />
        <Task id="task2" title="Read a book" isComplete={false} />
        <Task id="task3" title="Early Morning run" isComplete={false} />*/}

        {taskList.sort((a, b) => (a.isComplete - b.isComplete)).map((task) => (
          <Task
            id={task.id}
            title={task.title}
            isComplete={task.isComplete}
            toggleComplete={toggleComplete}          
          />
        ))}
      </TaskContainer>
    </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
