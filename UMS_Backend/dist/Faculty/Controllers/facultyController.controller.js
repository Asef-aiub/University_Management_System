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
exports.FacultyController = void 0;
const common_1 = require("@nestjs/common");
const facultyInfo_dto_1 = require("../DTOs/facultyInfo.dto");
const facultyservice_service_1 = require("../Services/facultyservice.service");
let FacultyController = class FacultyController {
    constructor(facultyService) {
        this.facultyService = facultyService;
    }
    getFaculty() {
        return this.facultyService.getIndex();
    }
    insertFaculty(facultydto) {
        return this.facultyService.insertFaculty(facultydto);
    }
    getAllFaculty() {
        return this.facultyService.getAllFaculty();
    }
    getFacultyById(id) {
        return this.facultyService.getFacultyById(id);
    }
    updateFaculty(facultydto, id) {
        return this.facultyService.updateFaculty(facultydto, id);
    }
    deleteFaculty(id) {
        return this.facultyService.deleteFaculty(id);
    }
};
__decorate([
    (0, common_1.Get)('/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "getFaculty", null);
__decorate([
    (0, common_1.Post)('/insert'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [facultyInfo_dto_1.FacultyInfoDTO]),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "insertFaculty", null);
__decorate([
    (0, common_1.Get)('/getall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "getAllFaculty", null);
__decorate([
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "getFacultyById", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "updateFaculty", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "deleteFaculty", null);
FacultyController = __decorate([
    (0, common_1.Controller)('/faculty'),
    __metadata("design:paramtypes", [facultyservice_service_1.FacultyService])
], FacultyController);
exports.FacultyController = FacultyController;
//# sourceMappingURL=facultyController.controller.js.map