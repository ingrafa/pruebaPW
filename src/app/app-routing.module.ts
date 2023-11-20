import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AddQualificationComponent } from './pages/agregar calificaciones/add-qualification.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'add-qualification', component: AddQualificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
