var bruno

var chorao

var choraopng

var brunojpg

function preload(){
  //imagens pré-carregadas
  brunojpg=loadAnimation("Runner-1.png","Runner-2.png");
  choraopng=loadImage("path.png");
}
function setup(){
  createCanvas(400,400);
  chorao=createSprite(200,345,400,5)
  chorao.addAnimation("roblox",choraopng);
  bruno=createSprite(200,330,25,25)
  chorao.velocityY=3
  bruno.addAnimation("cabeça",brunojpg);
  bruno.scale=0.1;
  //crie sprite aqui
}

function draw() {
  if(chorao.y>400)
{
chorao.y=height/2
}
drawSprites();
}
