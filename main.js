function setup() {
    canvas=createCanvas(300,300)
    canvas.position(200,300)
    video=createCapture(VIDEO)
    video.size(200,200)
    video.hide()
}

function draw() {
    
    
    image(video,75,75,150,150)
    
    circle(0,0,100)
    rect(100,250,100,50)
    rect(200,0,100,50)
    fill("firebrick")
        rect(0,25,50,150)
    rect(0,250,50,50)
    rect(250,100,50,75)
    fill("aquamarine")
    rect(250,250,50,75)
    circle(170,0,100)
    circle(70,300,100)
    fill("chocolate")
    circle(300,200,100)
    circle(210,300,100)
    
    rect(30,0,100,50)
    fill("lime")
    
    circle(300,75,75)
    circle(0,210,100)
     circle(0,0,100)
     
     fill("yellow")
    }
function take_snapshot() {
    save("eishitisthebest.png")
}
