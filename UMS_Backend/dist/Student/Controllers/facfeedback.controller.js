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
exports.FacfeedbackController = void 0;
const common_1 = require("@nestjs/common");
const facfeedbackform_dto_1 = require("../DTOs/facfeedbackform.dto");
const facfeedback_service_1 = require("../Services/facfeedback.service");
const custom_exception_filter_1 = require("../custom.exception.filter");
let FacfeedbackController = class FacfeedbackController {
    constructor(facfeedbackService) {
        this.facfeedbackService = facfeedbackService;
    }
    getIndex() {
        try {
            return this.facfeedbackService.getIndex();
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    insertFacfeedback(mydto) {
        try {
            return this.facfeedbackService.insertFacfeedback(mydto);
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    getFeedbackById(id) {
        return this.facfeedbackService.getFeedbackById(id);
    }
};
__decorate([
    (0, common_1.Get)("/index"),
    (0, common_1.UseFilters)(new custom_exception_filter_1.HttpExceptionFilter()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FacfeedbackController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)("/insertfeedback"),
    (0, common_1.UseFilters)(new custom_exception_filter_1.HttpExceptionFilter()),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [facfeedbackform_dto_1.facfeedbackform]),
    __metadata("design:returntype", Object)
], FacfeedbackController.prototype, "insertFacfeedback", null);
__decorate([
    (0, common_1.Get)("/feedbackbyid/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], FacfeedbackController.prototype, "getFeedbackById", null);
FacfeedbackController = __decorate([
    (0, common_1.Controller)("/facfeedback"),
    __metadata("design:paramtypes", [facfeedback_service_1.FacfeedbackService])
], FacfeedbackController);
exports.FacfeedbackController = FacfeedbackController;
//# sourceMappingURL=facfeedback.controller.js.map