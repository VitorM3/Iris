import { applyDecorators } from "@nestjs/common";
import ControllerDecorator from "src/shared/base/domain/decorators/controller.decorator";

export default class AuthControllerLogin  {
    public static localAuth(){
        return applyDecorators(
            ControllerDecorator.apply({
                name: 'auth',
                withLocalAuth: true
            })
        )
    }
}