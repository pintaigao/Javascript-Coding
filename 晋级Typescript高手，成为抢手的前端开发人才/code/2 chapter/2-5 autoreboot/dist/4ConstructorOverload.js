"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isShapeObj(obj) {
    return Boolean(obj && obj.isShapObj === true);
}
var Square = /** @class */ (function () {
    function Square(value_, value2_) {
        if (isShapeObj(value_)) {
            this.height = value_.height || 0;
            this.width = value_.width || 0;
        }
        else {
            this.width = value_ || 0;
            this.height = value2_ || 0;
        }
    }
    Square.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Square;
}());
var shapeParms_Inter = { width: 30, height: 50, isShapObj: true };
var square1 = new Square(shapeParms_Inter);
console.log(square1);
var square2 = new Square(9, 5);
console.log(square2.getArea()); //1500
