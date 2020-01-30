
//the model simple defines the exchange of data amongst components
//Recipe model defines how a single recipe would look i.e. which data it will carry
export class Recipe{

    public name:string;
    public description:string;
    public imagePath:string;


    constructor(name:string, desc:string, imagePath:string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}