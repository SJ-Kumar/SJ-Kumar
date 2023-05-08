"use client";

import { Card, AreaChart, Title } from "@tremor/react";

type Props = {
  results: Root;
};

function HumidityChart({ results }: Props) {
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
      "Humidity (%)": results?.hourly.relativehumidity_2m[index],
    };
  });

  const dataformatter = (number: number) => `${number} °C`;

  return (
    <Card>
      <Title>Humidity levels</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Humidity (%)"]}
        colors={["teal"]}
        minValue={0}
        maxValue={100}
        valueFormatter={dataformatter}
        yAxisWidth={40}
      />
    </Card>
  );
}

export default HumidityChart;
