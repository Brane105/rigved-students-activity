var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.make = function () {
        document.write("This car is an ".concat(this.model, " which has ").concat(this.doors, " doors"));
    };
    return Car;
}());
var newCar = new Car('Innova', 4, true);
newCar.make();
