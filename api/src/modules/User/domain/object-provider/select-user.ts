import { Prisma } from "@prisma/client";

const selectDefaultUser:Prisma.usersSelect = {
    email: true,
    created_at: true,
    id: true,
    name: true,
    friends: true
}
export default selectDefaultUser;