function sumAll(...num){
    let total=0;
    for(let n of num){
        total=total+n;
    }
    return total
}
console.log(sumAll(1,2,3,4))