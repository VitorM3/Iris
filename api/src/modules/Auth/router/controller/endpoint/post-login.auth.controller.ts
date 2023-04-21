import EndpointDecorator from "src/shared/base/domain/decorators/endpoint.decorator";
import AuthControllerLogin from "../../decorator/auth-controller-without-login.auth.decorator";
import { EMethod } from "src/shared/base/domain/enum/method.enum";
import ValidateUserLoginDTO from "src/modules/User/domain/dto/validate-user-login.dto";
import AuthService from "../../../application/services/@AuthService";
import { Body, Res } from "@nestjs/common";

@AuthControllerLogin.apply()
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
                        token: "ETwdwqdqwdqwdqwouGT1729"
                    }
                }
            },
            {
                description: "Usuário não tem permissão para realizar o login",
                status: 401,
            }
        ]
    })
    public async login(@Body() dto: ValidateUserLoginDTO, @Res() res){
        const id = res.user as number;
        return this.authService.login.execute(id)
    }
}