import { AssignForm } from "../DTOs/assignform.dto";
import { AssignEntity } from "../Entities/assign.entity";
import { Repository } from "typeorm";
export declare class AssignService {
    private studentRepository;
    constructor(studentRepository: Repository<AssignEntity>);
    getIndex(): any;
    uploadAssign(mydto: AssignForm): any;
}
