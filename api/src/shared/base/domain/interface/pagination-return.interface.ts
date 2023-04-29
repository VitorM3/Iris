export default interface PaginationReturn<T>{
    data: T,
    total: number,
    page: number
    pages: number
}