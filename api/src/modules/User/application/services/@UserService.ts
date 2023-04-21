import { Injectable } from "@nestjs/common";
import ValidateUserLoginService from "./class/validate-user-login.service";
import UserProvider from "../providers/@UserProvider";

@Injectable()
export default class UserService {
    public validateLogin: ValidateUserLoginService
    public constructor(
        private readonly provider: UserProvider
    ){
        this.validateLogin = new ValidateUserLoginService(
            this.provider
        )
    }
}