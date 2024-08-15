"use client";
import Header from "@/app/components/Header";
import { useHeroes } from "@/contexts/HeroContext";

interface IProps{
    params: {
        id: string;
    }
}


export default function Hero({ params: { id }}: IProps){
    const { heroes } = useHeroes();
    return(
        <>
            <Header />
            <h1>Spider selecionado: {id}</h1>
        </>
    );
}