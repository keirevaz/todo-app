import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const firstName = useSelector((state) => state.auth.user?.firstName);

  useEffect(() => {}, []);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/signIn");
  };
  const renderHeader = () => {
    if (isLoggedIn) {
      return (
        <header>
          <div className="header-actions">
            {firstName && <p>Welcome, {firstName}</p>}
            <button className="logout-button" onClick={handleLogout}>
              LOGOUT
            </button>
          </div>
        </header>
      );
    }
    return null;
  };

  return <>{renderHeader()}</>;
};

export default Header;
