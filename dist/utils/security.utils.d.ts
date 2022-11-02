export declare namespace SecurityUtils {
    function getSalt(): Promise<any>;
    function hashPassword(password: string, salt?: string): Promise<any>;
    function compare(hashedPassword: string, doubleHashedPassword: string): Promise<any>;
}
