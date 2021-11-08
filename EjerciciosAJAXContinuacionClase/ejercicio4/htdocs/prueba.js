var cadena = "Hola mundo";
var numero = 5;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Down + "" + Direction[2]);
var array;
array = ["Chorizo", "Morcilla", "Chicharos"];
