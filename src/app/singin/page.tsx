import React, { useState } from 'react';
import styles from './signin.module.scss';
import Header from '../components/Header';
import { spidermanFont } from "@/fonts";
import { Quicksand } from "next/font/google";
import { singnup } from '@/utils/services/authService';

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Função para lidar com o cadastro do usuário
    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const user = await singnup(email, password);
            console.log("Usuário cadastrado com sucesso:", user);
            
        } catch (error: any) {
            setError(error.message);
            console.error("Erro ao cadastrar:", error);
        }
    };

    return (
        <div className={quicksand.className}>
            <Header />
            <div className={styles.container}>
                <div className={styles.loginContainer}>
                    <h1 className={`${spidermanFont.className} ${styles.loginHeader}`}>Cadastre-se</h1>
                    <form className={styles.loginForm} onSubmit={handleSignup}>
                        <label>Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />

                        <label>Senha</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />

                        <button type="submit">Cadastrar</button>
                        
                        {error && <p className={styles.error}>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}
