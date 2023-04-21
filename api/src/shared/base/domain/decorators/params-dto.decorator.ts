import { applyDecorators } from "@nestjs/common";
import IParamsDTO from "../interface/params-dto.interface";
import { ApiProperty, ApiPropertyOptional, ApiPropertyOptions } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export default class ParamsDTODecorator {
    private static createObjectOfSwagger<T>(params: IParamsDTO<T>): ApiPropertyOptions{
        return {
            description: params.description,
            example: params.example,
            minLength: params.min,
            maxLength: params.max
        }
    }

    public static optional<T>(params: IParamsDTO<T>){
        return applyDecorators(
            ApiPropertyOptional(this.createObjectOfSwagger<T>(params))
        )
    }

    public static mandatory<T>(params: IParamsDTO<T>){
        return applyDecorators(
            ApiProperty(this.createObjectOfSwagger<T>(params)),
            IsNotEmpty()
        )
    }
}