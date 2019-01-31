const myObj = {
    a: 1,
    b: 2,
};

const prx = new Proxy(myObj, {
    get: function getHandler(target, prop) {
        console.log(`get: ${prop}`);
        if(prop in target) {
            return target[prop] * 2;
        }

        return 42;
    }
});


console.log(prx.a);
console.log(prx.b);
console.log(prx.c);