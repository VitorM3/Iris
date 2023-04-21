import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import IControllerDefinition from '../interface/controller-definition.interface';
import AuthGuardDecorator from 'src/modules/Auth/domain/guard/auth.guard';

  /**
   * Classe de Definição do Decorator para documentação do Swagger e para definição de Controller
   */
export default class ControllerDecorator {

  public static apply(dataOfDecorator: IControllerDefinition) {
    const decorators = []
    if(dataOfDecorator.withLocalAuth){
      decorators.push(applyDecorators(AuthGuardDecorator.local()))
    }
    return applyDecorators(
      Controller(dataOfDecorator.name),
      ApiTags(
        dataOfDecorator.nameSwagger ?? dataOfDecorator.name[0].toUpperCase() + dataOfDecorator.name.substring(1),
      ),
      ...decorators
    );
  }
}
