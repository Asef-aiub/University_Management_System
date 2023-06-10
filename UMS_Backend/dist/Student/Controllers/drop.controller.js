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
exports.DropController = void 0;
const common_1 = require("@nestjs/common");
const dropform_dto_1 = require("../DTOs/dropform.dto");
const drop_service_1 = require("../Services/drop.service");
const custom_exception_filter_1 = require("../custom.exception.filter");
let DropController = class DropController {
    constructor(dropService) {
        this.dropService = dropService;
    }
    getIndex() {
        try {
            return this.dropService.getIndex();
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    insertDrop(mydto) {
        try {
            return this.dropService.insertDrop(mydto);
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    deleteDrop(id) {
        try {
            return this.dropService.deleteDrop(id);
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
};
__decorate([
    (0, common_1.Get)("/index"),
    (0, common_1.UseFilters)(new custom_exception_filter_1.HttpExceptionFilter()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], DropController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)("/insertdrop"),
    (0, common_1.UseFilters)(new custom_exception_filter_1.HttpExceptionFilter()),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dropform_dto_1.DropForm]),
    __metadata("design:returntype", Object)
], DropController.prototype, "insertDrop", null);
__decorate([
    (0, common_1.Delete)("/deletedrop/:id"),
    (0, common_1.UseFilters)(new custom_exception_filter_1.HttpExceptionFilter()),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], DropController.prototype, "deleteDrop", null);
DropController = __decorate([
    (0, common_1.Controller)("/drop"),
    __metadata("design:paramtypes", [drop_service_1.DropService])
], DropController);
exports.DropController = DropController;
//# sourceMappingURL=drop.controller.js.map