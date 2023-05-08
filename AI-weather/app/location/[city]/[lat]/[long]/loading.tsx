import { SunIcon } from "@heroicons/react/solid";
import React from "react";

function Loading() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-10 min-h-screen flex flex-col items-center justify-center text-slate-500">
      <SunIcon className="h-20 w-20 animate-bounce text-[yellow]" />
      <h2 className="text-4xl font-bold">Loading...</h2>
      <h2 className="text-4xl font-bold">
        Please wait we are calculating the numbers & generating AI summary of
        the weather
      </h2>
    </div>
  );
}

export default Loading;
