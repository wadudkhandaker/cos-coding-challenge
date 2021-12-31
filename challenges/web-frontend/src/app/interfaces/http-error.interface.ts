export interface HttpError {
    message?: string;
    msgKey?: string;
    params?: Params
}

interface Params {
    userId?: string
}