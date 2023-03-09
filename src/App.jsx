import { useState, useEffect } from "react";

import Robots from "./components/Robots";
import Search from "./components/Search";

export default function App() {
  const [robots, setRobots] = useState("");
  const [data, setData] = useState();

  const getRobot = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((res) => res.json());
    setData(response);
    setRobots(response);
  };

  const onSearchChange = (e) => {
    setRobots(
      data.filter((robot) =>
        robot.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getRobot();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 text-center">
        <h1 className="text-6xl font-light text-white font-robot">
          ROboFr13nd5
        </h1>
        <Search searchChange={onSearchChange} />
        <div className="flex flex-wrap justify-center gap-8 my-10">
          {robots ? (
            <Robots robots={robots} />
          ) : (
            <p className="mt-32 text-6xl text-white font-bold">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
