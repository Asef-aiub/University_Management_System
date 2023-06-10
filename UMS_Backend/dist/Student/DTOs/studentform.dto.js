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
exports.UpdateStudentform = exports.StudentForm = void 0;
const class_validator_1 = require("class-validator");
class StudentForm {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your name" }),
    (0, class_validator_1.IsString)({ message: "Please enter valid name" }),
    __metadata("design:type", String)
], StudentForm.prototype, "Sname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your department" }),
    __metadata("design:type", String)
], StudentForm.prototype, "Sdep", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your email" }),
    (0, class_validator_1.Matches)(/^[0-9]{2}-[0-9]{5}-[1-3]{1}$/, { message: "Please enter valid id" }),
    __metadata("design:type", String)
], StudentForm.prototype, "Sidd", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your address" }),
    __metadata("design:type", String)
], StudentForm.prototype, "Saddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your phone" }),
    (0, class_validator_1.IsPhoneNumber)("BD", { message: "Please enter valid phone number" }),
    __metadata("design:type", String)
], StudentForm.prototype, "Snum", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your Date of birth" }),
    __metadata("design:type", String)
], StudentForm.prototype, "Sdob", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your program" }),
    __metadata("design:type", String)
], StudentForm.prototype, "Sprogram", void 0);
exports.StudentForm = StudentForm;
class UpdateStudentform {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your address" }),
    __metadata("design:type", String)
], UpdateStudentform.prototype, "Saddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your phone" }),
    (0, class_validator_1.IsPhoneNumber)("BD", { message: "Please enter valid phone number" }),
    __metadata("design:type", String)
], UpdateStudentform.prototype, "Snum", void 0);
exports.UpdateStudentform = UpdateStudentform;
//# sourceMappingURL=studentform.dto.js.map