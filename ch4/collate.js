function collate(num){
  let counter = 0;
  function collateStep(n){
    return n = (n%2===0 ? n/2 : n*3+1);
  }
  while (num !== 1){
    counter++;
    num = collateStep(num);
  }
  return counter;
}

console.log(collate(18));//20
console.log(collate(7));//16
console.log(collate(16));//4
console.log(collate(1));//0
