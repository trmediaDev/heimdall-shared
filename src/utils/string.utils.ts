import * as crypto from 'crypto';

export namespace StringUtils {
    export function random() {
        return crypto.randomBytes(20).toString('hex');;
    }
}