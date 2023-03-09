import React from "react";

const Robots = ({ robots }) => {
  return (
    <>
      {robots.length > 0 ? (
        robots.map((robot, i) => {
          return (
            <div
              key={i}
              id={robot.id}
              className="w-2/12 p-5 shadow-2xl rounded-2xl text-center bg-[#F0EEED] hover:scale-110 transition-transform ease-in-out"
            >
              <img
                src={`https://robohash.org/${robot.name}`}
                alt=""
                className="w-full"
              />
              <h1 className="mt-3 font-bold text-xl">{robot.name}</h1>
              <p>{robot.email}</p>
            </div>
          );
        })
      ) : (
        <p className="mt-32 text-6xl text-white font-bold">
          Robot doesn't exist
        </p>
      )}
    </>
  );
};

export default Robots;
