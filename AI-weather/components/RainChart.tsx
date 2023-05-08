"use client";

import { Card, AreaChart, Title } from "@tremor/react";

type Props = {
  results: Root;
};

function RainChart({ results }: Props) {
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
      "Rain (%)": results?.hourly.precipitation_probability[index],
    };
  });

  const dataformatter = (number: number) => `${number} %`;

  return (
    <Card>
      <Title>Chances of Rain</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Rain (%)"]}
        colors={["blue"]}
        minValue={0}
        maxValue={100}
        valueFormatter={dataformatter}
        yAxisWidth={40}
      />
    </Card>
  );
}

export default RainChart;
