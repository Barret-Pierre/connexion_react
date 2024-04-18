import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/Signup";
import Navbar from "./components/Navbar/Navbar";
import AcountPage from "./pages/AcountPage";
import { useState } from "react";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("userEmail"));

  function logout() {
    setUser(localStorage.getItem("userEmail"));
    navigate("/login");
  }

  function login() {
    setUser(localStorage.getItem("userEmail"));
    navigate("/");
  }

  return (
    <>
      <Navbar onLogout={() => logout()} user={user} />
      <Routes>
        {user === null ? (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route
              path="/login"
              element={<LoginPage onLogin={() => login()} />}
            />
            <Route path="/signup" element={<SignupPage />} />
          </>
        ) : (
          <Route path="/" element={<AcountPage onLogout={() => logout()} />} />
        )}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
