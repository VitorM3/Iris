import ServiceAbstractBase from "src/shared/base/domain/abstract-class/abstract-service.base";
import UserProvider from "../../providers/@UserProvider";
import PaginationReturn from "src/shared/base/domain/interface/pagination-return.interface";
import GetAllUsersDTO from "src/modules/User/domain/dto/get-all-users.dto";
import AbstractGetMany from "src/shared/base/domain/abstract-class/abstract-get-many.base";

export default class GetAllUsersService extends ServiceAbstractBase<GetAllUsersDTO>{
    public constructor(
        private readonly userProvider: UserProvider
    ){
        super()
    }
    public async execute(filters: GetAllUsersDTO): Promise<PaginationReturn<any>> {
        return await AbstractGetMany.getMany(
            this.userProvider.get.all,
            filters
        )
    }
}