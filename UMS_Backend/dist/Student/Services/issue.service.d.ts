import { IssueForm } from "../DTOs/issueform.dto";
import { IssueEntity } from "../Entities/issue.entity";
import { Repository } from "typeorm";
import { MailerService } from "@nestjs-modules/mailer/dist";
export declare class IssueService {
    private studentRepository;
    private mailerService;
    constructor(studentRepository: Repository<IssueEntity>, mailerService: MailerService);
    getIndex(): any;
    insertIssue(mydto: IssueForm): any;
    updateIssue(Isid: any, issueType: any, issue: any): any;
    getStudentByIssueID(id: any): any;
    getIssueById(id: any): any;
    sendEmail(mydata: any): Promise<any>;
    deleteIssue(id: any): any;
}
