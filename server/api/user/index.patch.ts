import { serverSupabaseClient } from "#supabase/server";

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
  const supabase = await serverSupabaseClient(event);

  const { data: handleData } = await supabase
    .from("userData")
    .select("handle, email")
    .eq("handle", handle)
    .not("id", "eq", id)
    .single();

  if (handleData?.handle)
    return { status: 500, errMsg: "user.update.handle.taken" };

  // interface IUserUpdate {
  //   handle: string;
  //   full_name: string;
  //   skills: Array<string>;
  //   interests: Array<string>;
  //   bio: string;
  //   introduction: string;
  //   location: string;
  // }

  const { error } = await supabase
    .from("userData")
    .update({
      handle: handle.toLowerCase(),
      full_name,
      skills,
      interests,
      bio,
      introduction,
      location,
    } as never)
    .eq("id", id);

  if (error) return { status: 500, body: error.message };

  return { status: 200 };
});
