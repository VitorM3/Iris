import { applyDecorators } from "@nestjs/common";
import ControllerDecorator from "src/shared/base/domain/decorators/controller.decorator";

export default class UserController {
    public static withoutLogin(){
        return applyDecorators(
            ControllerDecorator.apply({
                name: "user",
            })
        )
    }
}