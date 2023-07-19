import {useEffect, useState} from 'react'
import { useRouter } from "next/router"
import { auth, db } from '../utils/Firebase';
import { collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Container from '../components/wrapper/Container';
import PitchText from '../components/PitchText';
import FlexRow from '../components/wrapper/FlexRow';
import FlexCol from '../components/wrapper/FlexCol';


function Saved() {
  //const [loadingPage, setLoadingPage] = useState(true);
  const [savedPitches, setSavedPitches] = useState([]);
  const [user, loading] = useAuthState(auth)
  const router = useRouter();

  useEffect(() => {
    if(!loading) fetchSavedPitches()
  });

  const fetchSavedPitches = () => {
    let unsubscribe = {};
    if(!user) router.push("/")
    if(!loading) {
      const collectionRef = collection(db, "pitches");
      const q = query(collectionRef, where('user', '==', user.uid));
      unsubscribe = onSnapshot(q, (snapshot) => {
          setSavedPitches(snapshot.docs.map((doc) => ({ ...doc.data(), id:doc.id })))
      });
    }

    //setLoadingPage(false);
    console.log(unsubscribe)
    return unsubscribe;
  }



  //const {data, isLoading, isError} = useQuery("saved", fetchSavedPitches)

  //if(isLoading) <Container>Loading...</Container>
  //if(isError) <Container>Error</Container>

  return (
      <Container>
        {!loading ? (
          <FlexCol className="justify-center items-center">
            <h3 className="w-full p-4 text-secondary underline text-center drop-shadow-lg text-xl lg:text-2xl font-bold">{ user && user.displayName}'s Pitches</h3>
            <main className=" w-[90%] py-4 flex flex-col md:flex-row justify-start items-start flex-wrap gap-4 lg:gap-8">
              {user ? savedPitches.length > 0 ? (
                savedPitches.map((pitch) => (
                  <PitchText key={pitch.id} className="md:min-h-[35rem] md:basis-[49%] lg:basis-[31%]" role={pitch.role} text={pitch.pitchText} saved={pitch.saved}/>
                ))
              ):(<h3 className="w-full p-4 text-secondary text-center drop-shadow-lg text-xl font-bold">none yet</h3>
            ):(<h3 className="p-4 text-secondary underline text-center drop-shadow-lg text-xl font-bold"></h3>)}
            </main>
          </FlexCol>
        ):(
          <Container className="text-center text-xl font-bold p-8 text-secondary">Loading...</Container>
        )}
      </Container>
  )
}

export default Saved