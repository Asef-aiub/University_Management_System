"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const adminentity_entity_1 = require("./adminentity.entity");
const course_entity_1 = require("./course.entity");
let AdminService = class AdminService {
    constructor(adminRepo, courseRepo) {
        this.adminRepo = adminRepo;
        this.courseRepo = courseRepo;
    }
    getIndex() {
        return this.adminRepo.find();
    }
    getAdminByID(id) {
        return this.adminRepo.findOneBy({ id });
    }
    getAdminByIDName(qry) {
        return this.adminRepo.findOneBy({ id: qry.id, name: qry.name });
    }
    insertAdmin(mydto) {
        const adminaccount = new adminentity_entity_1.AdminEntity();
        adminaccount.name = mydto.name;
        return this.adminRepo.save(adminaccount);
    }
    updateAdmin(name, id) {
        console.log(name + id);
        return this.adminRepo.update(id, { name: name });
    }
    updateAdminbyid(mydto, id) {
        return this.adminRepo.update(id, mydto);
    }
    deleteAdminbyid(id) {
        return this.adminRepo.delete(id);
    }
    getCourseByID(Cid) {
        return "Course id is: " + Cid;
    }
    updateCoursebyid(Cname, Cid) {
        return "Update Course where id " + Cid + " and change name to " + Cname;
    }
    insertRoom(mydto) {
        return " Room id is " + mydto.Rid;
    }
    updateRoombyid(Rid) {
        return "Update Room id " + Rid;
    }
    insertNotice(mydto) {
        return " Notice id is " + mydto.Nid;
    }
    updateGradebyid(Sname, Sid) {
        return "Update Grade where id " + Sid + " and change name to " + Sname;
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(adminentity_entity_1.AdminEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(course_entity_1.CourseEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=adminservice.service.js.map