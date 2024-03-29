import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgBilgiComponent } from './og-bilgi.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ListComponent } from './list/list.component'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 

@NgModule({
  declarations: [
    OgBilgiComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "" ,component: OgBilgiComponent }
    ]),
    MatSidenavModule, MatTableModule, MatPaginatorModule
  ]
})
export class OgBilgiModule { }
