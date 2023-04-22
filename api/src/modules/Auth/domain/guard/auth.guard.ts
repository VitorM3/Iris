import { UseGuards, applyDecorators } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export default class AuthGuardDecorator {
    public static local(){
        return applyDecorators(
            UseGuards(AuthGuard('local'))
        )
    }
    public static jwt(){
        return applyDecorators(
            UseGuards(AuthGuard('jwt'))
        )
    }
}