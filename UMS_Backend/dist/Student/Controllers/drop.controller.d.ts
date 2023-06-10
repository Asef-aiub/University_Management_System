import { DropForm } from "../DTOs/dropform.dto";
import { DropService } from "../Services/drop.service";
export declare class DropController {
    private dropService;
    constructor(dropService: DropService);
    getIndex(): any;
    insertDrop(mydto: DropForm): any;
    deleteDrop(id: number): any;
}
