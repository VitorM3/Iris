import { HttpException, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import UserService from "src/modules/User/application/services/@UserService";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    public constructor(
        private readonly userService: UserService
    ){
        super({usernameField: 'email'})
    }
    public async validate(email: string,password: string){
        const user = await this.userService.validateLogin.execute({email,password})
        if(!user){
            throw new HttpException("Usuário não permitido á acessar a plataforma",401)
        }
        return user;

    }
}