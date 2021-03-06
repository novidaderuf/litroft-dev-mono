import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutoListComponent } from '../instituto-list/instituto-list.component';
import { InstitutoFormComponent } from '../instituto-form/instituto-form.component';
import { MaterialModule } from 'src/app/material/material.module';
import { InstitutoComponent } from '../instituto.component';
import { InstiutoRoutingModule } from './instituto-routing.module';
import { InstitutoDetalheComponent } from '../instituto-detalhe/instituto-detalhe.component';

@NgModule({
  declarations: [
    InstitutoComponent,
    InstitutoListComponent,
    InstitutoFormComponent,
    InstitutoDetalheComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InstiutoRoutingModule
  ],
  exports: []
})
export class InstitutoModule {

}
