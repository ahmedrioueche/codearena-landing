import React from "react";
import ModesContainer from "./start-now/ModeContainer";

function StartNow() {
  return (
    <section id="start-now" className="py-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
          Start Now!
        </span>
      </h2>
      <ModesContainer />
    </section>
  );
}

export default StartNow;
