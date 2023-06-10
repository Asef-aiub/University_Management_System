import { facfeedbackform } from "../DTOs/facfeedbackform.dto";
import { FacfeedbackService } from "../Services/facfeedback.service";
export declare class FacfeedbackController {
    private facfeedbackService;
    constructor(facfeedbackService: FacfeedbackService);
    getIndex(): any;
    insertFacfeedback(mydto: facfeedbackform): any;
    getFeedbackById(id: number): any;
}
