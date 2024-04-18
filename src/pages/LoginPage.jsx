import { useState } from "react";
import PropTypes from "prop-types";

LoginPage.propTypes = {
  onLogin: PropTypes.func,
};

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      localStorage.setItem("userEmail", email);
      onLogin();
    } else {
      setError("Email and passord must be provide");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1 className="title">Login</h1>
        {error && <p className="message danger">{error}</p>}
        <div className="inputs-section">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
export default LoginPage;
