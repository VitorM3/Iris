import { Prisma } from ".prisma/client";
import selectDefaultUser from "src/modules/User/domain/object-provider/select-user";

export default class GetUserProvider {
    public constructor(
        private readonly userService: Prisma.usersDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>,
    ){}

    public async byEmailWithPassword(email: string){
        return await this.userService.findFirst({
            where: {
              email,
              deleted_at: null
            },
            include:{
                friends: true
            }
        })
    }

    public async byId(id:number){
        return await this.userService.findFirst({
            where:{
                id,
                deleted_at: null
            },
            select:selectDefaultUser,
        })
    }
}