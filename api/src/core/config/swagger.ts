import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme } from 'swagger-themes';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const json = require('../../../package.json');

export default class SwaggerConfig {
  public static define(app: INestApplication) {
    const base = new DocumentBuilder()
      .setTitle('Iris-Api')
      .setVersion(json.version)
      .addBearerAuth()
      .build();
      const theme = new SwaggerTheme('v3')
      const optionTheme:SwaggerCustomOptions = {
        explorer: false,
        customCss: theme.getBuffer('material')
      }
    const document = SwaggerModule.createDocument(app, base);
    SwaggerModule.setup('doc', app, document, optionTheme);
  }
}
