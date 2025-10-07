import { auth, db } from "./config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const registerWithEmail = async (
  fullName,
  email,
  password,
  role = "citizen"
) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result?.user, { displayName: fullName });

    await setDoc(doc(db, "users", result?.user?.uid), {
      fullName,
      email,
      role,
      isVerified: role === "citizen" ? true : false,
    });

    return result?.user;
  } catch (error) {
    console.log("Failed to register user with email & password!");
  }
};

export const loginWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result?.user;
  } catch (error) {
    console.log(error);
  }
};

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, GoogleAuthProvider);
    const user = result?.user;

    const userRef = doc(db, "users", user?.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      await setDoc(doc(db, "users", user?.uid), {
        fullName: user?.displayName,
        email: user?.email,
        role: "citizen",
        isVerified: true,
      });
    }

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("logout failed");
  }
};
