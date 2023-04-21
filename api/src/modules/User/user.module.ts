import { Module } from "@nestjs/common";
import UserProvider from "./application/providers/@UserProvider";
import UserService from "./application/services/@UserService";

@Module({
    providers:[UserProvider,UserService],
    exports:[UserService]
})
export default class UserModule {}