class SquareState {
  constructor(x, y, square){
    this.x = x;
    this.y = y;
    this.square = square;
  }
  equals(other){
    if(this.square == null || other == null || other.square == null)
      return false;
    return (other.x === this.x && other.y === this.y) && this.square.color.equals(other.square.color);
  }
}
