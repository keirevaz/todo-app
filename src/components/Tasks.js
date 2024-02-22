import React, { useState, useEffect } from "react";
import Input from "./Input";

const Tasks = ({ list, deleteTask, saveUpdatedTask }) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(list);
  }, [list]);

  const updateSelectedTask = (index, value) => {
    let updatedTaskList = taskList.map((item, i) => {
      if (index === i) {
        item.task = value;
      }
      return item;
    });
    setTaskList(updatedTaskList);
  };

  const saveSelectedTask = async (index, event) => {
    if (event.key === "Enter") {
      await saveUpdatedTask(taskList[index]);
    }
  };

  const renderTasks = () => {
    if (taskList && taskList.length > 0) {
      return taskList.map((item, index) => {
        return (
          <div key={index} className="task-item">
            <Input
              type={"text"}
              value={item.task}
              onBlur={() => setTaskList(list)}
              onChange={(e) => updateSelectedTask(index, e.target.value)}
              onKeyPress={(e) => saveSelectedTask(index, e)}
            />
            <div class="delete-button" onClick={() => deleteTask(item.id)}>
              <span class="delete-icon">X</span>
            </div>
          </div>
        );
      });
    } else {
      return (
        <>
          <div className="no-task-message">
            <div>{":("}</div>
            <div>{"There is no task yet!"}</div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div>{renderTasks()}</div>
    </>
  );
};

export default Tasks;
