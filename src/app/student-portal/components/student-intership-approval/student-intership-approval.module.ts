import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentIntershipApprovalComponent } from './student-intership-approval.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    StudentIntershipApprovalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild([
      {path: "", component: StudentIntershipApprovalComponent}
    ])

  ],
  exports:[
    
  ]
})
export class StudentIntershipApprovalModule { }
