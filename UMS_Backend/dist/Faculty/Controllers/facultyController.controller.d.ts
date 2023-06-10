import { FacultyInfoDTO } from '../DTOs/facultyInfo.dto';
import { FacultyService } from '../Services/facultyservice.service';
export declare class FacultyController {
    private readonly facultyService;
    constructor(facultyService: FacultyService);
    getFaculty(): any;
    insertFaculty(facultydto: FacultyInfoDTO): any;
    getAllFaculty(): any;
    getFacultyById(id: number): any;
    updateFaculty(facultydto: any, id: any): any;
    deleteFaculty(id: any): any;
}
