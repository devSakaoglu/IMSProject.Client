import { Component } from '@angular/core';
import { InternshipBookService } from '../../../services/common/models/internship-book.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../../services/ui/custom-toastr.service';
import { OnInit } from '@angular/core';
import { GetInternshipsRequest } from '../../../contracts/getInternshipsRequest';


@Component({
   selector: 'app-student-intership-approval',
   templateUrl: './student-intership-approval.component.html',
   styleUrls: ['./student-intership-approval.component.scss']
})
export class StudentIntershipApprovalComponent implements OnInit{
   internshipInfo: any;


   selectedFile: File | null = null;

   constructor(private bookService: InternshipBookService, private toastrService: CustomToastrService) { }

   ngOnInit(): void {
      // Servisten öğrenci bilgilerini al
      this.bookService.getInternshipsRequest().subscribe(
        (response) => {
          this.internshipInfo = response; // API'den gelen öğrenci bilgilerini değişkene ata
        },
        (error) => {
          console.error('Öğrenci bilgileri alınamadı:', error);
        }
      );
    }
  

   onFileSelected(event: any) {
      this.selectedFile = event.target.files[0] as File;
   }

   uploadFile() {
      if (this.selectedFile) {
         this.bookService.uploadFile(this.selectedFile).subscribe(
            (response) => {
               console.log('Dosya yükleme başarılı:', response);
               this.toastrService.message("Dosya yükleme başarılı.", "Başarılı", {
                  messageType: ToastrMessageType.Success,
                  position: ToastrPosition.TopRight
               });
            },
            (error) => {
               console.error('Dosya yükleme hatası:', error);
               this.toastrService.message("Dosya yükleme başarısız.", "Hata", {
                  messageType: ToastrMessageType.Error,
                  position: ToastrPosition.TopRight
               });
            }
         );
      } else {
         console.warn('Lütfen bir dosya seçin.');
      }
   }
   deleteFile() {
      if (this.selectedFile) {
         const fileId = '/api/Internship/GetInternshipByInternshipId'; 
         
         this.bookService.deleteFile(fileId).subscribe(
            (response) => {
               console.log('Dosya silme başarılı:', response);
               this.toastrService.message("Dosya silme başarılı.", "Başarılı", {
                  messageType: ToastrMessageType.Success,
                  position: ToastrPosition.TopRight
               });
            },
            (error) => {
               console.error('Dosya silme hatası:', error);
               this.toastrService.message("Dosya silme başarısız.", "Hata", {
                  messageType: ToastrMessageType.Error,
                  position: ToastrPosition.TopRight
               });
            }
         );
      } else {
         console.warn('Lütfen bir dosya seçin.');
      }
   }
   
}   