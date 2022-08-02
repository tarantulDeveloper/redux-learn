function* generator() {
    for (let i = 0; i < 4; i++) {
        yield i;
    }
}

const iteration = generator();

console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());