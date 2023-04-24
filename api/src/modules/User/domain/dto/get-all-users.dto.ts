import ParamsDTODecorator from "src/shared/base/domain/decorators/params-dto.decorator";
import GetAllDTO from "src/shared/base/domain/dto/get-all.dto";

export default class GetAllUsersDTO extends GetAllDTO {
    @ParamsDTODecorator.optional<string>({
        description: "Nome ou inicio do nome do usuário",
        example: "Vitor",
    })
    public name?: string

    @ParamsDTODecorator.optional<string>({
        description: "Email ou inicio do email do usuário",
        example: "vitor@test.com",
    })
    public email?: string
}