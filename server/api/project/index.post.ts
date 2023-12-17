import { prisma } from "~/database/prisma";

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);

  if (id) {
    const data = await prisma.projectData.findUnique({
      where: {
        id: id,
      },
    });

    return { status: 200, body: data };
  } else {
    return { status: 400, body: "Missing required field (id)" };
  }
});
