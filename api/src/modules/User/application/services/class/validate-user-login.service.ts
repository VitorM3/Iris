import ServiceAbstractBase from "src/shared/base/domain/abstract-class/abstract-service.base";
import UserProvider from "../../providers/@UserProvider";
import ValidateUserLoginDTO from "src/modules/User/domain/dto/validate-user-login.dto";
import PasswordCrypt from "src/modules/Auth/domain/utils/password.utils.auth";
import { HttpException } from "@nestjs/common";

export default class ValidateUserLoginService extends ServiceAbstractBase<ValidateUserLoginDTO> {
    public constructor(
        private readonly userProvider: UserProvider
    ){
        super();
    }
    public async execute({email,password}: ValidateUserLoginDTO): Promise<number | null> {
        const user = await this.userProvider.get.byEmailWithPassword(email)
        if(!user){
            throw new HttpException("Email não encontrado",401)
        }
        if(PasswordCrypt.verifyHash(password,user.password)){
            return  user.id
        }
        return null
    }
}