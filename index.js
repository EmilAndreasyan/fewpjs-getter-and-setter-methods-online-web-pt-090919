// Add your Circle class here
class Bird {
  constructor(name){
    this.name = name;
  }
  set phrase(phrase){
    this._phrase = phrase;
  }
  
  get speak(){
    return `${this.name} says ${this._phrase || 'squawk'}`
  }
}

let daffy = new Bird("Daffy");
daffy.speak
daffy.phrase = "It's rabbit season"
daffy.speak