import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "@/fakeData/fakeMenu"
import { User } from "@/types/User"

export const getUser = async (idUser: string): Promise<User | undefined> => {
  //const docRef = doc(CHEMIN)
  const docRef = doc(db, "users", idUser)

  const docSnapshot = await getDoc(docRef)
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data()
    return userReceived as User
  }
}


export const createUser = async (userId: string): Promise<User> => {
  // CACHETTE
  const docRef = doc(db, "users", userId)

  // NOURRITURE
  const newUserToCreate: User = {
    username: userId,
    menu: fakeMenu.LARGE,
  }

  //setDoc(CACHETTE, NOURRITURE)
  await setDoc(docRef, newUserToCreate)
  return newUserToCreate
}

export const authenticateUser = async (userId: string): Promise<User> => {
  const existingUser = await getUser(userId)

  if (!existingUser) {
    return await createUser(userId)
  }
  return existingUser
}
