function iterLoop(cb, iter, err, val) {
    try {
        const res = err ? iter.throw(err) : iter.next(val);
        if (res.done) {
            return setImmediate(() => cb(null, res.value));
        }
        res.value.then(val => iterLoop(cb, iter, null, val), err => iterLoop(cb, iter, err));
    } catch(ex) {
        return setImmediate(() => cb(ex));
    }
}

function genRuntime(getIteratorFunc, cb) {
    const iter = getIteratorFunc()[Symbol.iterator]();
    iterLoop(cb, iter);
}

module.exports = {
    genRuntime,
};