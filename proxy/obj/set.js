const _ = require("lodash");

const myObj = {
    a: 1,
    b: 2,
};

const prx = new Proxy(myObj, {
    set: function getHandler(target, prop, val) {
        console.log(`set: ${prop}`);
        if(!_.isInteger(val)) {
            throw new Error(`val:${val} for prop: ${prop} must be an integer`);
        }

        target[prop] = val;
    }
});

prx.a = 10;
prx.b = 5;

try {
    prx.c = 3.14159;
} catch(ex) {
    console.log(ex);
}

console.log(prx);
