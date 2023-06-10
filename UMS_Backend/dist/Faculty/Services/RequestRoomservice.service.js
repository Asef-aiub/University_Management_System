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
exports.RequestRoomService = void 0;
const injectable_decorator_1 = require("@nestjs/common/decorators/core/injectable.decorator");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const requestRoom_entity_1 = require("../Entitys/requestRoom.entity");
let RequestRoomService = class RequestRoomService {
    constructor(requestRoomRepo) {
        this.requestRoomRepo = requestRoomRepo;
    }
    getRequestRoom() {
        return this.requestRoomRepo.find();
    }
    insertRequestRoom(requestRoomDto) {
        const requestRoom = new requestRoom_entity_1.RequestRoom();
        requestRoom.Fid = requestRoomDto.Fid;
        requestRoom.room = requestRoomDto.room;
        requestRoom.reason = requestRoomDto.reason;
        requestRoom.date = requestRoomDto.date;
        requestRoom.time = requestRoomDto.time;
        return this.requestRoomRepo.save(requestRoom);
    }
    updateRequestRoom(requestRoomDto, id) {
        return this.requestRoomRepo.update(id, requestRoomDto);
    }
    updateRequestRoomById(requestRoomDto, id) {
        return this.requestRoomRepo.update(id, requestRoomDto);
    }
    deleteRequestRoom(id) {
        return this.requestRoomRepo.delete(id);
    }
};
RequestRoomService = __decorate([
    (0, injectable_decorator_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(requestRoom_entity_1.RequestRoom)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RequestRoomService);
exports.RequestRoomService = RequestRoomService;
//# sourceMappingURL=RequestRoomservice.service.js.map