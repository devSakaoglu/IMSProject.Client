import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Og_Stajdef } from './og-staj-def';
import { InternshipService } from '../../../../services/common/models/og-staj-def.service'; 

@Component({
  selector: 'app-og-staj-def',
  templateUrl: './og-staj-def.component.html',
  styleUrls: ['./og-staj-def.component.scss']
})
export class OgStajDefComponent implements OnInit {
  ogStajDefs: Og_Stajdef[] = [];
  dataSource: MatTableDataSource<Og_Stajdef>; // Define MatTableDataSource

  constructor(private internshipService: InternshipService) { }

  ngOnInit(): void {
    this.getInternships();
  }

  getInternships(): void {
    this.internshipService.read()
      .then(ogStajDefs => {
        this.ogStajDefs = ogStajDefs;
        this.dataSource = new MatTableDataSource<Og_Stajdef>(this.ogStajDefs); // Initialize MatTableDataSource
      })
      .catch(error => console.error("Error fetching internships", error));
  }

  onSubmit(internship: Og_Stajdef): void {
    console.log(internship);
  }
}
