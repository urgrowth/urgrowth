import { serverSupabaseClient } from "#supabase/server";
import crypto from "crypto";

export default defineEventHandler(async (event) => {
  const { id, handle, email } = await readBody(event);
  const supabase = await serverSupabaseClient(event);

  console.log(id, handle, email);
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

  if (!user) return { status: 500, body: "User not found" };

  const md5 = crypto
    .createHash("md5")
    .update(Buffer.from(user.email ?? email ?? ""))
    .digest("hex");
  user!.avatarURL = `https://www.gravatar.com/avatar/${md5}?d=retro&size=1024`;

  return { status: 200, body: JSON.stringify(user) };
});
