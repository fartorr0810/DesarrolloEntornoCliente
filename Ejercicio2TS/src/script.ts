function Matematicas(target:Function) {
}

@Matematicas
export class Operaciones {
    public numuno:number;
    public numdos:number;
    
    constructor(a:number,b:number) { 
        this.numuno=a;
        this.numdos=b;
    }
    public sumar() {
        return this.numuno+this.numdos;
      }
    public Restar() {
        return this.numuno-this.numdos;      }
    public Multiplicar() {
        return this.numuno*this.numdos;      }
    public Dividir() {
        return this.numuno/this.numdos;      }
}