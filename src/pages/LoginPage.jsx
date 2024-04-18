import { useState } from "react";
import PropTypes from "prop-types";

LoginPage.propTypes = {
  onLogin: PropTypes.func,
};

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userEmail", email);
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginPage;
