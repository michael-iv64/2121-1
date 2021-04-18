export class SystemClass {
    constructor(name, size, img, x, y){
      this.name = name;
      this.size = size;
      this.img = img;
      this.x = x;
      this.y = y;
    }
    getCoords(ship1, station2) {
      return {ship1:{name : this.name, x :this.x, y: this.y}, station:{name : this.name, x :this.x, y: this.y} }
    }
  }