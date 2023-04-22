import { Prisma } from "@prisma/client";
import ICreateUserProvider from "src/modules/User/domain/interface/create-user-provider.user.interface";
import selectDefaultUser from "src/modules/User/domain/object-provider/select-user";

export default class PostUserProvider {
    public constructor(
        private readonly userService: Prisma.usersDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>,
    ){}

    public async create(data: ICreateUserProvider){
        return await this.userService.create({
            data,
            select: selectDefaultUser
        })
    }
}