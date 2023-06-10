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
exports.FacultyNoticeController = void 0;
const common_1 = require("@nestjs/common");
const noticeDto_dto_1 = require("../DTOs/noticeDto.dto");
const noticeservice_service_1 = require("../Services/noticeservice.service");
let FacultyNoticeController = class FacultyNoticeController {
    constructor(facultyNoticeService) {
        this.facultyNoticeService = facultyNoticeService;
    }
    getNotice() {
        return this.facultyNoticeService.getNotice();
    }
    insertNotice(noticedto) {
        return this.facultyNoticeService.insertNotice(noticedto);
    }
    updateNotice(noticedto) {
        return this.facultyNoticeService.updateNotice(noticedto, noticedto.id);
    }
    updateNoticeById(noticedto, id) {
        return this.facultyNoticeService.updateNotice(noticedto, id);
    }
    deleteNotice(id) {
        return this.facultyNoticeService.deleteNotice(id);
    }
};
__decorate([
    (0, common_1.Get)('/getnotice'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FacultyNoticeController.prototype, "getNotice", null);
__decorate([
    (0, common_1.Post)('/insertnotice'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [noticeDto_dto_1.NoticeDto]),
    __metadata("design:returntype", Object)
], FacultyNoticeController.prototype, "insertNotice", null);
__decorate([
    (0, common_1.Put)('/updatenotice'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [noticeDto_dto_1.NoticeDto]),
    __metadata("design:returntype", Object)
], FacultyNoticeController.prototype, "updateNotice", null);
__decorate([
    (0, common_1.Put)('/updatenoticeBy/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [noticeDto_dto_1.NoticeDto, Number]),
    __metadata("design:returntype", Object)
], FacultyNoticeController.prototype, "updateNoticeById", null);
__decorate([
    (0, common_1.Delete)('/deletenotice/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], FacultyNoticeController.prototype, "deleteNotice", null);
FacultyNoticeController = __decorate([
    (0, common_1.Controller)('/notice'),
    __metadata("design:paramtypes", [noticeservice_service_1.NoticeService])
], FacultyNoticeController);
exports.FacultyNoticeController = FacultyNoticeController;
//# sourceMappingURL=facultynoticecontroller.controller.js.map