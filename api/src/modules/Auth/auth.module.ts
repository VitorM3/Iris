import { Module } from "@nestjs/common";
import UserModule from "../User/user.module";
import { LocalStrategy } from "./domain/strategy/local.auth.strategy";
import { JwtModule } from "@nestjs/jwt";
import AuthService from "./application/services/@AuthService";
import AuthControllers from "./router/controller/@AuthController";
import JwtStrategy from "./domain/strategy/jwt.auth.strategy";

@Module({
    imports:[UserModule, JwtModule.register({
        secret: process.env.TOKEN_AUTH,
        signOptions: {expiresIn: '5h'}
    })],
    controllers: [...AuthControllers],
    providers: [LocalStrategy,AuthService,JwtStrategy]
})
export default class AuthModule {}