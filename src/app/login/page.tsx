import React from 'react';
import styles from './login.module.scss';
import Header from '../components/Header';

import { spidermanFont } from "@/fonts";
import { Quicksand } from "next/font/google";
import Link from 'next/link';

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function Login() {
    return (
        <div className={quicksand.className}>
            <Header />
            <div className={styles.container}>
                <div className={styles.loginContainer}>
                    <h1 className={`${spidermanFont.className} ${styles.loginHeader}`}>Login</h1>
                    <form className={styles.loginForm}>
                        <label>Usuário</label>
                        <input type="text" id="username" name="username" />

                        <label>Senha</label>
                        <input type="password" id="password" name="password" />

                        <button type="submit">Entrar</button>
                        <Link href="/singin">
                            <button type="submit">Cadastrar</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
