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
exports.StudentGradeController = void 0;
const common_1 = require("@nestjs/common");
const studentgradeDto_dto_1 = require("../DTOs/studentgradeDto.dto");
const studentgradeservice_service_1 = require("../Services/studentgradeservice.service");
let StudentGradeController = class StudentGradeController {
    constructor(studentGradeService) {
        this.studentGradeService = studentGradeService;
    }
    getStudentGrade() {
        return this.studentGradeService.getStudentGrade();
    }
    insertStudentGrade(studentgradedto) {
        return this.studentGradeService.insertStudentGrade(studentgradedto);
    }
    updateStudentGrade(studentgradedto, id) {
        return this.studentGradeService.updateStudentGrade(studentgradedto, id);
    }
    deleteStudentGrade(id) {
        return this.studentGradeService.deleteStudentGrade(id);
    }
};
__decorate([
    (0, common_1.Get)('/getstudentgrade'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StudentGradeController.prototype, "getStudentGrade", null);
__decorate([
    (0, common_1.Post)('/insertstudentgrade'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [studentgradeDto_dto_1.StudentgradeDTO]),
    __metadata("design:returntype", Object)
], StudentGradeController.prototype, "insertStudentGrade", null);
__decorate([
    (0, common_1.Put)('/updatestudentgrade/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], StudentGradeController.prototype, "updateStudentGrade", null);
__decorate([
    (0, common_1.Delete)('deletestudentgrade/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], StudentGradeController.prototype, "deleteStudentGrade", null);
StudentGradeController = __decorate([
    (0, common_1.Controller)('/studentgrade'),
    __metadata("design:paramtypes", [studentgradeservice_service_1.StudentGradeService])
], StudentGradeController);
exports.StudentGradeController = StudentGradeController;
//# sourceMappingURL=studentgradecontroller.controller.js.map