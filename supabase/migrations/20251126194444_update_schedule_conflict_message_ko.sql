-- Update schedule conflict error message to Korean
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
    RAISE EXCEPTION '기존 스케쥴과 시간이 겹칩니다';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
