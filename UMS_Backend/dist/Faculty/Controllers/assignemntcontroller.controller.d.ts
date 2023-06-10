import { AssignmentDto } from '../DTOs/assignmentDto.dto';
import { AssignmentService } from '../Services/assignmentservice.service';
export declare class AssignmentController {
    private readonly assignmentService;
    constructor(assignmentService: AssignmentService);
    getAssignment(): any;
    insertAssignment(assignmentdto: AssignmentDto): any;
    updateAssignment(assignmentdto: any, id: any): any;
    deleteAssignment(id: any): any;
}
