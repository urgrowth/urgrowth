import { serverSupabaseClient } from "#supabase/server";
import md5 from "md5/md5";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { id, handle } = body;
  const supabase = await serverSupabaseClient(event);

  const { data: user, error } = await supabase
    .from('userData')
    .select('*')
    // This fallback UUID must be a valid UUID, otherwise it will throw an error 500
    .or(`id.eq.${id ?? '2df6fa9b-4669-44a2-8cc3-02d6c50b6caa'},handle.eq.${handle || 'x'}`)
    .single();

  if (error) return { status: 500, body: error.message };
  if (!user) return { status: 404, body: 'User not found' }

  user.avatarURL = `https://www.gravatar.com/avatar/${md5(user.email)}?d=retro&s=128`;

  return { status: 200, body: JSON.stringify(user) };
})