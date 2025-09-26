export type ApiResult<T> = {
    status: boolean;
    message: string;
    data?: T;
};
