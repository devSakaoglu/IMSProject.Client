import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OgBilgiService } from '../../../../services/common/models/og-bilgi.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatPaginator } from '@angular/material/paginator';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {
  displayedColumns: string[] = ['AdvisorID', 'StudentNo', 'StudentName', 'StudentSurname', 'TC_NO', 'FacultyName', 'DepartmentName', 'ProgramName', 'GPA', 'StudentGSMNumber', 'Address', 'Email'];
  dataSource: MatTableDataSource<any>; // MatTableDataSource'i boş olarak tanımlıyoruz, çünkü veri henüz alınmamış.

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    spinner: NgxSpinnerService,
    private ogbilgiService: OgBilgiService
  ) {
    super(spinner);
    this.dataSource = new MatTableDataSource<any>(); // MatTableDataSource'i burada initialize ediyoruz.
  }

  async ngOnInit() {
    this.showSpinner(SpinnerType.BallNewton);
    await this.ogbilgiService.read(
        (data) => {
            this.dataSource.data = data; // Assign the data to the dataSource
            this.dataSource.paginator = this.paginator;
            this.hideSpinner(SpinnerType.BallNewton);
        },
        (errorMessage) => {
            console.error(errorMessage); // Log the error message
            this.hideSpinner(SpinnerType.BallNewton);
        }
    );
}
}
