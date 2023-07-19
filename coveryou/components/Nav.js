import { useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth, db } from "../utils/Firebase";
import { useRouter } from "next/router";
import FlexRow from './wrapper/FlexRow';

const Nav = () => {
  const googleProvider = new GoogleAuthProvider()
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log("result", result);

    } catch (error) {
        console.log(error)
    }
  };

  return (
    <FlexRow className="p-4 border-b-4 border-primary justify-around text-secondary underline decoration-primary text-xl font-bold">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
            CoverMe
        </div>
        <div>
            <div className="cursor-pointer underline decoration-primary">{!user ?
                (<div onClick={handleLogin}>Log In</div>
                ) : (
                    <div>
                        <div onClick={() => router.push("saved")}>Saved CoverLetters</div>
                        {/*<button onClick={() => signOut(auth)}>Sign Out</button>*/}
                    </div>
                )}

            </div>
        </div>
    </FlexRow>
  )
}

export default Nav