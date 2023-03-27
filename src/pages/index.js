import Inputs from "./inputs";
import Board from "./components/board";
import React, { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Mounted");
  });

  return (
    <div className="bg-white w-screen h-screen">
      <div>{<Inputs />}</div>
      <h1 className="text-left text-black text-lg p-4">Scrum Board</h1>
      {<Board />}
    </div>
  );
}
