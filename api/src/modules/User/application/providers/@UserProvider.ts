import { Injectable } from "@nestjs/common";
import GetUserProvider from "./class/get.user.providers";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/core/database/application/services/database.service";

@Injectable()
export default class UserProvider {
    private userTableAccess: Prisma.usersDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>

    public get: GetUserProvider
    public constructor(
        private readonly databaseService: DatabaseService
    ){
        this.userTableAccess = this.databaseService.users

        this.get = new GetUserProvider(this.userTableAccess)
    }
}