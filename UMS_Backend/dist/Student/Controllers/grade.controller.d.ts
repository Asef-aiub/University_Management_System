import { GradeForm } from "../DTOs/gradeform.dto";
import { GradeService } from "../Services/grade.service";
export declare class GradeController {
    private gradeService;
    constructor(gradeService: GradeService);
    getIndex(): any;
    insertGrade(mydto: GradeForm): any;
}
