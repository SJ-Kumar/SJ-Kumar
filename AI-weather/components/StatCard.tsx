"use client";
import { Card, Color, Metric, Text } from "@tremor/react";

type Props = {
  title: string;
  metric: string;
  color?: Color;
};

function StatCard({ title, metric, color }: Props) {
  return (
    <div>
      <Card decoration="top" decorationColor={color}>
        <Text>{title}</Text>
        <Metric>{metric}</Metric>
      </Card>
    </div>
  );
}

export default StatCard;
