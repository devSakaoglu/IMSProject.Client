import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GetStudentRequest } from '../../../contracts/getStudentRequest';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   
    userID: string | null = localStorage.getItem("userID");
   
    private apiUrl = `https://imsprojectapi.azurewebsites.net/Student/GetStudentById?Id=${this.userID}`; // API URL'sini buraya yerleştirin

  constructor(private http: HttpClient) {}

  // API'den öğrenci bilgilerini al
  getStudentInfo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`).pipe(
        map((response: { data: GetStudentRequest; }) => response.data as GetStudentRequest),
        
        catchError(error => {
        // Hata işleme
        console.error('Bir hata oluştu:', error);
        throw error;
      })
    );
  }
}