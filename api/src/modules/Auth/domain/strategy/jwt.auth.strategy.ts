import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import UserService from "src/modules/User/application/services/@UserService";

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy){
    public constructor(
        private readonly userService: UserService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.TOKEN_AUTH
        })
    }

    public async validate(payload: {id: number}){
        const id = payload.id;
        const user = await this.userService.getById.execute(id);
        return user;
    }
}