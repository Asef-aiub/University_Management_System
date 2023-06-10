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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminNotice = exports.AdminRoom = exports.AdminCourse = exports.AdminForm = void 0;
const class_validator_1 = require("class-validator");
class AdminForm {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter id" }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(1000),
    __metadata("design:type", Number)
], AdminForm.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(3, 8),
    (0, class_validator_1.IsAlpha)(),
    __metadata("design:type", String)
], AdminForm.prototype, "name", void 0);
exports.AdminForm = AdminForm;
class AdminCourse {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], AdminCourse.prototype, "Cid", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsAlphanumeric)(),
    __metadata("design:type", String)
], AdminCourse.prototype, "Cname", void 0);
exports.AdminCourse = AdminCourse;
class AdminRoom {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsAlphanumeric)(),
    __metadata("design:type", Number)
], AdminRoom.prototype, "Rid", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsAlphanumeric)(),
    __metadata("design:type", String)
], AdminRoom.prototype, "Rname", void 0);
exports.AdminRoom = AdminRoom;
class AdminNotice {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], AdminNotice.prototype, "Nid", void 0);
exports.AdminNotice = AdminNotice;
//# sourceMappingURL=adminform.dto.js.map