"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.getFullName = function () {
        return this.id + ' ' + this.firstName + ' ' + this.lastName;
    };
    return Employee;
}());
exports.Employee = Employee;
