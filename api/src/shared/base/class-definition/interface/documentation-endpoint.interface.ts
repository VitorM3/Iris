import { EMethod } from "../enum/method.enum";

export default interface IDocumentationEndpoint {
    url: string,
    method: EMethod
}