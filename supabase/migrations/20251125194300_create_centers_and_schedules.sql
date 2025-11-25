-- Create centers table
CREATE TABLE IF NOT EXISTS public.centers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  description TEXT,
  link TEXT,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Add RLS policies for centers
ALTER TABLE public.centers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view centers (public info)
CREATE POLICY "Anyone can view centers"
  ON public.centers
  FOR SELECT
  TO authenticated, anon
  USING (true);

-- Allow authenticated users to insert centers
CREATE POLICY "Authenticated users can insert centers"
  ON public.centers
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update centers
CREATE POLICY "Authenticated users can update centers"
  ON public.centers
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete centers
CREATE POLICY "Authenticated users can delete centers"
  ON public.centers
  FOR DELETE
  TO authenticated
  USING (true);

-- Create enum for class types
CREATE TYPE class_type AS ENUM ('studio', 'private', 'other');

-- Create schedules table
CREATE TABLE IF NOT EXISTS public.schedules (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  class_type class_type NOT NULL DEFAULT 'studio',
  center_id INTEGER REFERENCES public.centers(id) ON DELETE SET NULL,
  day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6), -- 0=일요일, 6=토요일
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  CONSTRAINT valid_time_range CHECK (end_time > start_time)
);

-- Add RLS policies for schedules
ALTER TABLE public.schedules ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view schedules (public calendar)
CREATE POLICY "Anyone can view schedules"
  ON public.schedules
  FOR SELECT
  TO authenticated, anon
  USING (true);

-- Allow authenticated users to insert schedules
CREATE POLICY "Authenticated users can insert schedules"
  ON public.schedules
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update schedules
CREATE POLICY "Authenticated users can update schedules"
  ON public.schedules
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete schedules
CREATE POLICY "Authenticated users can delete schedules"
  ON public.schedules
  FOR DELETE
  TO authenticated
  USING (true);

-- Create function to check for schedule conflicts
CREATE OR REPLACE FUNCTION check_schedule_conflict()
RETURNS TRIGGER AS $$
BEGIN
  -- Check if there's any overlapping schedule on the same day
  IF EXISTS (
    SELECT 1 
    FROM public.schedules 
    WHERE id != COALESCE(NEW.id, -1)
      AND day_of_week = NEW.day_of_week
      AND (
        -- New schedule starts during an existing schedule
        (NEW.start_time >= start_time AND NEW.start_time < end_time)
        OR
        -- New schedule ends during an existing schedule
        (NEW.end_time > start_time AND NEW.end_time <= end_time)
        OR
        -- New schedule completely covers an existing schedule
        (NEW.start_time <= start_time AND NEW.end_time >= end_time)
      )
  ) THEN
    RAISE EXCEPTION 'Schedule conflict: This time slot overlaps with an existing schedule';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to check for conflicts before insert or update
CREATE TRIGGER check_schedule_conflict_trigger
  BEFORE INSERT OR UPDATE ON public.schedules
  FOR EACH ROW
  EXECUTE FUNCTION check_schedule_conflict();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_centers_updated_at
  BEFORE UPDATE ON public.centers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_schedules_updated_at
  BEFORE UPDATE ON public.schedules
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better query performance
CREATE INDEX idx_schedules_day_of_week ON public.schedules(day_of_week);
CREATE INDEX idx_schedules_center_id ON public.schedules(center_id);
CREATE INDEX idx_schedules_time_range ON public.schedules(day_of_week, start_time, end_time);

-- Add comments for documentation
COMMENT ON TABLE public.centers IS '요가 센터 정보';
COMMENT ON COLUMN public.centers.name IS '센터명';
COMMENT ON COLUMN public.centers.address IS '주소';
COMMENT ON COLUMN public.centers.additional_info IS '기타 정보';

COMMENT ON TABLE public.schedules IS '주간 요가 수업 스케줄';
COMMENT ON COLUMN public.schedules.title IS '수업명';
COMMENT ON COLUMN public.schedules.class_type IS '수업 종류 (studio: 요가원 출강, private: PT, other: 기타)';
COMMENT ON COLUMN public.schedules.center_id IS '수업 장소 (PT의 경우 NULL)';
COMMENT ON COLUMN public.schedules.day_of_week IS '요일 (0=일요일, 1=월요일, ..., 6=토요일)';
COMMENT ON COLUMN public.schedules.start_time IS '시작 시간';
COMMENT ON COLUMN public.schedules.end_time IS '종료 시간';
COMMENT ON COLUMN public.schedules.additional_info IS '기타 정보';
