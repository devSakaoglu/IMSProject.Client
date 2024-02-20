export interface GetInternshipsRequest {
    getInternshipsRequest(): unknown;

    level: InternshipLevel | null;
    fullName: string;
    companyName: string;

    
}
export enum InternshipLevel {
    InternshipI = 1,
    InternshipII = 2,
    InternshipIII = 3,
  }