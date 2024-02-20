import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";
import { List_OgBilgi } from "../../../contracts/list_ogbilgi";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class OgBilgiService {
    constructor(private httpClientService: HttpClientService) { }

    read(successCallBack?: (data: List_OgBilgi[]) => void, errorCallBack?: (errorMessage: string) => void): Promise<List_OgBilgi[]> {
        return this.httpClientService.get<any>({ 
            controller: "Student"
        }).toPromise()
        .then(response => {
            if (response.isSuccess) {
                const data: List_OgBilgi[] = response.data || [];
                if (successCallBack) successCallBack(data); 
                return data;
            } else {
                const errorMessage = response.message || 'Unknown error occurred';
                if (errorCallBack) errorCallBack(errorMessage); 
                throw new Error(errorMessage);
            }
        })
        .catch(error => {
            const errorMessage = error.message || 'Unknown error occurred';
            if (errorCallBack) errorCallBack(errorMessage); 
            throw error;
        });
    }
}