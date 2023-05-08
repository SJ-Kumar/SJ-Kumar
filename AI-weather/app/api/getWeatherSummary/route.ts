import { NextResponse } from "next/server";
import openAi from "@/openai";

export async function POST(request: Request) {
  // Weather data in the body of the request
  const { weatherData } = await request.json();

  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.5,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "Pretend you are a weather reporter presenting live on TV. be energetic and enthusiastic. Introduce yourself as Kiprotich Kimutai and say you are reporting live from Juja, Kenya. State the city you are providing the summary for then give the summary of today's weather. Make it easy for the audience to understand. You can use the weather data provided in the body of the request to help you write the summary. Provide a joke regarding the weather. Assume data came from your team at the news center and not the user",
      },
      {
        role: "user",
        content: `Hi can i get the weather summary of today's weather, using the weather information data: ${JSON.stringify(
          weatherData
        )}`,
      },
    ],
  });

  const { data } = response;

  console.log("data", data);

  return NextResponse.json(data.choices[0].message);
}
