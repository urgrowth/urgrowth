import { prisma } from "~/database/prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    id,
    handle,
    full_name,
    skills,
    interests,
    bio,
    introduction,
    location,
  } = body;

  const handleData = await prisma.userData.findUnique({
    where: {
      handle: handle,
      NOT: [
        {
          id: id,
        },
      ],
    },
    select: {
      handle: true,
      email: true,
    },
  });

  if (handleData?.handle)
    return { status: 500, errMsg: "user.update.handle.taken" };

  prisma.userData
    .update({
      where: {
        id: id,
      },
      data: {
        handle: handle.toLowerCase(),
        full_name,
        skills,
        interests,
        bio,
        introduction,
        location,
      },
    })
    .catch((err) => {
      console.error(err);
      return { status: 500, errMsg: "user.update.failed" };
    });

  return { status: 200 };
});
