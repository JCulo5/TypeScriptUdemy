var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var names = ['Max', 'Manu'];
var store = {};
store.name = 'Max';
store.isInsturctor = true;
function merge(a, b) {
    return [a, b];
}
var ids = merge(1, 2);
var bds = merge('hello', 'world');
console.log(ids);
console.log(bds);
function mergeObj(a, b) {
    return __assign(__assign({}, a), b);
}
var mergedObj = mergeObj({ name: 2 }, { age: 30 });
console.log(mergedObj);
