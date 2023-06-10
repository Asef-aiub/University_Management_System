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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const logininfo_entity_1 = require("../Entities/logininfo.entity");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const typeorm_2 = require("typeorm");
let LoginService = class LoginService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    getIndex() {
        return this.studentRepository.find();
    }
    async signup(mydto) {
        const login = new logininfo_entity_1.LoginEntity();
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        login.email = mydto.email;
        login.password = hassedpassed;
        return this.studentRepository.save(login);
    }
    async signin(mydto) {
        const mydata = await this.studentRepository.findOneBy({ email: mydto.email });
        const isMatch = await bcrypt.compare(mydto.password, mydata.password);
        if (isMatch)
            return true;
        else
            return false;
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(logininfo_entity_1.LoginEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map