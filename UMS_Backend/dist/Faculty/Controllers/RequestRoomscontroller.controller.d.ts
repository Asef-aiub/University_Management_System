import { RequestRoom } from "../Entitys/requestRoom.entity";
import { RequestRoomService } from "../Services/RequestRoomservice.service";
export declare class RequestRoomController {
    private readonly requestRoomService;
    constructor(requestRoomService: RequestRoomService);
    getRequestRoom(): any;
    insertRequestRoom(requestRoomDto: RequestRoom): any;
    updateRequestRoom(requestRoomDto: any, id: any): any;
    deleteRequestRoom(id: any): any;
}
