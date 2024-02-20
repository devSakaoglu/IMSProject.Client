export interface List_OgBilgi {
    advisorID: string;
    studentNo: string;
    studentName: string;
    studentSurname: string;
    tC_NO: string;
    facultyName: string;
    departmentName: string;
    programName: string;
    gpa: number; // Note: Changed from '0' to 'number'
    studentGSMNumber: string;
    address: string;
    email: string;
}



// public Guid? AdvisorID { get; set; }
// public string StudentNo { get; set; }
// public string StudentName { get; set; }
// public string StudentSurname { get; set; }
// public string TC_NO { get; set; }
// public string FacultyName { get; set; }
// public string DepartmentName { get; set; }
// public string ProgramName { get; set; }
// public float GPA { get; set; }
// public string StudentGSMNumber { get; set; }
// public string Address { get; set; }
// public string Email { get; set; }