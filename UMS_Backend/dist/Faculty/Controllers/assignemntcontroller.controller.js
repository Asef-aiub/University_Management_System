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
exports.AssignmentController = void 0;
const common_1 = require("@nestjs/common");
const assignmentDto_dto_1 = require("../DTOs/assignmentDto.dto");
const assignmentservice_service_1 = require("../Services/assignmentservice.service");
let AssignmentController = class AssignmentController {
    constructor(assignmentService) {
        this.assignmentService = assignmentService;
    }
    getAssignment() {
        return this.assignmentService.getAssignment();
    }
    insertAssignment(assignmentdto) {
        return this.assignmentService.insertAssignment(assignmentdto);
    }
    updateAssignment(assignmentdto, id) {
        return this.assignmentService.updateAssignment(assignmentdto, id);
    }
    deleteAssignment(id) {
        return this.assignmentService.deleteAssignment(id);
    }
};
__decorate([
    (0, common_1.Get)('/getassignment'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AssignmentController.prototype, "getAssignment", null);
__decorate([
    (0, common_1.Post)('/insertassignment'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [assignmentDto_dto_1.AssignmentDto]),
    __metadata("design:returntype", Object)
], AssignmentController.prototype, "insertAssignment", null);
__decorate([
    (0, common_1.Put)('/updateassignment/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], AssignmentController.prototype, "updateAssignment", null);
__decorate([
    (0, common_1.Delete)('deleteassignment/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AssignmentController.prototype, "deleteAssignment", null);
AssignmentController = __decorate([
    (0, common_1.Controller)('/assignment'),
    __metadata("design:paramtypes", [assignmentservice_service_1.AssignmentService])
], AssignmentController);
exports.AssignmentController = AssignmentController;
//# sourceMappingURL=assignemntcontroller.controller.js.map