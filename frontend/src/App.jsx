import { provider } from "./config/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
function App() {

const handleAuthGoogle =async ()=>{
  const auth = getAuth();
  provider.setCustomParameters({
    prompt: "select_account"
  });
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(token,user);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode,errorMessage,email,credential);
    //call api
    //check user exist
  });
}
  return (
    <div onClick={handleAuthGoogle}>Google</div>
  )
}

export default App
