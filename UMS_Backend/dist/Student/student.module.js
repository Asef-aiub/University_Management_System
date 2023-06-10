"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
const common_1 = require("@nestjs/common");
const student_controller_1 = require("./Controllers/student.controller");
const grade_controller_1 = require("./Controllers/grade.controller");
const student_service_1 = require("./Services/student.service");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("./Entities/student.entity");
const grade_service_1 = require("./Services/grade.service");
const grade_entity_1 = require("./Entities/grade.entity");
const issue_service_1 = require("./Services/issue.service");
const issue_entity_1 = require("./Entities/issue.entity");
const issue_controller_1 = require("./Controllers/issue.controller");
const facfeedback_service_1 = require("./Services/facfeedback.service");
const facfeedback_entity_1 = require("./Entities/facfeedback.entity");
const facfeedback_controller_1 = require("./Controllers/facfeedback.controller");
const drop_service_1 = require("./Services/drop.service");
const drop_entity_1 = require("./Entities/drop.entity");
const drop_controller_1 = require("./Controllers/drop.controller");
const assign_service_1 = require("./Services/assign.service");
const assign_entity_1 = require("./Entities/assign.entity");
const upassignment_controller_1 = require("./Controllers/upassignment.controller");
const login_service_1 = require("./Services/login.service");
const logininfo_entity_1 = require("./Entities/logininfo.entity");
const login_controller_1 = require("./Controllers/login.controller");
const mailer_1 = require("@nestjs-modules/mailer");
let StudentModule = class StudentModule {
};
StudentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 465,
                    ignoreTLS: true,
                    secure: true,
                    auth: {
                        user: 'iftekharasef18@gmail.com',
                        pass: 'qgxhqykmfxohjlje'
                    },
                }
            }),
            typeorm_1.TypeOrmModule.forFeature([student_entity_1.StudentEntity, grade_entity_1.GradeEntity, issue_entity_1.IssueEntity, facfeedback_entity_1.FacfeedbackEntity, drop_entity_1.DropEntity, assign_entity_1.AssignEntity, logininfo_entity_1.LoginEntity])
        ],
        controllers: [student_controller_1.StudentController, grade_controller_1.GradeController, issue_controller_1.IssueController, facfeedback_controller_1.FacfeedbackController, drop_controller_1.DropController, upassignment_controller_1.UpassignmentController, login_controller_1.LoginController],
        providers: [student_service_1.StudentService, grade_service_1.GradeService, issue_service_1.IssueService, facfeedback_service_1.FacfeedbackService, drop_service_1.DropService, assign_service_1.AssignService, login_service_1.LoginService],
    })
], StudentModule);
exports.StudentModule = StudentModule;
//# sourceMappingURL=student.module.js.map