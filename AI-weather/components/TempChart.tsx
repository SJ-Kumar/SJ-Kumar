"use client";

import { Card, AreaChart, Title } from "@tremor/react";

type Props = {
  results: Root;
};

function TempChart({ results }: Props) {
  const hourly = results?.hourly.time
    .map((time) => {
      return new Date(time).toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: false,
      });
    })
    .slice(0, 24);

  const data = hourly.map((time, index) => {
    return {
      time: Number(time),
      uv_index: results?.hourly.uv_index[index],
      "temperature (C)": results?.hourly.temperature_2m[index],
    };
  });

  const dataformatter = (number: number) => `${number} °C`;

  return (
    <Card>
      <Title>Temperature & UV index</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["uv_index", "temperature (C)"]}
        colors={["yellow", "rose"]}
        minValue={0}
        valueFormatter={dataformatter}
        yAxisWidth={40}
      />
    </Card>
  );
}

export default TempChart;
