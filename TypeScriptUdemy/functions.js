function add2(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
log("patlka");
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
var loga = logAndThrow("Error occurred");
console.log(loga);
