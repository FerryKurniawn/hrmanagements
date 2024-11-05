import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import logins from "../../../login.json";

function Login() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  const [role, setRole] = useState("employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const login = logins.find((login) => {
      return (
        login.email === email &&
        login.password === password &&
        login.role === role
      );
    });

    if (login) {
      setError("");
      if (role === "employee") {
        localStorage.setItem("employee_username", login.username);
        handleNavigate("/karyawanhome");
      } else {
        localStorage.setItem("admin_username", login.username);
        handleNavigate("/admindashboard");
      }
    } else {
      setError("Invalid email, password, or role");
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const validEmail = logins.some((login) => {
      return (
        login.email === newEmail &&
        ((role === "employee" && login.role === "employee") ||
          (role === "admin" && login.role === "admin"))
      );
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-text p-6">
      <div className="w-full max-w-md bg-main p-8 rounded-base shadow-light border border-border">
        <h2 className="text-2xl font-heading mb-4">Login</h2>
        <div className="flex mb-5 justify-center space-x-8">
          <Button
            onClick={() => {
              setRole("employee");
              setEmail("");
              setError("");
            }}
            className={`px-7 py-3 ${
              role === "employee"
                ? "text-white bg-mainAccent px-10 py-6 font-bold"
                : ""
            }`}
          >
            Employee
          </Button>
          <Button
            onClick={() => {
              setRole("admin");
              setEmail("");
              setError("");
            }}
            className={`px-7 py-3 ${
              role === "admin"
                ? "text-white bg-mainAccent px-10 py-6 font-bold"
                : ""
            }`}
          >
            Admin
          </Button>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block font-base mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full p-3 rounded-base border border-border shadow-light focus:outline-none focus:ring-2 focus:ring-mainAccent"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block font-base mb-2">Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              required
              className="w-full p-3 rounded-base border border-border shadow-light focus:outline-none focus:ring-2 focus:ring-mainAccent"
              placeholder="Enter your password"
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button
            type="submit"
            className="w-full p-3 text-xl font-heading text-white bg-mainAccent shadow-light border border-border rounded-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-transform"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
