var Stitch, StitchImg;

function preload()
{
    StitchImg = loadAnimation("img/Stitch.jpeg");
}

function setup()
{
    createCanvas(1350,650);
    Stitch = createSprite(700,100);
    Stitch.addAnimation("Stitch",StitchImg);
    Stitch.scale = 0.9;  

}

function draw()
{
    background("#9ACAE7");

        if(keyDown("space"))

        {
            Stitch.velocityY = -5;
        }
            
            Stitch.velocityY = Stitch.velocityY + 0.1;
            
         
        fill("black");
        text("Estudar é o caminho para o sucesso.",600, 300);
    
    drawSprites();
}