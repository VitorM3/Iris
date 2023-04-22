import { EMethod } from "../enum/method.enum";

export default class ControllerAbstractBase {
    private method: EMethod
    public constructor(method: EMethod){
        this.method = method
    }
}