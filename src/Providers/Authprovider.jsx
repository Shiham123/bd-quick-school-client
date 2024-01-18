import { createContext } from "react";
import auth from './../Firebase/firebase.config';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Email-Password 1st step User Create
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Email-Password 2nd step Sign In
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign In With Google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Sign In With Github
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // Sign In With Facebook
    const signInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    // Value
    const authInfo = { user, createUser, signIn, signInWithGoogle, signInWithGithub, signInWithFacebook }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;