import { AdminForm, AdminRoom, AdminNotice } from "./adminform.dto";
import { AdminService } from "./adminservice.service";
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    getAdmin(): any;
    getAdminByID(id: number): any;
    getAdminByIDName(qry: any): any;
    insertAdmin(mydto: AdminForm): any;
    updateAdmin(name: string, id: number): any;
    updateAdminbyid(name: any, id: number): any;
    deleteAdminbyid(id: number): any;
    getCourseByID(qry: any): any;
    updateCoursebyid(Cname: string, Cid: number): any;
    insertRoom(mydto: AdminRoom): any;
    updateRoombyid(Rid: number): any;
    insertNotice(mydto: AdminNotice): any;
    updateGradebyid(Sname: string, Sid: number): any;
}
