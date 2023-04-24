import IPaginationParams from "src/shared/base/domain/interface/pagination-params.interface";

export default interface IGetAllUserProvider extends IPaginationParams {
    name?: string;
    email?: string;
}