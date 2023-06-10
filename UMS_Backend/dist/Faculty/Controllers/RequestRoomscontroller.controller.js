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
exports.RequestRoomController = void 0;
const common_1 = require("@nestjs/common");
const requestRoom_entity_1 = require("../Entitys/requestRoom.entity");
const RequestRoomservice_service_1 = require("../Services/RequestRoomservice.service");
let RequestRoomController = class RequestRoomController {
    constructor(requestRoomService) {
        this.requestRoomService = requestRoomService;
    }
    getRequestRoom() {
        return this.requestRoomService.getRequestRoom();
    }
    insertRequestRoom(requestRoomDto) {
        return this.requestRoomService.insertRequestRoom(requestRoomDto);
    }
    updateRequestRoom(requestRoomDto, id) {
        return this.requestRoomService.updateRequestRoom(requestRoomDto, id);
    }
    deleteRequestRoom(id) {
        return this.requestRoomService.deleteRequestRoom(id);
    }
};
__decorate([
    (0, common_1.Get)('/getrequestroom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], RequestRoomController.prototype, "getRequestRoom", null);
__decorate([
    (0, common_1.Post)('/insertrequestroom'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [requestRoom_entity_1.RequestRoom]),
    __metadata("design:returntype", Object)
], RequestRoomController.prototype, "insertRequestRoom", null);
__decorate([
    (0, common_1.Put)('/updaterequestroom/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], RequestRoomController.prototype, "updateRequestRoom", null);
__decorate([
    (0, common_1.Delete)('deleterequestroom/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], RequestRoomController.prototype, "deleteRequestRoom", null);
RequestRoomController = __decorate([
    (0, common_1.Controller)('/requestroom'),
    __metadata("design:paramtypes", [RequestRoomservice_service_1.RequestRoomService])
], RequestRoomController);
exports.RequestRoomController = RequestRoomController;
//# sourceMappingURL=RequestRoomscontroller.controller.js.map