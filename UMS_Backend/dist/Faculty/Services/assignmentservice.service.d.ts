import { Repository } from 'typeorm';
import { AssignmentDto } from '../DTOs/assignmentDto.dto';
import { AssignmentInfo } from '../Entitys/assignemntInfo.entity';
export declare class AssignmentService {
    private AssignmentRepo;
    constructor(AssignmentRepo: Repository<AssignmentInfo>);
    getAssignment(): any;
    insertAssignment(assignmentdto: AssignmentDto): any;
    updateAssignment(assignmentdto: any, id: any): any;
    updateAssignmentById(assignmentdto: any, id: any): any;
    deleteAssignment(id: any): any;
}
