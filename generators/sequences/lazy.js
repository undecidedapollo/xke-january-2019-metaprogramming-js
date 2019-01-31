const {
    range,
} = require("@pylot/flow");

const map = require("@pylot/flow/operators/map");
const filter = require("@pylot/flow/operators/filter");
const take = require("@pylot/flow/operators/take");

const vals = range(0, 1000, 1).pipe(map(x => x * 2), filter(x => x % 4 === 0), take(10)).getIterator();

for(const val of vals) {
    console.log(val);
}
