import { serverSupabaseClient } from "#supabase/server";
import crypto from "crypto";
import { faker } from "@faker-js/faker";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id, handle, full_name, email, createUser } = body;
  const supabase = await serverSupabaseClient(event);

  const { data } = await supabase
    .from("userData")
    .select("*")
    // This fallback UUID must be a valid UUID, otherwise it will throw an error 500
    .or(
      `id.eq.${id ?? "2df6fa9b-4669-44a2-8cc3-02d6c50b6caa"},handle.eq.${
        handle || "x"
      }`,
    )
    .single();

  interface IUser {
    id: string;
    handle: string;
    full_name: string;
    skills: Array<string>;
    interests: Array<string>;
    email: string;
    avatarURL: string;
  }

  const user = data as IUser | null;

  if (!user && createUser) {
    // Create a new user
    const { error } = await supabase.from("userData").insert({
      id: id,
      handle: faker.internet.userName().toLowerCase(),
      full_name: full_name ?? "Anonymous",
      skills: [] as Array<string>,
      interests: [] as Array<string>,
      email: email,
    } as never);

    if (error) return { status: 500, body: error.message };
  } else if (!user && !createUser) {
    return { status: 404, body: "User not found" };
  }

  const md5 = crypto
    .createHash("md5")
    .update(Buffer.from(email ?? user?.email ?? ""))
    .digest("hex");
  user!.avatarURL = `https://www.gravatar.com/avatar/${md5}?d=retro&size=128`;

  return { status: 200, body: JSON.stringify(user) };
});
