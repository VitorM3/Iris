import { Injectable } from "@nestjs/common";
import GetUserProvider from "./class/get.user.providers";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/core/database/application/services/database.service";
import PostUserProvider from "./class/post.user.providers";

@Injectable()
export default class UserProvider {
    private userTableAccess: Prisma.usersDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>

    public get: GetUserProvider
    public post: PostUserProvider
    public constructor(
        private readonly databaseService: DatabaseService
    ){
        this.userTableAccess = this.databaseService.users

        this.get = new GetUserProvider(this.userTableAccess)
        this.post = new PostUserProvider(this.userTableAccess)
    }
}