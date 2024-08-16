"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './singin.module.scss';
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
    const [message, setMessage] = useState<{type: string, text: string} | null>(null);

   
    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
       
        try {
            const user = await singnup(email, password);
            setMessage({type: 'success', text: `Cadastro realizado com sucesso! Bem-vindo, ${user.email}.`});

             
        } catch (error: any) {
            setMessage({type: 'error', text: `Erro ao realizar o cadastro: ${error.message}`});
        }
    };

    return (
        <div className={quicksand.className}>
            <Header />
            <div className={styles.container}>
                <div className={styles.loginContainer}>
                    <h1 className={`${spidermanFont.className} ${styles.loginHeader}`}>Cadastre-se</h1>
                    
                    {message && (
                        <div 
                            className={`p-4 mb-4 text-sm rounded-lg ${
                                message.type === 'success' ? 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400' :
                                message.type === 'error' ? 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400' :
                                ''
                            }`}
                            role="alert"
                        >
                            <span className="font-medium">{message.type === 'success' ? 'Success!' : 'Error!'}</span> {message.text}
                        </div>
                    )}
                    
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
                    </form>
                </div>
            </div>
        </div>
    );
}
