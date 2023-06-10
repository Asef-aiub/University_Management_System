import { Repository } from "typeorm";
import { StudentgradeDTO } from "../DTOs/studentgradeDto.dto";
import { StudentgradeInfo } from "../Entitys/studentgradeInfo.entity";
export declare class StudentGradeService {
    private sutdentGradeRepo;
    constructor(sutdentGradeRepo: Repository<StudentgradeInfo>);
    getStudentGrade(): any;
    insertStudentGrade(studentgradedto: StudentgradeDTO): any;
    updateStudentGrade(studentgradedto: any, id: any): any;
    updateStudentGradeById(studentgradedto: any, id: any): any;
    deleteStudentGrade(id: any): any;
}
