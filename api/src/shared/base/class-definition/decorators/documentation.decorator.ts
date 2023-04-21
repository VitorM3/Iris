import { applyDecorators, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EMethod } from '../enum/method.enum';
import IDocumentationEndpoint from '../interface/documentation-endpoint.interface';
import IDocumentationResponse from '../interface/documentation-response.interface';
import IDocumentationBase from '../interface/documentation.interface.base';

/**
 * Estabelecer Endpoint e Documentação deste
 */
export default class EndpointDecorator {
  public static apply(doc: IDocumentationBase) {
    return applyDecorators(
      this.defineMethod(doc.endpoint),
      ApiOperation({ description: doc.description, summary: doc.name }),
      ...this.defineResponses(doc.responses),
    );
  }

  private static defineMethod(endpoint: IDocumentationEndpoint) {
    switch (endpoint.method) {
      case EMethod.GET:
        return applyDecorators(Get(endpoint.url));
      case EMethod.POST:
        return applyDecorators(Post(endpoint.url));
      case EMethod.PUT:
        return applyDecorators(Put(endpoint.url));
      case EMethod.PATCH:
        return applyDecorators(Patch(endpoint.url));
      case EMethod.DELETE:
        return applyDecorators(Delete(endpoint.url));
      default:
        break;
    }
  }

  private static defineResponses(responses: IDocumentationResponse[]) {
    return responses.map((response) => {
      return applyDecorators(
        ApiResponse({
          description: response.description,
          content: response.object,
          status: response.status,
        }),
      );
    });
  }
}
