-- Migration: Remove users table and author_id from posts
-- Date: 2025-11-23
-- Description: Remove the users table and author_id column from posts table as they are no longer needed

-- Step 1: Remove the trigger that creates users on auth.users insert
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Step 2: Drop the function that handles new user creation
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Step 3: Drop RLS policies related to users table and author_id
DROP POLICY IF EXISTS "Enable update for users based on user_id" ON public.posts;
DROP POLICY IF EXISTS "Enable update for users based on email" ON public.users;
DROP POLICY IF EXISTS "read user profiles" ON public.users;

-- Step 4: Drop the foreign key constraint from posts to users
ALTER TABLE public.posts DROP CONSTRAINT IF EXISTS posts_author_id_fkey;

-- Step 5: Drop the author_id column from posts table (preserving all other data)
ALTER TABLE public.posts DROP COLUMN IF EXISTS author_id;

-- Step 6: Drop the trigger for user validation
DROP TRIGGER IF EXISTS before_user_update ON public.users;

-- Step 7: Drop the validation function
DROP FUNCTION IF EXISTS public.validate_user_update();

-- Step 8: Revoke grants on users table
REVOKE ALL ON TABLE public.users FROM anon;
REVOKE ALL ON TABLE public.users FROM authenticated;
REVOKE ALL ON TABLE public.users FROM service_role;

REVOKE ALL ON SEQUENCE public.users_id_seq FROM anon;
REVOKE ALL ON SEQUENCE public.users_id_seq FROM authenticated;
REVOKE ALL ON SEQUENCE public.users_id_seq FROM service_role;

-- Step 9: Drop the users table (all data will be removed)
DROP TABLE IF EXISTS public.users CASCADE;
