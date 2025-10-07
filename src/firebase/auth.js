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

export const registerWithEmail = async ({
  fullName,
  email,
  password,
  role = "citizen",
}) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(result.user, { displayName: fullName });

    await setDoc(doc(db, "users", result.user.uid), {
      fullName: role === "citizen" ? fullName : null,
      email,
      role,
      isVerified: role === "citizen" ? true : false,
    });

    return result.user;
  } catch (error) {
    console.error(
      "Failed to register user with email & password:",
      error.message
    );
    throw error;
  }
};

export const loginWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Failed to login:", error.message);
    throw error;
  }
};

export const loginWithGoogle = async (role = "citizen") => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      await setDoc(userRef, {
        fullName: user.displayName,
        email: user.email,
        role,
        isVerified: true,
      });
    }

    return user;
  } catch (error) {
    console.error("Failed to login with Google:", error.message);
    throw error;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout failed:", error.message);
  }
};
