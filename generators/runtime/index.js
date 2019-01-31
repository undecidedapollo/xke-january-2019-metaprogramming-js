const {
    delayFailure,
    delaySuccess,
} = require("./hp");

const {
    genRuntime,
} = require("./runtime");

genRuntime(function* nonAsyncFunc() {
    const val1 = yield delaySuccess(1000, 1);
    console.log(`Success val: ${val1}`);
    const val2 = yield delaySuccess(2000, 2);
    console.log(`Success val: ${val2}`);

    try {
        const val2 = yield delayFailure(3000, 3);
        console.log(`Success val: ${val2}`);
    } catch(ex) {
        console.log(`Fail val: ${ex}`);
    }

    return "HELLO WORLD";
}, function callback(err, data) {
    if(err) {
        console.error(`An error occured`);
        console.error(err);
        return;
    }

    console.log(`Finished successfully`);
    console.log(data);
});
