import { auth, db } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export const registerWithEmail = async ({
  fullName,
  email,
  password,
  role = "user",
}) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result?.user, { displayName: fullName });
    await setDoc(doc(db, "users", result?.user?.uid), {
      fullName,
      email,
      role,
    });
    toast.success("User Registered successfully!");
    return result?.user;
  } catch (error) {
    toast.error("Failed to Register user!");
  }
};

export const loginWithEmail = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const userRef = doc(db, "users", result.user.uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const userData = docSnap.data();
      toast.success("Login successfully!");
      return { ...result.user, role: userData.role };
    } else {
      toast.error("User data not found!");
      return null;
    }
  } catch (error) {
    toast.error("Failed to login user!");
  }
};

export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result?.user;

    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      await setDoc(userRef, {
        fullName: user.displayName,
        email: user.email,
        role: "user",
      });
    }
    const userData = docSnap.data();
    toast.success("SignIn with Google successfull!");
    return { user, role: userData?.role || "user" };
  } catch (error) {
    toast.error("Failed to signin with google!");
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    toast.success("Logout successfull!");
  } catch (error) {
    toast.error("Failed to logout");
  }
};
