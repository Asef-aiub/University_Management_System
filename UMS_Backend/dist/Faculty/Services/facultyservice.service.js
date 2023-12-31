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
exports.FacultyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Repository_1 = require("typeorm/repository/Repository");
const facultyInfo_entity_1 = require("../Entitys/facultyInfo.entity");
let FacultyService = class FacultyService {
    constructor(facultyRepo) {
        this.facultyRepo = facultyRepo;
    }
    getIndex() {
        return 'Fahim';
    }
    insertFaculty(facultydto) {
        const faculty = new facultyInfo_entity_1.FacultyInfo();
        faculty.Fname = facultydto.Fname;
        faculty.Fidd = facultydto.Fidd;
        faculty.Fdep = facultydto.Fdep;
        faculty.Fprogram = facultydto.Fprogram;
        faculty.Faddress = facultydto.Faddress;
        faculty.Fnum = facultydto.Fnum;
        faculty.dob = facultydto.dob;
        faculty.Fsal = facultydto.Fsal;
        return this.facultyRepo.save(faculty);
    }
    getAllFaculty() {
        return this.facultyRepo.find();
    }
    getFacultyById(id) {
        return this.facultyRepo.findOneBy(id);
    }
    updateFaculty(facultydto, id) {
        return this.facultyRepo.update(id, facultydto);
    }
    deleteFaculty(id) {
        return this.facultyRepo.delete(id);
    }
};
FacultyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(facultyInfo_entity_1.FacultyInfo)),
    __metadata("design:paramtypes", [Repository_1.Repository])
], FacultyService);
exports.FacultyService = FacultyService;
//# sourceMappingURL=facultyservice.service.js.map