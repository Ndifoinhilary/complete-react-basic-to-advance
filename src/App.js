import React, {useState} from "react";
import "./App.css";

const App = () => {
    const [tasks, setTask] = useState([
        {id: 1, name: "Learning", done: false},
        {id: 2, name: "Sleeping", done: true},
        {id: 3, name: "Cleaning", done: false},
    ]);

    const [title, setTitle] = useState("");

    function checkTask(taskid) {
        setTask((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskid ? {...task, done: !task.done} : task
            )
        );
    }

    function deleteTask(taskid) {
        setTask((prevTasks) =>
            prevTasks.filter((task) => task.id !== taskid))
    }

    function addTask() {
        if (title.trim() === "") return;
        setTask((prevTasks) => [...prevTasks, {id: prevTasks.length + 1, name: title, done: false}]);
        setTitle("");

    }

    return (
        <div className="App">
            <input className="name" value={title} onChange={(e) => setTitle(e.target.value)} type="text"
                   placeholder="Name"/>
            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h1>{task.name}</h1>
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => checkTask(task.id)}
                        />
                        <button onClick={() => deleteTask(task.id)} className="btn">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
