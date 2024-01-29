import { createContext, useEffect, useState } from 'react';

import auth from './../Firebase/firebase.config';
import {
  EmailAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from 'firebase/auth';

import useAxiosPublic from './../Hooks/useAxiosPublic/useAxiosPublic';

// Called the Provider
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // Email-Password 1st step User Create
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email-Password 2nd step Sign In
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign In With Google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Sign In With Github
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // Sign In With Facebook
  const signInWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // Sign in with Name and PhotoURL
  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };


  // Change Password
  const changePassword = (currentPassword, newPassword) => {
    const user = auth.currentUser;

    // Reauthenticate the user with the current password
    const credential = EmailAuthProvider.credential(user.email, currentPassword);

    return reauthenticateWithCredential(user, credential)
      .then(() => {
        // Change the password
        return updatePassword(user, newPassword);
      })
      .catch((error) => {
        // Handle reauthentication or password update errors
        throw error;
      });
  };

  // User LogOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Manage Current User By On Auth State Changed
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post('/api/v1/jwt', userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem('access-token', res.data.token);
          }
        });
      } else {
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);

  // Value
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
    handleUpdateProfile,
    logOut,
    changePassword
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default Authprovider;
