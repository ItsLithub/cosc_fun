/*global GWindow, GRect, GLabel, GLine, GCircle, GOval*/
function helloWorld(){
  console.log("Hello, world");
}
function graphicsHelloWorld() {
  let gw = GWindow(500,200);
  let msg = GLabel("Hello, World",50,100);
  msg.setColor(randomColor());
  //let msg2 = GLabel("asdfghj",50,150);
  gw.add(msg);
  //gw.add(msg2);
  // setTimeout(location.reload(),10000);
}

function randomColor(){
  let col = "";
  let hex = 0, stp = 0, op = 0;
  for (let i=0; i<3; i++){
    hex = Math.floor(Math.random()*256);
    op = hex%16;
    stp = (hex-op)/16;

    switch(op) {
      case 10: op = "A"; break;
      case 11: op = "B";  break;
      case 12: op = "C"; break;
      case 13: op = "D"; break;
      case 14: op = "E"; break;
      case 15: op = "F"; break;
      default: op = op.toString();
    }

    switch(stp) {
      case 10: stp = "A"; break;
      case 11: stp = "B";  break;
      case 12: stp = "C"; break;
      case 13: stp = "D"; break;
      case 14: stp = "E"; break;
      case 15: stp = "F"; break;
      default: stp = stp.toString();
    }
    col += stp;
    col += op;
  }
  return "#" + col;
}

function blueRectancgle() {
  let gw = GWindow(500,200);
  for (let i=0; i<500; i+=10){
    for (let j=0; j<200; j+=10){
      let rect = GRect(i,j,10,10);
      rect.setColor(randomColor());
      rect.setFilled(true);
      gw.add(rect);
    }
  }
  setTimeout(location.reload(),10000);
}

function drawDiagonals(){
  let gw = GWindow(500,200);
  gw.add(GLine(0,0,500,200));
}

function target(){
  let gw = GWindow(500,200);
  let color1 = randomColor(), color2 = randomColor();
  let outer = filledCircle(250,100,75,color1),
    inner = filledCircle(250,100,25,color1),
    middle = filledCircle(250,100,50,color2);
  colorCircles(outer,middle,inner);
  gw.add(outer);
  gw.add(middle);
  gw.add(inner);
  //for (let i=0;i<100;i++) {
  //  setTimeout(colorCircles(inner, middle, outer),1000);
  //}

  setTimeout(window.location.reload.bind(window.location),1000);
}

function filledCircle(xcord, ycord, radius,color){
  let circle = GOval(xcord-radius,ycord-radius,radius*2,radius*2);
  circle.setFilled(true);
  circle.setColor(color);
  return circle;
}

function colorCircles(circleOne,circleTwo,circleThree){
  let color1=randomColor(),color2=randomColor();
  circleOne.setColor(color1);
  circleTwo.setColor(color2);
  circleThree.setColor(color1);
}
