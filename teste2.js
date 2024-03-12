function fibonacci(num) {
    let n1 = 0;
    let n2 = 1;
    let n3 = 1;
    while (n3<=num) {
        if(n3===num){
            return true;
        }
        n3 = n1 + n2;
        n1=n2;
        n2=n3
    }
    return false;
}

if (fibonacci(67 /*substitua o parametro pelo valor desejado */)) {
    console.log("faz parte da sequencia de fibonacci");
}
else{
    console.log("não faz parte da sequencia de fibonacci");
}
