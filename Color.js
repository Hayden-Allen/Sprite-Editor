class Color { //simple color data
  constructor(r, g, b, a){
    this.r = r; //red
    this.g = g; //green
    this.b = b; //blue
    this.a = a || 255;  //default opacity is full
  }
  copy(){
    return new Color(this.r, this.g, this.b, this.a);
  }
  equals(color){
    return this.r === color.r && this.g === color.g && this.b === color.b && this.a === color.a;
  }
  equalsWithin(color, tolerance){ //difference between each pair of elements must be <= tolerance
    if(color == null)
      return false;
    return (Math.abs(this.r - color.r) <= tolerance) && (Math.abs(this.g - color.g) <= tolerance) && (Math.abs(this.b - color.b) <= tolerance);
  }
  clamp(x, min, max){ //xlamps x to range [min, max]
    return Math.max(min, Math.min(x, max));
  }
  pad(s, l){  //pad string (for fillStyle)
    while(s.length < l)
      s = "0" + s;
    return s;
  }
  setRed(r){
    this.r = this.clamp(r, 0, 255);
  }
  setGreen(g){
    this.g = this.clamp(g, 0, 255);
  }
  setBlue(b){
    this.b = this.clamp(b, 0, 255);
  }
  setAlpha(a){
    this.a = this.clamp(a, 0, 255);
  }
  string(){ //return hex string
    let red = this.pad(this.r.toString(16), 2);
    let green = this.pad(this.g.toString(16), 2);
    let blue = this.pad(this.b.toString(16), 2);
    let alpha = this.pad(this.a.toString(16), 2);
    return "#" + red + green + blue + alpha;
  }
}
