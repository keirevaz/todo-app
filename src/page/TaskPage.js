import React, { useEffect } from "react";
import Tasks from "../components/Tasks";
import Input from "../components/Input";
import { useSelector } from "react-redux";
import {
  fetchTasksByUsernameAPI,
  addNewTaskAPI,
  deleteTaskAPI,
  saveUpdatedTaskAPI,
} from "../services/tasks";

function TaskPage() {
  const username = useSelector((state) => state.auth.user?.username);

  const [taskList, setTasks] = React.useState([]);
  const [task, setTask] = React.useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    var data = await fetchTasksByUsernameAPI(username);
    setTasks(data);
  };

  const addNewTask = async (event) => {
    if (event.key === "Enter" && task.trim() !== "") {
      await addNewTaskAPI(username, task);
      setTask("");
      fetchTasks();
    }
  };

  const deleteTask = async (id) => {
    await deleteTaskAPI(id);
    fetchTasks();
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };
  const saveUpdatedTask = async (updatedTask) => {
    await saveUpdatedTaskAPI(updatedTask);
    fetchTasks();
  };

  return (
    <div className="task-container">
      <div>
        <Input
          type={"text"}
          id={"task"}
          name={"task"}
          placeholder={"Type a task and press Enter to add"}
          value={task}
          onChange={handleTaskChange}
          onKeyPress={addNewTask}
        />
      </div>
      <div>
        <h1>Tasks</h1>
      </div>
      <div>
        <Tasks
          list={taskList}
          deleteTask={deleteTask}
          saveUpdatedTask={saveUpdatedTask}
        />
      </div>
    </div>
  );
}

export default TaskPage;
