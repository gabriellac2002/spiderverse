import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export async function singnup(email: string, password: string) {
    const auth = getAuth();

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: any) {
        throw new Error(error.message || "Erro ao criar o usuário.");
    }
}