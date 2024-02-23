import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_MOCK_API,
});

export default instance;
