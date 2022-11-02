import * as bcrypt from 'bcrypt';

export namespace SecurityUtils {
    export async function getSalt() {
        return await bcrypt.genSaltSync(4);
    }

    export async function hashPassword(password: string, salt?: string) {
        if (!salt) {
            salt = await getSalt();
        }
        var hash = await bcrypt.hashSync(password, salt);;
        return hash;
    }

    export async function compare(hashedPassword: string, doubleHashedPassword: string) {
        var isEqual = await bcrypt.compare(hashedPassword, doubleHashedPassword);
        return isEqual;
    }
}