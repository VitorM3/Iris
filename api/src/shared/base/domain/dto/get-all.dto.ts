import ParamsDTODecorator from "../decorators/params-dto.decorator";

export default class GetAllDTO {
    @ParamsDTODecorator.mandatory<number>({
        description: "Quantidade de dados que serão enviados na busca",
        example: 20
    })
    public take: number

    @ParamsDTODecorator.mandatory<number>({
        description: "Número da página a ser acessada",
        example: 1
    })
    public page: number
}