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
exports.GradeService = void 0;
const common_1 = require("@nestjs/common");
const grade_entity_1 = require("../Entities/grade.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let GradeService = class GradeService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    getIndex() {
        return this.studentRepository.find();
    }
    insertGrade(mydto) {
        const grade = new grade_entity_1.GradeEntity();
        grade.year = mydto.year;
        grade.xm = mydto.xm;
        grade.grade = mydto.grade;
        return this.studentRepository.save(grade);
    }
};
GradeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grade_entity_1.GradeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GradeService);
exports.GradeService = GradeService;
//# sourceMappingURL=grade.service.js.map