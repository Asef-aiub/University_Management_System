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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const student_entity_1 = require("../Entities/student.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    getIndex() {
        return this.studentRepository.find();
    }
    getCourseByID(id) {
        return "the id is " + id;
    }
    getCourseByIDName(qry) {
        return "the id is " + qry.id + " and name is " + qry.name;
    }
    insertStudent(mydto) {
        const student = new student_entity_1.StudentEntity();
        student.Sname = mydto.Sname;
        student.Sdep = mydto.Sdep;
        student.Sidd = mydto.Sidd;
        student.Saddress = mydto.Saddress;
        student.Snum = mydto.Snum;
        student.Sdob = mydto.Sdob;
        student.Sprogram = mydto.Sprogram;
        return this.studentRepository.save(student);
    }
    updateStudentbyid(mydto, id) {
        return this.studentRepository.update(id, mydto);
    }
    updateStudent(Sid, Saddress, Snum) {
        return this.studentRepository.update(Sid, { Saddress: Saddress, Snum: Snum });
    }
    deleteCoursebyid(id) {
        return "Delete id is " + id;
    }
    getNoticeByFacultyId(qry) {
        return "the id is " + qry.id + " and notice is " + qry.name;
    }
    getGrade(id) {
        const student = this.studentRepository.find(id);
        return "the grade is : " + student;
    }
    getGradeBySemester(id) {
        return "the grade is : " + id;
    }
    facultyFeedback(mydto) {
        return "Student Inserted feedback: ";
    }
    getPaymentDetails(qry) {
        return "the paymentdetails for id : " + qry.id + " name:" + qry.name;
    }
    getIssuesByStudentID(id) {
        return this.studentRepository.find({
            where: { Sid: id },
            relations: {
                issues: true,
            },
        });
    }
    async getstudent(id) {
        const data = await this.studentRepository.find({ where: { Sid: id } });
        console.log(data);
        if (data !== null) {
            return data;
        }
        else {
            return "No data found";
        }
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.StudentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map