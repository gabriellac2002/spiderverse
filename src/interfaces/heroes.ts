export interface IHeroData {
    id: string;
    name: string;
    universe: number;
    details:{
        fullName: string;
        birthday: string;
        homeland: string;
        heigth: number;
        weigth: number;
    };
}