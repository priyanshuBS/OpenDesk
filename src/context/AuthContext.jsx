import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const isLoggedIn = user ? true : false;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const docSnap = await getDoc(doc(db, "users", currentUser?.uid));
        if (docSnap.exists()) {
          localStorage.setItem(
            "user",
            JSON.stringify({ ...currentUser, ...docSnap.data() })
          );
          console.log({ ...currentUser, ...docSnap.data() });
          setUser({ ...currentUser, ...docSnap.data() });
        } else {
          setUser(null);
        }
      }
    });

    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ user, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
