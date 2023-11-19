import { prisma } from "~/database/prisma";

export default defineEventHandler(async (event) => {
  const data = await prisma.projectData.findMany({
    orderBy: {
      created_at: "desc",
    }
  });

  return { status: 200, body: JSON.stringify(data) };
});