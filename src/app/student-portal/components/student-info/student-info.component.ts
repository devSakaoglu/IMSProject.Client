import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/common/models/student.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {
  studentInfo: any; // Öğrenci bilgilerini tutacak değişken

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    // Servisten öğrenci bilgilerini al
    this.studentService.getStudentInfo().subscribe(
      (response) => {
        this.studentInfo = response; // API'den gelen öğrenci bilgilerini değişkene ata
      },
      (error) => {
        console.error('Öğrenci bilgileri alınamadı:', error);
      }
    );
  }
}