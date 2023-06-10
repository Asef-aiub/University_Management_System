import { Repository } from 'typeorm/repository/Repository';
import { FacultyInfoDTO } from '../DTOs/facultyInfo.dto';
import { FacultyInfo } from '../Entitys/facultyInfo.entity';
export declare class FacultyService {
    private facultyRepo;
    constructor(facultyRepo: Repository<FacultyInfo>);
    getIndex(): string;
    insertFaculty(facultydto: FacultyInfoDTO): any;
    getAllFaculty(): any;
    getFacultyById(id: any): any;
    updateFaculty(facultydto: any, id: any): any;
    deleteFaculty(id: any): any;
}
