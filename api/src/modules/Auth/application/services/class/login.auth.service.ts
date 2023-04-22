import { JwtService } from "@nestjs/jwt";
import ServiceAbstractBase from "src/shared/base/domain/abstract-class/abstract-service.base";

export default class LoginAuthService extends ServiceAbstractBase<number> {
    public constructor(
        private readonly jwtService: JwtService
    ){
        super()
    }
    public execute(idUser: number) {
        const payload = {id: idUser}
        const token = this.jwtService.sign(payload)
        return {token}
    }
}