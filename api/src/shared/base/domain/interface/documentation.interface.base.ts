import IDocumentationEndpoint from "./documentation-endpoint.interface";
import IDocumentationResponse from "./documentation-response.interface";

export default interface IDocumentationBase {
    endpoint: IDocumentationEndpoint,
    name: string,
    description: string,
    withLogin?: boolean,
    responses: IDocumentationResponse[]
}