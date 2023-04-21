import ControllerDecorator from "src/shared/base/class-definition/decorators/controller.decorator";
import EndpointDecorator from "src/shared/base/class-definition/decorators/documentation.decorator";
import { EMethod } from "src/shared/base/class-definition/enum/method.enum";

@ControllerDecorator.apply({
    name: "test",
    description: "Isso é um test"
})
export default class TestController {

    @EndpointDecorator.apply({
        endpoint: {method: EMethod.GET,url:"test"},
        name: "test",
        description: "Isso é um test tmb",
        responses: []
    })
    public async test(){
        return "oie"
    }
}