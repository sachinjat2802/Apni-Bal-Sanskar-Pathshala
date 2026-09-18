"use client";

import { useState } from "react";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const login = () => {
    // Hardcoded fallback logic since backend won't work on GitHub Pages
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setHasError(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div id="login-container" className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
          {hasError && (
            <div id="error-msg" className="text-red-500 mb-4">
              Invalid credentials. Access denied.
            </div>
          )}
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-full p-3 border mb-4 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full p-3 border mb-6 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={login}
            className="w-full py-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      ) : (
        <div id="dashboard-container" className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <h2 className="text-3xl font-bold text-gray-800">Admin Dashboard</h2>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded">
              <h3 className="text-xl mb-4 border-b inline-block pb-1">Site Settings</h3>
              <p>Welcome to the admin panel. From here you can manage settings.</p>
            </div>

            <div className="p-4 border rounded">
              <h3 className="text-xl mb-4 border-b inline-block pb-1">Actions</h3>
              <button className="w-full mb-2 py-2 bg-gray-200 rounded">Manage Users</button>
              <button className="w-full py-2 bg-gray-200 rounded">View Reports</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
