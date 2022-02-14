var box1, box2, box3

function setup() 
{
  createCanvas(400, 400);
  box1=new Box()
  box2=new Box()
  box3=new Box()

  
}

function draw() 
{
  background(220);
  box1.display()
  box2.display()
  box3.display()
  box1.setSpeed(3)
  box2.setSpeed(6)
  box3.setSpeed(12)
}

