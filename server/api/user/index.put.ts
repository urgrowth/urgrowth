import { serverSupabaseClient } from "#supabase/server";
import { faker } from "@faker-js/faker";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id, full_name, email } = body;
  const supabase = await serverSupabaseClient(event);

  const { data, error } = await supabase
    .from("userData")
    .insert({
      id: id,
      handle: faker.internet.userName().toLowerCase(),
      full_name: full_name ?? "Anonymous",
      skills: [] as Array<string>,
      interests: [] as Array<string>,
      email: email,
    } as never)
    .select();

  if (error) return { status: 500, body: error.message };

  return { status: 200, body: JSON.stringify(data) };
});
