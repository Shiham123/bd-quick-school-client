import { createContext } from "react";
import auth from './../Firebase/firebase.config';


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

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

    // Value
    const authInfo = { user, createUser, signIn, signInWithGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;