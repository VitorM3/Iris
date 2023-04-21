import * as crypt from 'bcrypt'

export default class PasswordCrypt {
    public static async verifyHash(password: string, hash: string){
        return await crypt.compare(password,hash)
    }
}