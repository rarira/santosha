-- Update centers table schema
-- Remove: phone, email, link
-- Add: naver_place_id, social_link

-- Drop columns that are no longer needed
ALTER TABLE public.centers DROP COLUMN IF EXISTS phone;
ALTER TABLE public.centers DROP COLUMN IF EXISTS email;
ALTER TABLE public.centers DROP COLUMN IF EXISTS link;

-- Add new columns
ALTER TABLE public.centers ADD COLUMN IF NOT EXISTS naver_place_id TEXT;
ALTER TABLE public.centers ADD COLUMN IF NOT EXISTS social_link TEXT;

-- Update column comments
COMMENT ON COLUMN public.centers.naver_place_id IS '네이버 플레이스 ID';
COMMENT ON COLUMN public.centers.social_link IS '소셜 미디어 링크 (인스타그램 등)';
