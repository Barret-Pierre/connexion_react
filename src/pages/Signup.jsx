import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function checkForm() {
    setError("");
    setMessage("");
    if (!username || !password || !email) {
      setError("All fields are not provide");
    } else if (!email.match(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/)) {
      setError("Email invalid");
    } else {
      setEmail("");
      setUsername("");
      setPassword("");
      setMessage("Acount created !");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    checkForm();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1 className="title">Signup</h1>
        {error && <p className="message danger">{error}</p>}
        {message && <p className="message success">{message}</p>}
        <div className="inputs-section">
          <input
            type="email"
            formNoValidate
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </main>
  );
}
export default SignupPage;
