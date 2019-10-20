class Square {  //these are the pixels shown on screen
  constructor(x, y, w, color){
    this.x = x;
    this.y = y;
    this.w = w;
    this.color = color.copy();
  }
  draw(){ //fill rectangle with color at this position
    ctx.save();

    ctx.fillStyle = this.color.string();
    ctx.fillRect(this.x, this.y, this.w, this.w);

    ctx.restore();
  }
  equals(other){
    return this.x === other.x && this.y === other.y && this.w === other.w && this.color.equals(other.color);
  }
}
