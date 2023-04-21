import { INestApplication } from "@nestjs/common";
import { DatabaseService } from "../application/services/database.service";

export default class DatabaseConfig {
    public static async define(app:INestApplication){
        const database = app.get(DatabaseService);
        await database.enableShutdownHooks(app)
    }
}