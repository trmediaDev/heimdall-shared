import * as bcrypt from 'bcrypt';

export namespace SecurityUtils {
    export async function getSalt() {
        return await bcrypt.genSaltSync(4);
    }

    export async function hashPassword(password: string, salt?: string) {
        if (!salt) {
            salt = await getSalt();
        }
        return await bcrypt.hashSync(password, salt);
    }

    export async function compare(hashedPassword: string, doubleHashedPassword: string) {
        return await bcrypt.compare(hashedPassword, doubleHashedPassword);
    }
}
