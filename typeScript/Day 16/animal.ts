class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
class dog extends Animal {
    constructor(name:string){super(name);}
    move(distanceInMeters = 50){
    console.log("woof! woof!");
    super.move(distanceInMeters);
}
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
let Monkey: Animal = new dog("Monkey the dog")
sam.move();
tom.move(34);
Monkey.move(50)
// output using node ex2.js