import { useState } from "react";
import { useQuery } from "react-query"

export default function useData(promptValues){

    const { role, skills, additionalInfo } = promptValues;

    let prompt = `Write me a clear, crisp and convincing pitch for applying for a ${role} position at a company. Intelligently mention my ${skills} to highlight my strengths. Limit words to 100. ${additionalInfo}`

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(process.env.NEXT_PUBLIC_OPENAI_API_KEY)
      },
      body: JSON.stringify({
        'prompt': prompt,
        'temperature': 0.7,
        'max_tokens': 150,
        'top_p': 1,
        'frequency_penalty': 0,
        'presence_penalty': 0,
      })
    };

    const fetchData = async () => {
      const data = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', requestOptions)
        .then(response => response.json())
        .then((res) => console.log("useData", res));
      return data;
    }

    return useQuery('data', fetchData, {enabled: false, refetchOnMount: false, staleTime: 0});
}