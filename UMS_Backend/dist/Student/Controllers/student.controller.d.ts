import { StudentForm } from "../DTOs/studentform.dto";
import { StudentService } from "../Services/student.service";
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    getAdmin(): any;
    insertStudent(mydto: StudentForm): any;
    updateIssue(Sid: number, Saddress: string, Snum: string): any;
    getIssuesByStudentID(id: number): any;
    getstudent(id: number): any;
}
