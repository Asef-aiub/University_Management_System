import { Repository } from "typeorm";
import { RequestRoom } from "../Entitys/requestRoom.entity";
export declare class RequestRoomService {
    private requestRoomRepo;
    constructor(requestRoomRepo: Repository<RequestRoom>);
    getRequestRoom(): any;
    insertRequestRoom(requestRoomDto: RequestRoom): any;
    updateRequestRoom(requestRoomDto: any, id: any): any;
    updateRequestRoomById(requestRoomDto: any, id: any): any;
    deleteRequestRoom(id: any): any;
}
