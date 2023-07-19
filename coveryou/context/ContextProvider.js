import { useState } from "react";
import {PromptContext} from "./PromptContext";

export default function ContextProvider({children}) {
  const [promptValues, setPromptValues] = useState({
    role: "",
    skills: "",
    additionalInfo: "",
});
  const [enableQuery, setEnableQuery] = useState(false)

  return (
    <PromptContext.Provider value={{ promptValues, setPromptValues, enableQuery, setEnableQuery }}>
        {children}
    </PromptContext.Provider>
  )
}