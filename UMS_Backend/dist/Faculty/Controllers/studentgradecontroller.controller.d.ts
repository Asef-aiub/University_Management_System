import { StudentgradeDTO } from '../DTOs/studentgradeDto.dto';
import { StudentGradeService } from '../Services/studentgradeservice.service';
export declare class StudentGradeController {
    private readonly studentGradeService;
    constructor(studentGradeService: StudentGradeService);
    getStudentGrade(): any;
    insertStudentGrade(studentgradedto: StudentgradeDTO): any;
    updateStudentGrade(studentgradedto: any, id: any): any;
    deleteStudentGrade(id: any): any;
}
