"use client"
import React, { useState } from 'react';
import styles from './login.module.scss';
import Header from '../components/Header';
import { spidermanFont } from "@/fonts";
import { Quicksand } from "next/font/google";
import Link from 'next/link';
import { loginUser } from '@/utils/services/authService';

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState<{ type: string; text: string } | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const { user, error } = await loginUser(email, password);

        if (user) {
            setMessage({ type: 'success', text: `Bem-vindo, ${user.email}!` });
            setTimeout(() => {
                
                window.location.href = '/';
            }, 3000);
        } else if (error) {
            setMessage({ type: 'error', text: error });
        }
    };

    return (
        <div className={quicksand.className}>
            <Header />
            <div className={styles.container}>
                <div className={styles.loginContainer}>
                    <h1 className={`${spidermanFont.className} ${styles.loginHeader}`}>Login</h1>
                    
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
                    
                    <form className={styles.loginForm} onSubmit={handleLogin}>
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

                        <button type="submit">Entrar</button>
                        <Link href="/singin">
                           
                            <button type="button">Cadastrar</button>
                            
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
