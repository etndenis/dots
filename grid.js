function grid(){
  this.origin = [100,100]
  this.grid;
  this.dotRadius = 20;
  this.dotSpacing = 9;
  this.boardConfig = [[2,6],[2,7],[1,8],[1,9],[0,10],[0,11],[0,10],[1,9],[1,8],[2,7],[2,6]] //make board a circle
  this.clear();
}

grid.prototype.clear = function(){
  this.grid = new Array(this.boardConfig.length-1)
  for (var r = this.boardConfig.length - 1; r >= 0; r--) {
    this.grid[r] = new Array(this.boardConfig[r][1]-1)
    for (var c = this.boardConfig[r][1]-1; c >= 0; c--) {
       this.grid[r][c]= new dot("grey", this.dotRadius, this.origin[0] + (c+this.boardConfig[r][0])*2*(this.dotRadius+this.dotSpacing)+(r+1)%2*(this.dotRadius+this.dotSpacing/2), this.origin[1]+r*(this.dotRadius*2+this.dotSpacing))
     }; 
  };
}

grid.prototype.draw = function(){
  for (var x = this.grid.length - 1; x >= 0; x--) {
    for (var y = this.grid[x].length - 1; y >= 0; y--) {
        this.grid[x][y].draw();
    };
  };
}

grid.prototype.act = function(){
  this.draw();
}