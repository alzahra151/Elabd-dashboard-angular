export interface Product {
    EnName:string;
    ArName:string;
    Ardiscreption:string;
    Endiscreption:string;
    Image:string,
    Amount:number
    Price:number;
    EnCategories:Array<string>
    ArCategories:Array<string>
    NumberOfFav:number
    NumberOfCarts:number
}
