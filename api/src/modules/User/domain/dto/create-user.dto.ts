import ParamsDTODecorator from "src/shared/base/domain/decorators/params-dto.decorator";

export default class CreateUserDTO {
    @ParamsDTODecorator.mandatory<string>({
        description: "Nome do respectivo usuário",
        example: "Vitor"
    })
    public name: string;

    @ParamsDTODecorator.mandatory<string>({
        description: "Email do respectivo usuário",
        example: "vitor@test.com"
    })
    public email: string;

    @ParamsDTODecorator.mandatory<string>({
        description: "Senha do respectivo usuário",
        example: "batatinha123"
    })
    public password: string;
}