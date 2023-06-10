"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assignemntcontroller_controller_1 = require("./Controllers/assignemntcontroller.controller");
const facultyController_controller_1 = require("./Controllers/facultyController.controller");
const facultynoticecontroller_controller_1 = require("./Controllers/facultynoticecontroller.controller");
const studentgradecontroller_controller_1 = require("./Controllers/studentgradecontroller.controller");
const assignemntInfo_entity_1 = require("./Entitys/assignemntInfo.entity");
const facultyInfo_entity_1 = require("./Entitys/facultyInfo.entity");
const facultyNotice_entity_1 = require("./Entitys/facultyNotice.entity");
const studentgradeInfo_entity_1 = require("./Entitys/studentgradeInfo.entity");
const assignmentservice_service_1 = require("./Services/assignmentservice.service");
const facultyservice_service_1 = require("./Services/facultyservice.service");
const noticeservice_service_1 = require("./Services/noticeservice.service");
const studentgradeservice_service_1 = require("./Services/studentgradeservice.service");
let FacultyModule = class FacultyModule {
};
FacultyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                facultyInfo_entity_1.FacultyInfo,
                facultyNotice_entity_1.FacultyNotice,
                assignemntInfo_entity_1.AssignmentInfo,
                studentgradeInfo_entity_1.StudentgradeInfo,
            ]),
        ],
        controllers: [
            facultyController_controller_1.FacultyController,
            facultynoticecontroller_controller_1.FacultyNoticeController,
            assignemntcontroller_controller_1.AssignmentController,
            studentgradecontroller_controller_1.StudentGradeController,
        ],
        providers: [
            facultyservice_service_1.FacultyService,
            noticeservice_service_1.NoticeService,
            assignmentservice_service_1.AssignmentService,
            studentgradeservice_service_1.StudentGradeService,
        ],
    })
], FacultyModule);
exports.FacultyModule = FacultyModule;
//# sourceMappingURL=faculty.module.js.map