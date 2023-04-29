import GetUserController from "./endpoint/get.user.controller";
import PostUserController from "./endpoint/post-without-login.user.controller";

const UserControllers = [
    PostUserController,
    GetUserController
]

export default UserControllers