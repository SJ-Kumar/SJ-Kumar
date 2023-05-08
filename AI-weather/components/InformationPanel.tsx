import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import CityPicker from "./CityPicker";
import weatherCodeToString from "@/lib/weatherCodeToString";
import Image from "next/image";

type Props = {
  city: string;
  results: Root;
};

function InformationPanel({ city, results }: Props) {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-10">
      <div className="">
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p>
          Long/Lat: {results.longitude}/{results.latitude}
        </p>
      </div>
      <CityPicker />
      <hr className="my-10" />
      <div className="flex space-between items-center ">
        <div className="mt-5 flex flex-col justify-between mb-5">
          <p>
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="font-extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
      <hr className="mb-10 mt-5" />
      <div className="flex items-center justify-between">
        <div>
          {/*image*/}
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[results.current_weather.weathercode].icon
            }.png`}
            width={75}
            height={75}
            alt="Weather Icon"
          />

          <div className="flex items-center justify-between space-x-10">
            <p className="text-6xl semibold">
              {results.current_weather.temperature.toFixed(1)}°C
            </p>
            <p className="text-right font-extralight text-lg">
              {/*Weather Code*/}
              {weatherCodeToString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 px-4 py-3 rounded-md bg-[#405885]">
        <SunIcon className="h-5 w-5 text-yellow-400" />
        <p className="text-sm font-extralight">Sunrise</p>
        <p className="text-sm font-extralight">
          {new Date(results.daily.sunrise[0]).toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>

      <div className="flex items-center space-x-2 px-4 py-3 mt-5 rounded-md bg-[#405885]">
        <MoonIcon className="h-5 w-5 text-yellow-400" />
        <p className="text-sm font-extralight">Sunset</p>
        <p className="text-sm font-extralight">
          {new Date(results.daily.sunset[0]).toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
    </div>
  );
}

export default InformationPanel;
