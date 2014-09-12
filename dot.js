function dot(color, radius, x, y){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color || "grey";
}

dot.prototype.draw = function(){
  GAME.ctx.beginPath();
  GAME.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false)
  GAME.ctx.closePath();
  GAME.ctx.fillStyle = this.color;
  GAME.ctx.fill();
}