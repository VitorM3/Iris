import UserService from "src/modules/User/application/services/@UserService";
import UserController from "../../decorator/user-controller.user.controller.decorator";
import EndpointDecorator from "src/shared/base/domain/decorators/endpoint.decorator";
import CreateUserDTO from "src/modules/User/domain/dto/create-user.dto";
import { EMethod } from "src/shared/base/domain/enum/method.enum";
import { Body } from "@nestjs/common";

@UserController.withoutLogin()
export default class PostUserController {
    public constructor(
        private readonly userService: UserService
    ){}

    @EndpointDecorator.apply({
        endpoint: {method: EMethod.POST, url:""},
        description: "Criar um novo usuário, sem a necessidade de login",
        name: "Criar um novo usuário",
        responses: [
            {
                description: "Usuário Criado com sucesso",
                status: 200
            },
            {
                description: "Um usuário com este email já foi cadastrado neste sistema",
                status: 404
            }
        ]
    })
    public async createUser(@Body() dto: CreateUserDTO){
        return await this.userService.create.execute(dto);
    }
}