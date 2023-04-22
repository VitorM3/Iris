import { Module } from "@nestjs/common";
import UserProvider from "./application/providers/@UserProvider";
import UserService from "./application/services/@UserService";
import UserControllers from "./router/controller/@UserController";

@Module({
    providers:[UserProvider,UserService],
    controllers:[...UserControllers],
    exports:[UserService],
})
export default class UserModule {}