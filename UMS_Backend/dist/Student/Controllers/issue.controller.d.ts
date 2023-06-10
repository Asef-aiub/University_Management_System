import { IssueForm } from "../DTOs/issueform.dto";
import { IssueService } from "../Services/issue.service";
export declare class IssueController {
    private issueService;
    constructor(issueService: IssueService);
    getIndex(): any;
    insertIssue(mydto: IssueForm): any;
    sendEmail(mydata: any): Promise<any>;
    getIssueById(id: number): any;
    getStudentByIssueID(id: number): any;
    deleteDrop(id: number): any;
    updateIssue(Isid: number, issueType: string, issue: string): any;
}
