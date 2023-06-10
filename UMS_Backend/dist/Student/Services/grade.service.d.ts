import { GradeForm } from "../DTOs/gradeform.dto";
import { GradeEntity } from "../Entities/grade.entity";
import { Repository } from "typeorm";
export declare class GradeService {
    private studentRepository;
    constructor(studentRepository: Repository<GradeEntity>);
    getIndex(): any;
    insertGrade(mydto: GradeForm): any;
}
