import UserService from "src/modules/User/application/services/@UserService";
import UserController from "../../decorator/user-controller.user.controller.decorator";
import EndpointDecorator from "src/shared/base/domain/decorators/endpoint.decorator";
import { Param, Query } from "@nestjs/common";
import { EMethod } from "src/shared/base/domain/enum/method.enum";
import GetAllUsersDTO from "src/modules/User/domain/dto/get-all-users.dto";

@UserController.withLogin()
export default class GetUserController {
    public constructor(
        private readonly userService: UserService
    ){}

    @EndpointDecorator.apply({
        endpoint: {method: EMethod.GET,url:""},
        name: "Buscar todos os usuários",
        description: "Buscar todos os usuários com base nos filtros e nos parâmetros de paginação enviados",
        responses: [
            {
                description: "Usuários encontrados e filtrados com sucesso",
                status: 200
            },
            {
                description: "Parâmetros de paginação não foram devidamente enviados",
                status: 404
            },
        ],
        withLogin:  true,
    })
    public async getAllUsers(@Query() filter: GetAllUsersDTO){
        return await this.userService.getAll.execute(filter)
    }

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