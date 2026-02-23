

$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1100,100,100,20,"#519e42")
createPlatform(1300,100,100,20,"#519e42")
createPlatform(1100,100,25,400,"#519e42")
createPlatform(1100,500,300,20,"#519e42")
createPlatform(1375,100,25,400,"#519e42")
createPlatform(100,650,150,20,"#519e42")
createPlatform(350,520,150,20,"#519e42")
createPlatform(600,400,150,20,"#519e42")
createPlatform(800,275,150,20,"#519e42")
createPlatform(1000,150,100,20,"#519e42")
createPlatform(1100,225,125,20,"#519e42")
createPlatform(1300,300,100,20,"#519e42")
createPlatform(1100,400,100,20,"#519e42")
createPlatform(1100,625,25,150,"#519e42")
createPlatform(1125,625,100,20,"#519e42")
createPlatform(1300,500,25,100,"#519e42")
createPlatform(100,200,100,20,"#519e42")
createPlatform(200,150,20,50,"#519e42")
createPlatform(300,225,250,20,"#519e42")
createPlatform(10,10,200,20,"#519e42")
    // TODO 3 - Create Collectables
createCollectable("treble", 1300,450)
createCollectable("treble", 1150,680)
createCollectable("treble",100,150)
    
    // TODO 4 - Create Cannons
("top",200,2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
