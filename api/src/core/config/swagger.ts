import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const json = require('../../../package.json');

export default class SwaggerConfig {
  public static define(app: INestApplication) {
    const base = new DocumentBuilder()
      .setTitle('Iris-Api')
      .setVersion(json.version)
      .build();
    const document = SwaggerModule.createDocument(app, base);
    SwaggerModule.setup('doc', app, document);
  }
}
