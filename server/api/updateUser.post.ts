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

  if (!handle.match(/^[a-zA-Z0-9_]+$/))
    return {
      status: 500,
      body: "Handle must only contain alphanumeric characters and underscores",
    };

  const { data: handleData } = await supabase
    .from("userData")
    .select("handle, email")
    .eq("handle", handle)
    .not("id", "eq", id)
    .single();

  if (handleData?.handle) return { status: 500, body: "Handle already exists" };

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
