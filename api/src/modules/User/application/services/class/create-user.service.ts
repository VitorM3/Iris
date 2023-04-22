import CreateUserDTO from "src/modules/User/domain/dto/create-user.dto";
import ServiceAbstractBase from "src/shared/base/domain/abstract-class/abstract-service.base";
import UserProvider from "../../providers/@UserProvider";
import { HttpException } from "@nestjs/common";
import PasswordCrypt from "src/modules/Auth/domain/utils/password.utils.auth";

export default class CreateUserService extends ServiceAbstractBase<CreateUserDTO> {
    public constructor(
        private readonly userProvider: UserProvider
    ){
        super()
    }
    public async execute(params: CreateUserDTO) {
        const user = await this.userProvider.get.byEmailWithPassword(params.email)
        if(user){
            throw new HttpException("Usuário com este Email já foi cadastrado",404)
        }
        const password = await PasswordCrypt.hash(params.password)
        params.password = password;
        return await this.userProvider.post.create(params)
    }
}