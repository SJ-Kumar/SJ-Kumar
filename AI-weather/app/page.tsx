"use client";
import { Inter } from "next/font/google";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "@/components/CityPicker";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex flex-col justify-center align-center ">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center">Weather AI</Text>
        <Subtitle className="text-xl text-center">Powered by GPT3</Subtitle>
        <Divider className="my-10" />
        <Card
          className="
        bg-gradient-to-r from-blue-400 to-blue-500
        "
        >
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
