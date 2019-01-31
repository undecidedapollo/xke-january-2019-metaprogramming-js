function* genFunc() {
    yield 1;
    yield 2;
    yield 3;
}

const iter = genFunc();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
