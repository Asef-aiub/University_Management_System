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
exports.IssueController = void 0;
const common_1 = require("@nestjs/common");
const issueform_dto_1 = require("../DTOs/issueform.dto");
const issue_service_1 = require("../Services/issue.service");
const custom_exception_filter_1 = require("../custom.exception.filter");
let IssueController = class IssueController {
    constructor(issueService) {
        this.issueService = issueService;
    }
    getIndex() {
        try {
            return this.issueService.getIndex();
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    insertIssue(mydto) {
        try {
            return this.issueService.insertIssue(mydto);
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    sendEmail(mydata) {
        return this.issueService.sendEmail(mydata);
    }
    getIssueById(id) {
        return this.issueService.getIssueById(id);
    }
    getStudentByIssueID(id) {
        return this.issueService.getStudentByIssueID(id);
    }
    deleteDrop(id) {
        try {
            return this.issueService.deleteIssue(id);
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    updateIssue(Isid, issueType, issue) {
        return this.issueService.updateIssue(Isid, issueType, issue);
    }
};
__decorate([
    (0, common_1.Get)("/index"),
    (0, common_1.UseFilters)(new custom_exception_filter_1.HttpExceptionFilter()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], IssueController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)("/insertissue"),
    (0, common_1.UseFilters)(new custom_exception_filter_1.HttpExceptionFilter()),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [issueform_dto_1.IssueForm]),
    __metadata("design:returntype", Object)
], IssueController.prototype, "insertIssue", null);
__decorate([
    (0, common_1.Post)('/sendemail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IssueController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Get)("/issuebyid/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], IssueController.prototype, "getIssueById", null);
__decorate([
    (0, common_1.Get)("getissue/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], IssueController.prototype, "getStudentByIssueID", null);
__decorate([
    (0, common_1.Delete)("/deleteissue/:id"),
    (0, common_1.UseFilters)(new custom_exception_filter_1.HttpExceptionFilter()),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], IssueController.prototype, "deleteDrop", null);
__decorate([
    (0, common_1.Put)('/updateissue/'),
    (0, common_1.UseFilters)(new custom_exception_filter_1.HttpExceptionFilter()),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)('Isid', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('issueType')),
    __param(2, (0, common_1.Body)('issue')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Object)
], IssueController.prototype, "updateIssue", null);
IssueController = __decorate([
    (0, common_1.Controller)("/issue"),
    __metadata("design:paramtypes", [issue_service_1.IssueService])
], IssueController);
exports.IssueController = IssueController;
//# sourceMappingURL=issue.controller.js.map