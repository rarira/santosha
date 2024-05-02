const ENV_VARS = {
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  SUPABASE_SERVICE_ROLE: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE as string,
};

export default {
  ENV_VARS,
};
