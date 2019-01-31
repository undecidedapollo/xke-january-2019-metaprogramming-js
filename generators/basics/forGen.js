function* genFunc() {
    yield 1;
    yield 2;
    yield 3;
}

for(const val of genFunc()) {
    console.log(val);
}
