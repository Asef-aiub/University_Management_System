import { StudentForm, UpdateStudentform } from "../DTOs/studentform.dto";
import { StudentEntity } from "../Entities/student.entity";
import { Repository } from "typeorm";
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<StudentEntity>);
    getIndex(): any;
    getCourseByID(id: any): any;
    getCourseByIDName(qry: any): any;
    insertStudent(mydto: StudentForm): any;
    updateStudentbyid(mydto: UpdateStudentform, id: any): any;
    updateStudent(Sid: any, Saddress: any, Snum: any): any;
    deleteCoursebyid(id: any): any;
    getNoticeByFacultyId(qry: any): any;
    getGrade(id: any): any;
    getGradeBySemester(id: any): any;
    facultyFeedback(mydto: StudentForm): any;
    getPaymentDetails(qry: any): any;
    getIssuesByStudentID(id: any): any;
    getstudent(id: any): Promise<StudentEntity[] | "No data found">;
}
