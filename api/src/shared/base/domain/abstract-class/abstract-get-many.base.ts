import { HttpException } from "@nestjs/common";
import GetAllDTO from "../dto/get-all.dto";
import IGetAllReturnProvider from "../interface/get-all-return-provider.interface";

export default class AbstractGetMany {
    public static async getMany(providerGetAll: (filters: any) => Promise<IGetAllReturnProvider>, filters: GetAllDTO){
        if(!filters.take || !filters.page || parseInt(`${filters.page}`) <= 0){
            throw new HttpException("Parâmetros de paginação não foram enviados devidamente",404)
        }
        const {data,count} = await providerGetAll({
            ...filters,
            skip: Math.round(filters.take * (filters.page ?  filters.page - 1 : 0))
        })
        return {
            data,
            page: filters.page,
            total: count,
            pages: Math.round(count / filters.take) <= 0 ? 1 : Math.round(count / filters.take)
        }
    }
}