import { Injectable } from '@angular/core';
import { Qualification } from '../domain/calificaciones';

@Injectable({
  providedIn: 'root'
})
export class QuelificationServiceService {

  qualifications: Qualification[] = []
  constructor() { }

  agregarNota(personaeElement: Qualification) {
    this.qualifications.push(personaeElement);
  }

  buscarNota(id: String): Qualification | undefined {
    for (let qb of this.qualifications) {
      if (qb.id === id) {
        return qb;
      }
    }
    return undefined;
  }

  getNotas(): Qualification[]{
    return this.qualifications;
  }

  eliminarNota(id: String) {
    for(let i  = 0; i < this.qualifications.length; i++){
      if(this.qualifications[i].id === id){
        this.qualifications.splice(i, 1)
        break;
      }
    }
  }

}
