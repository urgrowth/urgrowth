import { prisma } from "~/database/prisma";
import crypto from "crypto";

export default defineEventHandler(async (event) => {
  const { id, handle, email } = await readBody(event);

  const data = await prisma.userData.findFirst({
    where: {
      OR: [
        { id: id ?? "2df6fa9b-4669-44a2-8cc3-02d6c50b6caa" },
        { handle: handle ?? "x" }
      ]
    }
  });

  const user = data as typeof data & { avatarURL?: string } | null;

  if (!user) return { status: 500, body: "User not found" };

  const md5 = crypto
    .createHash("md5")
    .update(Buffer.from(user.email ?? email ?? ""))
    .digest("hex");
  user!.avatarURL = `https://www.gravatar.com/avatar/${md5}?d=retro&size=1024`;

  return { status: 200, body: JSON.stringify(user) };
});
