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
exports.IssueService = void 0;
const common_1 = require("@nestjs/common");
const issue_entity_1 = require("../Entities/issue.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dist_1 = require("@nestjs-modules/mailer/dist");
let IssueService = class IssueService {
    constructor(studentRepository, mailerService) {
        this.studentRepository = studentRepository;
        this.mailerService = mailerService;
    }
    getIndex() {
        return this.studentRepository.find();
    }
    insertIssue(mydto) {
        console.log(mydto);
        return this.studentRepository.save(mydto);
    }
    updateIssue(Isid, issueType, issue) {
        return this.studentRepository.update(Isid, { issueType: issueType, issue: issue });
    }
    getStudentByIssueID(id) {
        return this.studentRepository.find({
            where: { Isid: id },
            relations: {
                student: true,
            },
        });
    }
    getIssueById(id) {
        return this.studentRepository.find({ where: { Isid: id } });
    }
    async sendEmail(mydata) {
        return await this.mailerService.sendMail({
            from: "iftekharasef18@gmail.com",
            to: "kabirr572@gmail.com",
            subject: mydata.subject,
            text: mydata.text,
        });
    }
    deleteIssue(id) {
        return this.studentRepository.delete(id);
    }
};
IssueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(issue_entity_1.IssueEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        dist_1.MailerService])
], IssueService);
exports.IssueService = IssueService;
//# sourceMappingURL=issue.service.js.map