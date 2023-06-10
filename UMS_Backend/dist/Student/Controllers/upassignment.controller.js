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
exports.UpassignmentController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const assignform_dto_1 = require("../DTOs/assignform.dto");
const assign_service_1 = require("../Services/assign.service");
const custom_exception_filter_1 = require("../custom.exception.filter");
let UpassignmentController = class UpassignmentController {
    constructor(assignService) {
        this.assignService = assignService;
    }
    uploadAssign(mydto, file) {
        mydto.filename = file.filename;
        try {
            return this.assignService.uploadAssign(mydto);
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
};
__decorate([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseFilters)(new custom_exception_filter_1.HttpExceptionFilter()),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('myfile', { storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 5000000 }),
            new common_1.FileTypeValidator({ fileType: 'pdf' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [assignform_dto_1.AssignForm, Object]),
    __metadata("design:returntype", void 0)
], UpassignmentController.prototype, "uploadAssign", null);
UpassignmentController = __decorate([
    (0, common_1.Controller)('/upassign'),
    __metadata("design:paramtypes", [assign_service_1.AssignService])
], UpassignmentController);
exports.UpassignmentController = UpassignmentController;
//# sourceMappingURL=upassignment.controller.js.map