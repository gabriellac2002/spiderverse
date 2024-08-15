import { IHeroData } from "@/interfaces/heroes";
import HeroDetails from "../HeroDetails";

interface IProps{
    heroes: IHeroData[];
    activeId: string;
}

export default function Carousel({heroes, activeId}: IProps){
    console.log('herois:', heroes)
    return(
        <>
            <h1>Carrosel: {activeId}</h1>
            <HeroDetails data={heroes[0]} />
        </>
    );
}