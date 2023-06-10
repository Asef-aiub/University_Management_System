/// <reference types="multer" />
import { AssignForm } from '../DTOs/assignform.dto';
import { AssignService } from '../Services/assign.service';
export declare class UpassignmentController {
    private assignService;
    constructor(assignService: AssignService);
    uploadAssign(mydto: AssignForm, file: Express.Multer.File): any;
}
