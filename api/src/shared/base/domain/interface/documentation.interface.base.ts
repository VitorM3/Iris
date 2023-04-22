import { EMethod } from "../enum/method.enum";
import IDocumentationEndpoint from "./documentation-endpoint.interface";
import IDocumentationResponse from "./documentation-response.interface";

export default interface IDocumentationBase {
    endpoint: IDocumentationEndpoint,
    name: string,
    description: string,
    responses: IDocumentationResponse[]
}