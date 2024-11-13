import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };


  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
        console.log('sign out done');
        setUser(null);
    })
    .catch((error) => {
        console.log(error);
    })
  }


   const handleGithubSignIn = () => {
         signInWithPopup(auth, GithubProvider)
         .then((result) => {
            console.log(result.user);
            setUser(result.user);
         })
         .catch((error) => {
            console.log('Error', error);
         } )
   }




  // if user exists ? sign out : sign in

  return (
    <div>
      {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}
    
      {
        user ?
        <button onClick={handleSignOut}>Sign Out</button> : 
        <>
             <button onClick={handleGoogleSignIn}>Login with Google</button>
             <button onClick={handleGithubSignIn}>Login with Github</button>
        </>
      }



      {
      user && <div>
        <h4>{user.displayName}</h4>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
};

export default Login;
