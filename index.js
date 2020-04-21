// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius;
  }
  
  get diameter(){
    return this.radius * 2
  }
  
  get circumference(){
    return 2 * Math.PI * this.radius
  }
  
  get area(){
    return Math.PI*(this.radius)
  }
  
  set diameter(diameter){
    this._diameter = this.radius * 2
  }
}