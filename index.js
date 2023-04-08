function receivesAFunction(callback){
    const spy = callback()
}
    
    function returnsANamedFunction () {
        return function cb() { }
    }
    var fn = returnsANamedFunction
    
function returnsAnAnonymousFunction() {
    return function () {}
}
var fn = returnsAnAnonymousFunction