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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const studentform_dto_1 = require("../DTOs/studentform.dto");
const student_service_1 = require("../Services/student.service");
const custom_exception_filter_1 = require("../custom.exception.filter");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    getAdmin() {
        try {
            return this.studentService.getIndex();
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    insertStudent(mydto) {
        try {
            return this.studentService.insertStudent(mydto);
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    updateIssue(Sid, Saddress, Snum) {
        return this.studentService.updateStudent(Sid, Saddress, Snum);
    }
    getIssuesByStudentID(id) {
        return this.studentService.getIssuesByStudentID(id);
    }
    getstudent(id) {
        return this.studentService.getstudent(id);
    }
};
__decorate([
    (0, common_1.Get)("/index"),
    (0, common_1.UseFilters)(new custom_exception_filter_1.HttpExceptionFilter()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StudentController.prototype, "getAdmin", null);
__decorate([
    (0, common_1.Post)("/insertstudent"),
    (0, common_1.UseFilters)(new custom_exception_filter_1.HttpExceptionFilter()),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [studentform_dto_1.StudentForm]),
    __metadata("design:returntype", Object)
], StudentController.prototype, "insertStudent", null);
__decorate([
    (0, common_1.Put)('/updatestudent/'),
    (0, common_1.UseFilters)(new custom_exception_filter_1.HttpExceptionFilter()),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)('Sid', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('Saddress')),
    __param(2, (0, common_1.Body)('Snum')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Object)
], StudentController.prototype, "updateIssue", null);
__decorate([
    (0, common_1.Get)("getstudentissue/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentController.prototype, "getIssuesByStudentID", null);
__decorate([
    (0, common_1.Get)("getstudent/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StudentController.prototype, "getstudent", null);
StudentController = __decorate([
    (0, common_1.Controller)("/student"),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map