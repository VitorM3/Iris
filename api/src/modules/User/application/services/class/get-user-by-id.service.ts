import ServiceAbstractBase from "src/shared/base/domain/abstract-class/abstract-service.base";
import UserProvider from "../../providers/@UserProvider";
import { HttpException } from "@nestjs/common";

export default class GetUserByIdService extends ServiceAbstractBase<number>{
    public constructor(
        private readonly userProvider: UserProvider
    ){
        super()
    }
    public async execute(id: number) {
        const user = await this.userProvider.get.byId(id);
        if(!user){
            throw new HttpException("Usuário não encontrado",404)
        }
        return user;
    }
}