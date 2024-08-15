"use client";
import Carousel from "@/app/components/Carousel";
import Header from "@/app/components/Header";
import { useHeroes } from "@/contexts/HeroContext";

interface IProps{
    params: {
        id: string;
    }
}


export default function Hero({ params: { id }}: IProps){
    const { heroes } = useHeroes();
    console.log('context', heroes)
    return(
        <>
            <Header />
            <Carousel heroes={heroes} activeId={id}/>
        </>
    );
}