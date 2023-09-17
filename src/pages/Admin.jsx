import { useState, useContext } from "react";
import Dashboard from "../components/Dashboard";
import { LoginContext } from "../contexts/LoginContext";
const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const handleSubmit = () => {
    if (username === "mehdi1994" && password === "mehdi1994") {
      setLoggedIn(true);
    } else {
      alert("Username or Password Incorrect");
    }
  };
  return (
    <div>
      {!loggedIn ? (
        <div className="absolute top-[50%] translate-x-[50%] -translate-y-[50%] rounded-xl w-[50vw] h-[80vh] p-16 bg-[#11334f]">
          <h1 className="text-2xl text-center text-white">
            Log In To Dashboard
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center mt-8 gap-6"
          >
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="py-2 px-4 placeholder-gray-600 w-[60%] rounded-lg"
              placeholder="Username"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="py-2 px-4 placeholder-gray-600 w-[60%] rounded-lg"
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-white text-[#11334f] py-1 w-[60%] rounded-lg text-2xl font-medium hover:bg-gray-300 transition-all"
            >
              Log In
            </button>
          </form>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Admin;
