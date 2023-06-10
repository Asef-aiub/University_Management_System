import { LoginEntity } from "../Entities/logininfo.entity";
import { LoginForm } from "../DTOs/loginform.dto";
import { Repository } from "typeorm";
export declare class LoginService {
    private studentRepository;
    constructor(studentRepository: Repository<LoginEntity>);
    getIndex(): any;
    signup(mydto: LoginForm): Promise<LoginEntity>;
    signin(mydto: LoginForm): Promise<boolean>;
}
