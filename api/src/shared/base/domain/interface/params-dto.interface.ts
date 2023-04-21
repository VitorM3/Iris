export default interface IParamsDTO<T> {
    description: string,
    example: T,
    min?: number,
    max?: number
}