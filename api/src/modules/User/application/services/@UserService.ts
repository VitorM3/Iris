import { Injectable } from "@nestjs/common";
import ValidateUserLoginService from "./class/validate-user-login.service";
import UserProvider from "../providers/@UserProvider";
import GetUserByIdService from "./class/get-user-by-id.service";
import CreateUserService from "./class/create-user.service";
import GetAllUsersService from "./class/get-all-user.service";

@Injectable()
export default class UserService {
    public validateLogin: ValidateUserLoginService
    public getById: GetUserByIdService
    public getAll: GetAllUsersService
    public create: CreateUserService
    public constructor(
        private readonly provider: UserProvider
    ){
        this.validateLogin = new ValidateUserLoginService(
            this.provider
        )
        this.getById = new GetUserByIdService(this.provider)
        this.create = new CreateUserService(this.provider)
        this.getAll = new GetAllUsersService(this.provider)
    }
}