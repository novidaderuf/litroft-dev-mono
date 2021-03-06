import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GruposComponent } from '../grupos.component';

import { GrupoListComponent } from './../grupo-list/grupo-list.component';
import { GrupoFormComponent } from '../grupo-form/grupo-form.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { GrupoDetalheComponent } from '../grupo-detalhe/grupo-detalhe.component';

const route: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: GruposComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        component: GrupoListComponent
      },
      {
        path: 'add',
        canActivate: [AuthGuard],
        component: GrupoFormComponent
      },
      {
        path: 'edit/:id',
        canActivate: [AuthGuard],
        component: GrupoFormComponent
      },
      {
        path: 'detalhe/:id',
        canActivate: [AuthGuard],
        component: GrupoDetalheComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
