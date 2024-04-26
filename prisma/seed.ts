import { PrismaClient } from '@prisma/client'

const db = new PrismaClient();

async function main() {

    await db.user.create({
        data: {
            name: 'Marcelo Moreira',
            username: 'marcelosmbr',
            email: 'development.smbr@gmail.com',
            password: '123123',
        }
    })

}

main()
    .then(async () => {
        await db.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await db.$disconnect()
        process.exit(1)
    })