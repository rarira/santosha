import { getSchedules } from '@/libs/supabase';

const DAYS_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'];

async function ScheduleCalendar(): Promise<React.JSX.Element> {
  const schedules = await getSchedules();

  // Group schedules by day of week
  const schedulesByDay = schedules.reduce(
    (acc, schedule) => {
      if (!acc[schedule.day_of_week]) {
        acc[schedule.day_of_week] = [];
      }
      acc[schedule.day_of_week]!.push(schedule);
      return acc;
    },
    {} as Record<number, typeof schedules>
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-2 md:gap-4">
        {DAYS_OF_WEEK.map((day, index) => {
          const daySchedules = schedulesByDay[index] || [];
          return (
            <div key={index} className="border border-yoga-sand/20 rounded-lg overflow-hidden">
              {/* Day header */}
              <div className="bg-yoga-sand/10 py-3 text-center font-medium border-b border-yoga-sand/20">
                {day}요일
              </div>

              {/* Schedule list */}
              <div className="p-2 space-y-2 min-h-[200px]">
                {daySchedules.length === 0 ? (
                  <div className="text-center text-muted-foreground text-sm py-8">
                    수업 없음
                  </div>
                ) : (
                  daySchedules.map((schedule) => (
                    <div
                      key={schedule.id}
                      className="p-3 bg-yoga-cream/30 rounded-md border border-yoga-sand/10 hover:bg-yoga-cream/50 transition-colors"
                    >
                      <div className="font-medium text-sm mb-1">{schedule.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {schedule.start_time.slice(0, 5)} - {schedule.end_time.slice(0, 5)}
                      </div>
                      {schedule.center && (
                        <div className="text-xs text-muted-foreground mt-1">
                          📍 {schedule.center.name}
                        </div>
                      )}
                      {schedule.additional_info && (
                        <div className="text-xs text-muted-foreground mt-1">
                          {schedule.additional_info}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScheduleCalendar;
