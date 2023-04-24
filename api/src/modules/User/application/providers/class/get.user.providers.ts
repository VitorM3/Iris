import { Prisma } from ".prisma/client";
import IGetAllUserProvider from "src/modules/User/domain/interface/get-all-user-provider.user.interface";
import selectDefaultUser from "src/modules/User/domain/object-provider/select-user";
import IGetAllReturnProvider from "src/shared/base/domain/interface/get-all-return-provider.interface";

export default class GetUserProvider {
    public constructor(
        private readonly userService: Prisma.usersDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>,
    ){}

    public async all({email,name,take,skip}: IGetAllUserProvider): Promise<IGetAllReturnProvider>{
        const where: Prisma.usersWhereInput = {
            
        }
        if(email){
            where.email = {
                startsWith: email
            }
        }
        if(name){
            where.name = {
                startsWith: name
            }
        }
        const users = await this.userService.findMany({
            where,
            take: parseInt(`${take}`),
            skip: parseInt(`${skip}`),
            select: selectDefaultUser
        })
        const count = await this.userService.count();
        return {data: users,count}
    }

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