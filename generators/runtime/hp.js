const delaySuccess = (tm, val) => new Promise((resolve) => setTimeout(() => resolve(val), tm));
const delayFailure = (tm, val) => new Promise((_, reject) => setTimeout(() => reject(val), tm));
module.exports = {
    delaySuccess,
    delayFailure,
};