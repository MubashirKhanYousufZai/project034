
// // ABSTRACT CLASS
// abstract class HomeAppliences {
//     private _brand_name:string
//     constructor(brand_name:string){
//         this._brand_name= brand_name
//     }
//     abstract TurnOn():void
//     abstract TurnOff():void
//     GetBrandName(){
//         console.log(`Brand Name:`,this._brand_name);
//     }
// }

// class Microwave extends HomeAppliences{
//     constructor(brand_name:string){
//         super(brand_name)
//     }
//     TurnOn(): void {
//         console.log("Microwaves turns on")
//     }
//     TurnOff(): void {
//         console.log("Microwaves turns off")
//     }
// }

// let a = new Microwave("LG")
// a.GetBrandName()
// a.TurnOn()
// a.TurnOff()

abstract class HomeMachines {
    private _brand_naam: string
    constructor(brand_naam: string){
        this._brand_naam=brand_naam
    }
    abstract SwitchOn():void
    abstract SwitchOff():void
    GetBrandNaam(){
        console.log("Brand Naam:echo "# project034" >> README.md",this._brand_naam);
    }
}

class WashingMachine extends HomeMachines{
    constructor(brand_naam:string){
        super(brand_naam)
    }
    SwitchOn(){
        console.log("WashingMachine turns on.");
    }
    SwitchOff(){
        console.log("WashingMachine turns off.")
    }
}

let w = new WashingMachine("Sony");
w.GetBrandNaam();
w.SwitchOn();
w.SwitchOff();