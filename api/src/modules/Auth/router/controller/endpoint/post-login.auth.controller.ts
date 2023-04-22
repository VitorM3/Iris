import EndpointDecorator from "src/shared/base/domain/decorators/endpoint.decorator";
import AuthControllerLogin from "../../decorator/auth-controller.auth.decorator";
import { EMethod } from "src/shared/base/domain/enum/method.enum";
import ValidateUserLoginDTO from "src/modules/User/domain/dto/validate-user-login.dto";
import AuthService from "../../../application/services/@AuthService";
import { Body, Res } from "@nestjs/common";

@AuthControllerLogin.localAuth()
export default class PostLoginAuthController {
    public constructor(
        private readonly authService: AuthService
    ){}

    @EndpointDecorator.apply({
        endpoint: {method: EMethod.POST,  url: 'login'},
        description: "Login de usuário no sistema",
        name: "Login de Usuário",
        responses: [
            {
                description: "Login efetuado com sucesso",
                status: 200,
                object: {
                    example:{
                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODIxMzU5MjcsImV4cCI6MTY4MjE1MzkyN30.TWN9QWUlrueicfh7ITXQXyWd-d-IE86kppBf0oQHkXc"
                    }
                }
            },
            {
                description: "Usuário não tem permissão para realizar o login",
                status: 401,
            }
        ]
    })
    public async login(@Body() dto: ValidateUserLoginDTO, @Res({passthrough: true}) res){
        const id = res.user as number;
        return await this.authService.login.execute(id)
    }
}