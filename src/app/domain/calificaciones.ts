export class Qualification{
    id?: string
    nota?: Number;
    fecha?: Date;
    etiqueta?: string

    constructor(id: string, nota: number, fecha: Date, etiqueta: string){
        this.id = id;
        this.nota = nota;
        this.fecha = fecha;
        this.etiqueta = etiqueta;
    }
}

