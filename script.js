//PRELOAD JSON FILE

function preload() {
    data = loadJSON("data1.json");
  }
  
  // ARC VARIABLES
  var angles = [ 3, 10, 45, 350, 60, 38, 75, 67 ];
  
  function setup() {
    createCanvas(600, 600);
    noStroke();
  }
  
  function draw() {
    background(300);
    
    //pieChart
    pieChart(500, angles);
    
    //circle-on-top
    fill(300, 300, 300);
    ellipse (width/2, 300, 420, 420);
    
  }
  function pieChart(diameter, data) {
    var lastAngle = 0;
    for (var i = 0; i < data.length; i++) {
      var gray = map(i, 0, data.length, 0, 255);
      fill(gray);
      arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
      lastAngle += radians(angles[i]);
    }
  
  
  }