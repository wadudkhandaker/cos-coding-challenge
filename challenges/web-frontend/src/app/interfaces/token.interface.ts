export interface Token {
    authenticated?: boolean;
    userId?: string;
    internalUserId?: number;
    internalUserUUID?: string;
    token?: string;
    type?: number;
    privileges?: string;
    userRole?: string;
    authenticationChallenge?: string;
    authenticationError?: AuthenticationError;
}

export interface AuthenticationError {
    name?: string;
    message?: string;
    stack?: string;
}