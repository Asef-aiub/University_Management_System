import { LoginForm } from "../DTOs/loginform.dto";
import { LoginService } from "../Services/login.service";
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    getIndex(): any;
    signup(mydto: LoginForm): any;
    signin(session: any, mydto: LoginForm): Promise<{
        message: string;
    }>;
    signout(session: any): {
        message: string;
    };
}
