import UserService from "src/modules/User/application/services/@UserService";
import UserController from "../../decorator/user-controller.user.controller.decorator";
import EndpointDecorator from "src/shared/base/domain/decorators/endpoint.decorator";
import { Param } from "@nestjs/common";
import { EMethod } from "src/shared/base/domain/enum/method.enum";

@UserController.withLogin()
export default class GetUserController {
    public constructor(
        private readonly userService: UserService
    ){}

    @EndpointDecorator.apply({
        endpoint: {method: EMethod.GET, url: ":id"},
        description: "Buscar usuário pelo seu ID",
        name: "Buscar usuário pelo Id",
        responses: [
            {
                description: "Usuário buscado com sucesso",
                status: 200
            },
            {
                description: "Usuário não encontrado",
                status: 404
            }
         
        ],
        withLogin: true
    })
    public async getUserById(@Param("id") id: number){
        return await this.userService.getById.execute(id)
    }

}