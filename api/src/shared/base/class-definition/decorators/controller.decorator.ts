import { applyDecorators, Controller } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import IControllerDefinition from '../interface/controller-definition.interface';

  /**
   * Classe de Definição do Decorator para documentação do Swagger e para definição de Controller
   */
export default class ControllerDecorator {

  public static apply(dataOfDecorator: IControllerDefinition) {
    return applyDecorators(
      Controller(dataOfDecorator.name),
      ApiTags(
        dataOfDecorator.nameSwagger ?? dataOfDecorator.name[0].toUpperCase() + dataOfDecorator.name.substring(1),
      ),
    );
  }
}
