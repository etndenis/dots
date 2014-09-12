function onMousedown(e){
  var pos = getMousePos(canvas, e);
  var gridRow = Math.floor((pos.y - GAME.grid.origin[1])/(GAME.grid.dotRadius*2+GAME.grid.dotSpacing)+.5)
  var gridColumn = Math.floor((pos.x - GAME.grid.origin[0]-(gridRow+1)%2*(GAME.grid.dotRadius+GAME.grid.dotSpacing/2))/(GAME.grid.dotRadius*2+GAME.grid.dotSpacing*2  )+.5)-GAME.grid.boardConfig[gridRow][0]
  console.log(gridRow + " " + gridColumn + " " + GAME.grid.boardConfig[gridRow])
  GAME.grid.grid[gridRow][gridColumn].color = "red"
}


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

/*
function onMousemove(e){
  var pos = getMousePos(canvas, e);
  //console.log(GAME.boids.length)
    for (var i = GAME.ui.buttons.length - 1; i >= 0; i--) {
      if (GAME.ui.buttons[i].isClicked(pos.x,pos.y)) {
        GAME.ui.buttons[i].fillStyle = "rgb(80,80,80)";
      }
      else
        GAME.ui.buttons[i].fillStyle = "rgb(50,50,50)";
    };
  

}
*/