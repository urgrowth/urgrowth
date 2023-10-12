import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);

  const { data } = await supabase
    .from("projectData")
    .select("*")
    .order("created_at", { ascending: false });

  return { status: 200, body: data };
});