import { Component } from '@angular/core';
import { Qualification } from 'src/app/domain/calificaciones';
import { QuelificationServiceService } from 'src/app/services/quelification-service.service';

@Component({
  selector: 'app-add-qualification',
  templateUrl: './add-qualification.component.html',
  styleUrls: ['./add-qualification.component.css']
})
export class AddQualificationComponent {

  id = '';
  nota = 0;
  fecha: Date = new Date; 
  etiqueta = '';
  buscarId = ''
  eliminar = ''
  qualification: Qualification[] = []
  quelificationsn: Qualification | undefined;

  constructor(private qualifications: QuelificationServiceService){
    this.qualification =qualifications.getNotas();
  }

  agregar(id: string, nota: number, fecha: Date, etiqueta: string) {
    this.qualifications.agregarNota(new Qualification(id, nota, fecha, etiqueta));
    console.log(this.qualifications.getNotas())
  }

  buscarNota(id: String) {
    this.quelificationsn = this.qualifications.buscarNota(id);
    this.id = this.quelificationsn?.id as string
    this.nota = this.quelificationsn?.nota as number
    this.fecha = this.quelificationsn?.fecha as Date
    this.etiqueta = this.quelificationsn?.etiqueta as string
    this.buscarId = '';
  }

  eliminarNota(id: string) {
    this.qualifications.eliminarNota(id);
    this.eliminar = '';
  }

  actualizarNota() {
    if (this.quelificationsn !== undefined) {
      this.quelificationsn.id = this.id;
      this.quelificationsn.nota = this.nota;
      this.quelificationsn.fecha = this.fecha;
      this.quelificationsn.etiqueta = this.etiqueta;      
    }


  }
}
