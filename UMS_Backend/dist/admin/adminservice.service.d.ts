import { AdminForm, AdminRoom, AdminNotice } from "./adminform.dto";
import { Repository } from 'typeorm';
import { AdminEntity } from "./adminentity.entity";
import { CourseEntity } from "./course.entity";
export declare class AdminService {
    private adminRepo;
    private courseRepo;
    constructor(adminRepo: Repository<AdminEntity>, courseRepo: Repository<CourseEntity>);
    getIndex(): any;
    getAdminByID(id: any): any;
    getAdminByIDName(qry: any): any;
    insertAdmin(mydto: AdminForm): any;
    updateAdmin(name: any, id: any): any;
    updateAdminbyid(mydto: AdminForm, id: any): any;
    deleteAdminbyid(id: any): any;
    getCourseByID(Cid: any): any;
    updateCoursebyid(Cname: any, Cid: any): any;
    insertRoom(mydto: AdminRoom): any;
    updateRoombyid(Rid: any): any;
    insertNotice(mydto: AdminNotice): any;
    updateGradebyid(Sname: any, Sid: any): any;
}
