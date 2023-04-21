import { ContentObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";

export default interface IDocumentationResponse {
    description: string,
    status: number,
    object: ContentObject
}