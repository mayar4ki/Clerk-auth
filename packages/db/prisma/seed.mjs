import { PrismaClient } from "@prisma/client";
import { genSalt, hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const salt = await genSalt(10);
  const hashedPassword = await hash("password", salt);

  const admin = await prisma.user.upsert({
    where: {
      email: "admin@admin.com",
    },
    update: {},
    create: {
      email: "admin@admin.com",
      gender: "male",
      type: "ADMIN",
      password: hashedPassword,
      name: "mayar",
      accounts: {
        create: {
          type: "credentials",
          provider: "credentials",
          providerAccountId: "admin",
        },
      },
    },
  });

  console.log(admin);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
