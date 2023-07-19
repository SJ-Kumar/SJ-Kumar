import { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, } from "formik";
import { PromptContext } from "../context/PromptContext";
import { QueryClient } from "react-query"
import useData from "../hooks/useData";
import * as yup from "yup";
import Copy from "./Copy";
import Container from "./wrapper/Container";
import FlexCol from "./wrapper/FlexCol";
import PitchText from "./PitchText";

const formSchema = yup.object().shape({
    role: yup.string().required("required"),
    skills: yup.string(),
    additionalInfo: yup.string(),
});

const initialValues = {
    role: "",
    skills: "",
    additionalInfo: "",
}

const Main = () => {
  const [showPitch, setShowPitch] = useState(false)
  const [pitchText, setPitchText] = useState("")
  const [promptValues, setPromptValues] = useState({});
  //const {data, refetch} = useData(promptValues);

  useEffect(() => {
    //if(data) setPitchText(data.choices[0].text);
    console.log("useEffect", pitchText)
  }, [showPitch]);

  //const { role, skills, additionalInfo } = promptValues;


  const fetchData = async (values) => {

    let prompt = `Write me a clear, crisp and convincing pitch for applying for a ${values.role} position at a company. Intelligently mention my skills like ${values.skills} to highlight my strengths. Limit words to 120. ${values.additionalInfo}`;

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

    setShowPitch(true);

    const data = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', requestOptions)
      .then(response => response.json())
      .then((res) => setPitchText(res.choices[0].text))
      .then(setPromptValues(values));
    return data;
  }

  //const formik = useFormik({initialValues: initialValues, onSubmit:handleFormSubmit});

  return (
    <Container className="w-full ease-in md:mt-16 flex-col md:flex-row justify-evenly gap-4 bottom-2 border-t-fuchsia-400">
        <Formik validationSchema={formSchema} className="w-full basis-1/2" initialValues={initialValues} onSubmit={(values) => fetchData(values)}>
            {() => (
                <Container className="w-full basis-1/2 ">
                  <Form className="w-full md:w-3/5 bg-secondary border-4 border-primary rounded-lg flex flex-col justify-evenly items-center gap-10 py-8">
                      <FlexCol className="w-[80%] items-start">
                          <label htmlFor="role" className="text-md md:text-lg font-black text-left">Position to apply for</label>
                          <Field placeholder="developer, writer, designer, etc..." name="role" type="text" className="p-2 border-2 border-gray-400 rounded-md h-12 w-full font-semibold text-md md:text-lg">
                          </Field>
                      </FlexCol>
                      <FlexCol className="w-[80%] items-start">
                          <label htmlFor="skills" className="text-md md:text-lg font-black text-left">Few relevant skills</label>
                          <Field placeholder="domain specific skills..." name="skills" type="text" className="p-2 border-2 border-gray-400 rounded-md h-12 w-full font-semibold text-md md:text-lg">
                          </Field>
                      </FlexCol>
                      <FlexCol className="w-[80%] items-start">
                          <label htmlFor="additionalInfo" className="text-md md:text-lg font-black text-left">Additional info(optional)</label>
                          <Field placeholder="experience, personality, company..." name="additionalInfo" type="text" className="p-2 border-2 border-gray-400 rounded-md h-12 w-full font-semibold text-md md:text-lg">
                          </Field>
                      </FlexCol>
                      <button type="submit" className="border-none bg-primary rounded-md h-12 w-[80%] font-semibold text-xl">Generate CoverLetter</button>
                  </Form>
                </Container>
            )}
        </Formik>
        <div className="w-full basis-1/2">
          {showPitch ? (
            <PitchText promptValues={promptValues} text={pitchText}/>
          ):(
            <Copy />
          )}
        </div>
    </Container>
  )
}

export default Main