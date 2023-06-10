import { facfeedbackform } from "../DTOs/facfeedbackform.dto";
import { FacfeedbackEntity } from "../Entities/facfeedback.entity";
import { Repository } from "typeorm";
export declare class FacfeedbackService {
    private studentRepository;
    constructor(studentRepository: Repository<FacfeedbackEntity>);
    getIndex(): any;
    insertFacfeedback(mydto: facfeedbackform): any;
    getFeedbackById(id: any): any;
}
