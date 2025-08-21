let miObjeto;
let vecto=[];

function preload() {
  img = loadImage('imagen.png'); // carga imagen
}

function setup() {
  createCanvas(600, 400);
  miObjeto = new Objeto(img, 50, 50, 50, 50); // posición y tamaño inicial
  otroObjeto = new Objeto(img, 150, 150, 50, 50); 

  for(let i = 0; i < 10; i++){//que fiaca crear uno por uno, mejor un vector
      vecto[i]= new Objeto(img, 50, 50, 50, 50);
  }
}

function draw() {
  background(220);
  miObjeto.mostrar();
  miObjeto.detectarMouse();
  otroObjeto.mostrar();
  otroObjeto.detectarMouse();
  for(let i = 0; i < 10; i++){ //lo mismo pero 10 objetos de una
      vecto[i].mostrar();
      vecto[i].detectarMouse();
  }
}

class Objeto {
  constructor(img, x, y,z,zz) { //el constructor que define caracteristicas
    this.img = img;
    this.x = x;
    this.y = y;
    this.ancho = z;
    this.alto = zz;
  }
  
  mostrar() {
    image(this.img, this.x, this.y,this.ancho, this.alto); //hacer que aparezca
  }
  
  detectarMouse() {
    // verifica si el mouse esta encima de la imagen
    if (
      mouseX > this.x &&
      mouseX < this.x + this.ancho &&
      mouseY > this.y &&
      mouseY < this.y + this.alto
    ) {
      // cambia coordenadas x y con random 
      this.x = random(width - this.ancho);
      this.y = random(height - this.alto);
    }
  }
}
