import { DropForm } from "../DTOs/dropform.dto";
import { DropEntity } from "../Entities/drop.entity";
import { Repository } from "typeorm";
export declare class DropService {
    private studentRepository;
    constructor(studentRepository: Repository<DropEntity>);
    getIndex(): any;
    insertDrop(mydto: DropForm): any;
    deleteDrop(id: any): any;
}
