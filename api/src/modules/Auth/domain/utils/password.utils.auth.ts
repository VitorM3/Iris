import * as crypt from 'bcrypt'

export default class PasswordCrypt {
    public static async verifyHash(password: string, hash: string){
        return await crypt.compare(password,hash)
    }

    public static async hash(password: string){
        const salts = crypt.genSaltSync(20);
        return crypt.hashSync(password,salts);
    }
}