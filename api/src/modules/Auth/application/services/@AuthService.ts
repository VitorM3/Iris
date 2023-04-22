import { Injectable } from "@nestjs/common";
import LoginAuthService from "./class/login.auth.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export default class AuthService {
    public login: LoginAuthService
    public constructor(
        private readonly jwtService: JwtService
    ){
        this.login = new LoginAuthService(this.jwtService)
    }
}