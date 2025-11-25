import { PostgrestError, createClient } from "@supabase/supabase-js";

import Util from "@/libs/util";
import { Tables, Enums } from "@/types/supabase";
import { ContactFormValues } from "app/(external)/_components/sections/contact/formSchema";

export const { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } = Util.getEnv();
export const supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

const DEFAULT_EXPIRES_IN = 60 * 5; // 5 minutes

export function splitBucketFullPath(fullPath: string) {
  const [bucket, ...path] = fullPath.split("/");
  if (!bucket) throw new Error("Invalid fullPath");

  return { bucket, path: path.join("/") };
}

export function getPublicUrl({
  bucket,
  filePath,
}: {
  bucket: string;
  filePath: string;
}): string {
  const { data } = supabaseClient.storage.from(bucket).getPublicUrl(filePath);
  return data.publicUrl;
}

export async function createSignedUrl({
  bucket,
  filePath,
  expiresIn = DEFAULT_EXPIRES_IN,
  options,
}: {
  bucket: string;
  filePath: string;
  expiresIn?: number;
  options?: { download?: string | boolean; transform?: any };
}): Promise<{ signedUrl: string; path: string }> {
  // For now, just use public URL since the bucket is public
  // Image transformation can be added later if needed
  const publicUrl = getPublicUrl({ bucket, filePath });
  
  return { signedUrl: publicUrl, path: filePath };
}

export async function createContact(
  formData: ContactFormValues
): Promise<PostgrestError | null> {
  const { error } = await supabaseClient.from("contacts").insert({
    ...formData,
    phoneNo: undefined,
    phone_no: formData.phoneNo?.replace(/-/g, ""),
  });

  return error;
}

export async function getUser() {
  const {
    data: { user },
    error,
  } = await supabaseClient.auth.getUser();

  if (error) {
    throw error;
  }

  return user;
}

export async function getPosts({
  categoryId,
  columns,
}: {
  categoryId?: number;
  columns?: string[];
} = {}): Promise<Tables<"posts">[]> {
  let promise = supabaseClient
    .from("posts")
    .select(columns?.join(",") || "*")
    .order("id");

  if (categoryId) promise = promise.eq("category_id", categoryId);

  const { data, error } = await promise;

  if (error) {
    return [];
  }

  return data as unknown as Tables<"posts">[];
}

export async function getCategory(
  name: Enums<"CategoryName">
): Promise<Tables<"categories">> {
  const { data, error } = await supabaseClient
    .from("categories")
    .select()
    .eq("name", name);
  if (error) {
    throw error;
  }

  return data[0];
}

export async function getSchedules(): Promise<
  (Tables<"schedules"> & { center: Tables<"centers"> | null })[]
> {
  const { data, error } = await supabaseClient
    .from("schedules")
    .select(
      `
      *,
      centers(*)
    `
    )
    .order("day_of_week")
    .order("start_time");

  if (error) {
    return [];
  }

  // Rename centers to center
  const result = data?.map((schedule: any) => ({
    ...schedule,
    center: schedule.centers || null,
    centers: undefined,
  }));

  return result as unknown as (Tables<"schedules"> & {
    center: Tables<"centers"> | null;
  })[];
}
