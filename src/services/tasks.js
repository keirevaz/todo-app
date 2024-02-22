import instance from "./instance";

export const fetchTasksAPI = async () => {
  try {
    const response = await instance.get(`/tasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

export const fetchTasksByUsernameAPI = async (username) => {
  try {
    const response = await instance.get(`/tasks?username=${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching task by username:", error);
  }
};

export const addNewTaskAPI = async (username, task) => {
  try {
    const response = await instance.post(`/tasks`, { username, task });
    return response.data;
  } catch (error) {
    console.error("Error adding new task:", error);
  }
};

export const deleteTaskAPI = async (userId) => {
  try {
    const response = await instance.delete(`/tasks/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

export const saveUpdatedTaskAPI = async (task) => {
  try {
    const response = await instance.put(`/tasks/${task.id}`, task);
    return response.data;
  } catch (error) {
    console.error("Error saving updated task:", error);
  }
};
