function abs(x) {
  return (x < 0 ? -x : x);
}
/*console.log(
abs(-5) + " " +
abs(5) + " " +
abs(0) + " " +
abs(100) + " " +
abs(-100) + " " +
abs(-1234564323456.23454321345)
);*/

function max(x,y) {
  return (x > y ? x : y);
}

function min(x,y) {
  return (x > y ? y : x);
}

function testMax() {
  console.log("max3,6: " + max(3,6));
  console.log("max-3,-6: " + max(-3,-6));
  console.log("max6,6: " + max(6,6));
}

function testMin() {
  console.log("min3,6: " + min(3,6));
  console.log("min-3,-6: " + min(-3,-6));
  console.log("min6,6: " + min(6,6));
}

function posOrNeg(x) {
  if (x<0){
    console.log(x +" is negative");
  } else if (x>0) {
    console.log(x + " is positive")
  } else {
    console.log(x + " is zero")
  }
}
//
// posOrNeg(-1);
// posOrNeg(0);
// posOrNeg(1);

function song(day){
  let suffix = "";
  switch(day){
    case 1: suffix = "st"; break;
    case 2: suffix = "nd"; break;
    case 3: suffix = "rd"; break;
    default: suffix = "th";
  }
  console.log("On the " + day + suffix + " day of Christmas, my true love" +
   " gave to me");
  switch(day){
    case 12: console.log("Twelve drummers drumming");
    case 11: console.log("Eleven pipers piping");
    case 10:console.log("Ten lords a-leaping");
    case 9:console.log("Nine ladies dancing");
    case 8:console.log("Eight maids a-milking");
    case 7:console.log("Seven swans a-swimming");
    case 6:console.log("Six geese a-laying");
    case 5:console.log("Five gold rings");
    case 4:console.log("Four colly birds");
    case 3:console.log("Three french hens");
    case 2:console.log("Two turtle doves, and");
    case 1:console.log("A partridge in a pear tree");
  }
}

function factorial(num) {
  let result = 1;
  for (let i =num; i > 0; i--){
    result *= i;
  }
  console.log(result);
}
factorial(7);
factorial(6);
factorial(5);
