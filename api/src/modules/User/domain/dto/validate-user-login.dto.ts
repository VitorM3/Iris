import { IsEmail } from "class-validator";
import ParamsDTODecorator from "src/shared/base/domain/decorators/params-dto.decorator";

export default class ValidateUserLoginDTO {
    @ParamsDTODecorator.mandatory<string>({
        description: "Email Do usuário para realizar o login",
        example: "vitor@test.com",
    })
    @IsEmail()
    email: string

    @ParamsDTODecorator.mandatory<string>({
        description: "Senha Do usuário para realizar o login",
        example: "batatinha123",
    })
    password: string
}