class Car {
    model: String;
    doors: Number;
    isElectric: Boolean;
    
    constructor(model: String, doors: Number, isElectric: Boolean) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }

    make(): void {
        document.write(`This car is an ${this.model} which has ${this.doors} doors` );
    }
}
let newCar = new Car('Innova', 4, true);
newCar.make();
