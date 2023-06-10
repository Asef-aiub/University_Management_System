import { NoticeDto } from '../DTOs/noticeDto.dto';
import { NoticeService } from '../Services/noticeservice.service';
export declare class FacultyNoticeController {
    private readonly facultyNoticeService;
    constructor(facultyNoticeService: NoticeService);
    getNotice(): any;
    insertNotice(noticedto: NoticeDto): any;
    updateNotice(noticedto: NoticeDto): any;
    updateNoticeById(noticedto: NoticeDto, id: number): any;
    deleteNotice(id: number): any;
}
