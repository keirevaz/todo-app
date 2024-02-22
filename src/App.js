import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import LoginPage from "./page/LoginPage";
import TaskPage from "./page/TaskPage";
import LoadingPage from "./page/LoadingPage";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <TaskPage /> : <Navigate to="/signIn" />}
          />
          <Route path="/signIn" exact element={<LoginPage />} />
          <Route path="/success" element={<LoadingPage />} />
          <Route path="/*" element={<Navigate to="/signIn" />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
