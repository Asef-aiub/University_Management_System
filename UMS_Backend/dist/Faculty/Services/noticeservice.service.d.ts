import { Repository } from 'typeorm';
import { NoticeDto } from '../DTOs/noticeDto.dto';
import { FacultyNotice } from '../Entitys/facultyNotice.entity';
export declare class NoticeService {
    private facultyRepo;
    constructor(facultyRepo: Repository<FacultyNotice>);
    getNotice(): any;
    insertNotice(noticedto: NoticeDto): any;
    updateNotice(noticedto: any, id: any): any;
    updateNoticeById(noticedto: any, id: any): any;
    deleteNotice(id: any): any;
}
