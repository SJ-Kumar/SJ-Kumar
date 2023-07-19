import { useState, useContext, useEffect } from 'react'
import useData from '../hooks/useData'
import { PromptContext } from '../context/PromptContext'
import Editor from './Editor';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from '../utils/Firebase';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import Container from './wrapper/Container';
import FlexRow from './wrapper/FlexRow';
import FlexCol from './wrapper/FlexCol';


const PitchText = ({promptValues, role, text, save, className}) => {
  const [editorOpen, setEditorOpen] = useState(false);
  const [editorState, setEditorState] = useState("");
  const [saved, setSaved] = useState(false)
  //const {isError, isLoading} = useData(promptValues)
  const [user] = useAuthState(auth);

  const handleEditor = () => {
    setEditorOpen(!editorOpen);
    setEditorState(text);
  }
  const savePitch = async () => {
    let pitch = "";

    if(editorState === ""){
      pitch = text;
    } else {
      pitch = editorState;
    }

    const collectionRef = collection(db, "pitches");
    if(pitch)
    await addDoc(collectionRef, {
      pitchText: text,
      user: user.uid,
      role: promptValues.role,
      saved: true,
    })

    setSaved(true);
  }

  //if(isLoading) return <div>loading...</div>
  //if(isError) return <div>{}</div>

  return (
    <FlexCol className={`w-full md:w-[70%] bg-secondary border-4 border-primary rounded-lg flex flex-col justify-start items-center gap-10 p-8 ${className}`}>
      <FlexRow className="w-full justify-between text-primary underline text-xl font-bold">
        <button onClick={handleEditor}>{!editorOpen ? "Edit" : "Close"}</button>
        {user ? (save || !saved) ? <button onClick={savePitch}>Save</button> : <p>Saved</p> : <div>Login to Save</div>}
      </FlexRow>
      <FlexCol className="w-full gap-8">
          {text ?
              (

            <article className="border-none text-lg min-h-full">
              {editorOpen && editorState ? (
                <Editor value={editorState} onChange={setEditorState} />
              ) : (
                <FlexCol className="gap-4">
                  {role ? (
                      <p className="text-lg font-semibold">for: <span className="text-primary underline">{role}</span></p>
                  ) : (
                      <p className="text-base md:text-lg font-semibold">for: <span className="text-primary underline">{promptValues.role}</span></p>)
                  }
                  <p>{editorState === "" ? text : editorState}</p>
                </FlexCol>
              )
              }
            </article>
            ) : (
                  <Container className="w-full basis-1/2">Writing...</Container>
                )}
          </FlexCol>
    </FlexCol>
  )
}

export default PitchText