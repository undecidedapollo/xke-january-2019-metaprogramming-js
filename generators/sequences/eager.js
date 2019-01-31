const range = require("lodash/range");


const vals = range(0, 1000, 1).map(x => x * 2).filter(x => x % 4 === 0).slice(0, 10);

for(const val of vals) {
    console.log(val);
}