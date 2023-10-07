import { serverSupabaseClient } from "#supabase/server";
import md5 from "md5/md5";
import crypto from "crypto";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id, handle, full_name, skills, interests, bio, introduction } = body;
  const supabase = await serverSupabaseClient(event);

  const skillsFiltered = skills.filter((skill: string) => skill !== "");
  const interestsFiltered = interests.filter(
    (interest: string) => interest !== "",
  );

  if (handle > 32)
    return { status: 500, body: "Handle must be less than 32 characters" };
  if (full_name > 64)
    return { status: 500, body: "Full name must be less than 64 characters" };
  if (skillsFiltered.length > 5)
    return { status: 500, body: "Skills must be less than 5" };
  if (interestsFiltered.length > 5)
    return { status: 500, body: "Interests must be less than 5" };
  if (bio > 256)
    return { status: 500, body: "Bio must be less than 256 characters" };
  if (introduction > 2048)
    return {
      status: 500,
      body: "Introduction must be less than 2048 characters",
    };

  if (!handle) return { status: 500, body: "Handle is required" };
  if (!full_name) return { status: 500, body: "Full name is required" };

  const { data: handleData } = await supabase
    .from("userData")
    .select("handle")
    .eq("handle", handle)
    .single();

  if (handleData?.handle) return { status: 500, body: "Handle already exists" };

  const { error } = await supabase
    .from("userData")
    .update({
      handle: handle,
      full_name: full_name,
      skills: skills,
      interests: interests,
      bio: bio,
      introduction: introduction,
    })
    .eq("id", id);

  if (error) return { status: 500, body: error.message };
  const md5 = crypto
    .createHash("md5")
    .update(Buffer.from(email ?? ""))
    .digest("hex");
  user.avatarURL = `https://www.gravatar.com/avatar/${md5}?d=retro&size=128`;

  return { status: 200 };
});
