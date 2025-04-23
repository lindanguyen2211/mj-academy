import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css"

const PASSWORD = import.meta.env.VITE_APP_PASSWORD; // Set this in your .env file

export default function App() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredPassword === PASSWORD) {
      navigate("/dashboard");
    } else {
      setError("Incorrect password");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <div className="landing">
      <form
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold text-center">Enter Password</h1>
        <input
          type="password"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
          placeholder="Password"
        />
        {error && <p>{error}</p>}
        <button
          type="submit"
        >
          Unlock
        </button>
      </form>
    </div>
  );
}