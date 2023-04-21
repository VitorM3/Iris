import { Prisma } from ".prisma/client";

export default class GetUserProvider {
    public constructor(
        private readonly userService: Prisma.usersDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>,
    ){}

    public async byEmailWithPassword(email: string){
        return await this.userService.findFirst({
            where: {
              email  
            },
            include:{
                friends: true
            }
        })
    }
}