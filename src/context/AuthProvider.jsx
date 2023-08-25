"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import path from "path";

export const AuthProviderContext = createContext();
const AuthProvider = ({ children }) => {
	const pathname = usePathname();
	const router = useRouter();

	const [isLoading, setIsloading] = useState(true);
	const [currentUser, setCurrentUser] = useState([]);

	const checkIfAdmin = async (id, user) => {
		setIsloading(true);
		const docRef = doc(db, "Users", id);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			if (docSnap.data()?.role === "superadmin") {
				setCurrentUser(user);

				setTimeout(() => {
					setIsloading(false);
				}, 1000);
			} else {
				signOut(auth)
					.then(() => {
						// Sign-out successful.

						setCurrentUser(null);
						router.push("/auth/signin");
						toast.error("Sorry, you are not an admin!", {
							position: "top-center",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "dark",
						});
					})
					.catch((error) => {
						// An error happened.
					});
			}
		} else {
			// docSnap.data() will be undefined in this case
			console.log("No such document!");
			alert("Not Logged in");
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const uid = user?.uid;
				checkIfAdmin(uid, user);

				// ...
			} else {
				setIsloading(true);
				setCurrentUser(null);
				setTimeout(() => {
					setIsloading(false);
				}, 800);
				// User is signed out
				// ...
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	useEffect(() => {
		if (currentUser === null) {
			router.push("/auth/signin");
		} else if (pathname === "/" && currentUser !== null) {
			router.push("/dashboard/overview");
		} else if (pathname === "/auth/signin" && currentUser !== null) {
			router.push("/dashboard/overview");
		} else if (pathname === "/" && currentUser === null) {
			router.push("/auth/signin");
		}
	}, [currentUser, router, pathname]);
	return (
		<AuthProviderContext.Provider value={{ currentUser }}>
			{isLoading ? <Loading /> : <>{children}</>}
		</AuthProviderContext.Provider>
	);
};

export default AuthProvider;
