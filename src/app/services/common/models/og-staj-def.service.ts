import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";
import { Og_Stajdef } from "../../../contracts/og-staj-def";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class OgStajdefService {
    constructor(private httpClientService: HttpClientService) { }

    read(successCallBack?: (data: Og_Stajdef[]) => void, errorCallBack?: (errorMessage: string) => void): Promise<Og_Stajdef[]> {
        return this.httpClientService.get<any>({ 
            controller: "InternshipBook"
        }).toPromise()
        .then(response => {
            if (response.isSuccess) {
                const data: Og_Stajdef[] = response.data || [];
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