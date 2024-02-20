import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GetInternshipsRequest } from '../../../contracts/getInternshipsRequest';

@Injectable({
  providedIn: 'root'
})
export class InternshipBookService {
  userID: string | null = localStorage.getItem("userID");
  private apiUrl = `https://imsprojectapi.azurewebsites.net/api/Student/GetStudentById?Id=${this.userID}`;
  baseUrl: any;

  

  constructor(private http: HttpClient) { }

  getInternshipsRequest(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`).pipe(
        map((response: { data: GetInternshipsRequest; }) => response.data as GetInternshipsRequest),

        catchError(error => {
        // Hata işleme
        console.error('Bir hata oluştu:', error);
        throw error;
      },)
    )};

  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append("InternshipId","30000000-0000-0000-0000-000000000000")

    return this.http.post<any>(`https://imsprojectapi.azurewebsites.net/api/Internship/UploadInternshipBook`, formData);
  }

  deleteFile(fileId: string): Observable<any> {
    const url = `${this.baseUrl}/Internship/DeleteFile?id=${fileId}`;
    return this.http.delete<any>(url);
  }
}
