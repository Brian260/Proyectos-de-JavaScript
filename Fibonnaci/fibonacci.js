let n0 = 0;
let n1 = 1;

for(let i=0; i<49;i++){
    let fib = n0 + n1;
    document.write(n0 + " + ");
    n0 = n1;
    n1 = fib;
}

document.write(n0)