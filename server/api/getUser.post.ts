import { serverSupabaseClient } from "#supabase/server";
import crypto from "crypto";
import { faker } from "@faker-js/faker";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id, handle, full_name, email } = body;
  const supabase = await serverSupabaseClient(event);

  const { data: user } = await supabase
    .from("userData")
    .select("*")
    // This fallback UUID must be a valid UUID, otherwise it will throw an error 500
    .or(
      `id.eq.${id ?? "2df6fa9b-4669-44a2-8cc3-02d6c50b6caa"},handle.eq.${
        handle || "x"
      }`,
    )
    .single();

  if (!user) {
    // Create a new user
    const { error } = await supabase.from("userData").insert({
      id: id,
      handle: faker.internet.userName(),
      full_name: full_name ?? "Anonymous",
      skills: [],
      interests: [],
      email: email,
    });

    if (error) return { status: 500, body: error.message };
  }

  const md5 = crypto
    .createHash("md5")
    .update(Buffer.from(email ?? ""))
    .digest("hex");
  user.avatarURL = `https://www.gravatar.com/avatar/${md5}?d=retro&size=128`;

  return { status: 200, body: JSON.stringify(user) };
});
