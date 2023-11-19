import { prisma } from "~/database/prisma";
import { faker } from "@faker-js/faker";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id, full_name, email } = body;

  const data = await prisma.userData.create({
    data: {
      id: id,
      handle: faker.internet.userName().toLowerCase(),
      full_name: full_name ?? "Anonymous",
      skills: [] as Array<string>,
      interests: [] as Array<string>,
      email: email,
    }
  }).catch((err) => {
    console.error(err);
    return { status: 500, body: err.message };
  });

  return { status: 200, body: JSON.stringify(data) };
});
