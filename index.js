// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
   console.log (cats.push(name));
}
function destructivelyPrependCat(name) {
    console.log (cats.unshift(name));
}
function  destructivelyRemoveLastCat() {
    console.log (cats.pop());
}
function  destructivelyRemoveFirstCat() {
    console.log (cats.shift());
}
function appendCat(name) {
var newArray = cats.slice();
newArray.push(name)
return newArray
}
function prependCat(name) {
    var newRrray = cats.slice();
    newRrray.unshift(name)
    return newRrray
    }
    function removeLastCat() {
        var rLastCat = cats.slice();
        rLastCat.pop()
        return rLastCat

    }
    function removeFirstCat() {
        var rFirstCat = cats.slice();
        rFirstCat.shift()
        return rFirstCat
    }