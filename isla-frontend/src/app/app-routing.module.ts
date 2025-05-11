import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HogueraListComponent } from './components/hogueras/hoguera-list/hoguera-list.component';
import { HogueraFormComponent } from './components/hogueras/hoguera-form/hoguera-form.component';
import { ParticipanteListComponent } from './components/participantes/participante-list/participante-list.component';
import { ParticipanteFormComponent } from './components/participantes/participante-form/participante-form.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
  
  // Hogueras
  { path: 'hogueras', component: HogueraListComponent },
  { path: 'hogueras/nueva', component: HogueraFormComponent },
  { path: 'hogueras/editar/:id', component: HogueraFormComponent },

  // Participantes
  { path: 'participantes', component: ParticipanteListComponent },
  { path: 'participantes/nuevo', component: ParticipanteFormComponent },
  { path: 'participantes/editar/:id', component: ParticipanteFormComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
