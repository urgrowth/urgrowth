import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);
  const supabase = await serverSupabaseClient(event);

  if (id) {
    const { data } = await supabase
      .from("projectData")
      .select("*")
      .or(
        `id.eq.${id}`,
      )
      .single();

    return { status: 200, body: data };
  } else {
    return { status: 400, body: "Missing required field (id)" };
  }
});