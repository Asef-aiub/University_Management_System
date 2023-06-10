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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const adminform_dto_1 = require("./adminform.dto");
const adminservice_service_1 = require("./adminservice.service");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    getAdmin() {
        return this.adminService.getIndex();
    }
    getAdminByID(id) {
        return this.adminService.getAdminByID(id);
    }
    getAdminByIDName(qry) {
        return this.adminService.getAdminByIDName(qry);
    }
    insertAdmin(mydto) {
        return this.adminService.insertAdmin(mydto);
    }
    updateAdmin(name, id) {
        return this.adminService.updateAdmin(name, id);
    }
    updateAdminbyid(name, id) {
        return this.adminService.updateAdminbyid(name, id);
    }
    deleteAdminbyid(id) {
        return this.adminService.deleteAdminbyid(id);
    }
    getCourseByID(qry) {
        return this.adminService.getCourseByID(qry);
    }
    updateCoursebyid(Cname, Cid) {
        return this.adminService.updateCoursebyid(Cname, Cid);
    }
    insertRoom(mydto) {
        return this.adminService.insertRoom(mydto);
    }
    updateRoombyid(Rid) {
        return this.adminService.updateRoombyid(Rid);
    }
    insertNotice(mydto) {
        return this.adminService.insertNotice(mydto);
    }
    updateGradebyid(Sname, Sid) {
        return this.adminService.updateGradebyid(Sname, Sid);
    }
};
__decorate([
    (0, common_1.Get)("/admin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAdmin", null);
__decorate([
    (0, common_1.Get)("/findadmin/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAdminByID", null);
__decorate([
    (0, common_1.Get)("/findadmin"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAdminByIDName", null);
__decorate([
    (0, common_1.Post)("/insertAdmin"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adminform_dto_1.AdminForm]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "insertAdmin", null);
__decorate([
    (0, common_1.Put)("/updateAdmin/"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)("name")),
    __param(1, (0, common_1.Body)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateAdmin", null);
__decorate([
    (0, common_1.Put)("/updateAdmin/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)("name")),
    __param(1, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateAdminbyid", null);
__decorate([
    (0, common_1.Delete)("/deleteAdmin/"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "deleteAdminbyid", null);
__decorate([
    (0, common_1.Get)("/findCourse"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getCourseByID", null);
__decorate([
    (0, common_1.Put)("/updateCourse/:Cid"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)('Cname')),
    __param(1, (0, common_1.Body)('Cid', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateCoursebyid", null);
__decorate([
    (0, common_1.Post)("/insertRoom"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adminform_dto_1.AdminRoom]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "insertRoom", null);
__decorate([
    (0, common_1.Put)("/updateRoom/:Rid"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)("Rid", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateRoombyid", null);
__decorate([
    (0, common_1.Post)("/insertNotice"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adminform_dto_1.AdminNotice]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "insertNotice", null);
__decorate([
    (0, common_1.Put)("/updateGrade/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)("StudentName")),
    __param(1, (0, common_1.Param)("Sid", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateGradebyid", null);
AdminController = __decorate([
    (0, common_1.Controller)('/admin'),
    __metadata("design:paramtypes", [adminservice_service_1.AdminService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map