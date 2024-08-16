import {auth} from "../firebase/firebaseServer"
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function singnup(email: string, password: string) {

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: any) {
        throw new Error(error.message || "Erro ao criar o usuário.");
    }
}