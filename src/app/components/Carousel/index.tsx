import { IHeroData } from "@/interfaces/heroes";

interface IProps{
    heroes: IHeroData[];
    activeId: string;
}

export default function Carousel({}: IProps){
    return(
        <h1>Carrosel</h1>
    );
}