'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';
import type { Tables } from '@/types/supabase';

const DAYS_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'];
const START_HOUR = 6; // 6 AM
const END_HOUR = 24; // 12 AM (midnight)
const SLOT_DURATION = 30; // minutes

// 수업 타입별 색상 (더 진하게)
const CLASS_TYPE_COLORS = {
  studio: 'bg-yoga-terracotta hover:bg-yoga-terracotta/90 border-yoga-terracotta',
  private: 'bg-yoga-sage hover:bg-yoga-sage/90 border-yoga-sage',
  other: 'bg-yoga-sand hover:bg-yoga-sand/90 border-yoga-sand',
} as const;

type Schedule = Tables<'schedules'> & { center: Tables<'centers'> | null };

interface ScheduleCalendarProps {
  schedules: Schedule[];
}

function timeToMinutes(time: string): number {
  const parts = time.split(':').map(Number);
  const hours = parts[0] ?? 0;
  const minutes = parts[1] ?? 0;
  return hours * 60 + minutes;
}

function getSchedulePosition(startTime: string, endTime: string) {
  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);
  const startOfDay = START_HOUR * 60;

  const startSlot = Math.floor((startMinutes - startOfDay) / SLOT_DURATION);
  const duration = Math.ceil((endMinutes - startMinutes) / SLOT_DURATION);

  return { startSlot, duration };
}

function formatTime(time: string): string {
  return time.slice(0, 5);
}

function ScheduleCalendar({ schedules }: ScheduleCalendarProps): React.JSX.Element {
  console.log('📅 Total schedules:', schedules.length);
  console.log('📅 First schedule sample:', schedules[0]);
  
  // Group schedules by day of week
  const schedulesByDay = schedules.reduce(
    (acc, schedule) => {
      if (!acc[schedule.day_of_week]) {
        acc[schedule.day_of_week] = [];
      }
      acc[schedule.day_of_week]!.push(schedule);
      return acc;
    },
    {} as Record<number, Schedule[]>
  );

  console.log('📊 Schedules by day:', schedulesByDay);

  // Generate time slots
  const timeSlots: string[] = [];
  for (let hour = START_HOUR; hour < END_HOUR; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
    timeSlots.push(`${hour.toString().padStart(2, '0')}:30`);
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Header */}
        <div className="grid grid-cols-8 gap-px bg-yoga-sand/20">
          <div className="bg-background p-2 text-center font-medium text-sm">시간</div>
          {DAYS_OF_WEEK.map((day, index) => (
            <div key={index} className="bg-background p-2 text-center font-medium text-sm">
              {day}요일
            </div>
          ))}
        </div>

        {/* Time grid */}
        <div className="relative grid grid-cols-8 gap-px bg-yoga-sand/20">
          {/* Time labels */}
          <div className="bg-background">
            {timeSlots.map((time, index) => (
              <div
                key={time}
                className={`border-t border-yoga-sand/20 p-1 text-xs text-muted-foreground text-center ${
                  index % 2 === 0 ? 'font-medium' : 'text-[10px]'
                }`}
                style={{ height: '40px' }}
              >
                {index % 2 === 0 ? time : ''}
              </div>
            ))}
          </div>

          {/* Days grid */}
          {DAYS_OF_WEEK.map((_, dayIndex) => {
            const daySchedules = schedulesByDay[dayIndex] || [];

            return (
              <div key={dayIndex} className="relative bg-background">
                {/* Time slot grid lines */}
                {timeSlots.map((time) => (
                  <div
                    key={time}
                    className="border-t border-yoga-sand/10"
                    style={{ height: '40px' }}
                  />
                ))}

                {/* Schedule blocks */}
                {daySchedules.map((schedule) => {
                  const { startSlot, duration } = getSchedulePosition(
                    schedule.start_time,
                    schedule.end_time
                  );
                  const colorClass =
                    CLASS_TYPE_COLORS[schedule.class_type as keyof typeof CLASS_TYPE_COLORS];

                  console.log('🔲 Rendering schedule:', {
                    title: schedule.title,
                    day: dayIndex,
                    startSlot,
                    duration,
                    startTime: schedule.start_time,
                    endTime: schedule.end_time,
                  });

                  return (
                    <Popover key={schedule.id}>
                      <PopoverTrigger asChild>
                        <button
                          className={`absolute left-1 right-1 rounded-lg border-2 ${colorClass} transition-all cursor-pointer p-2 text-white shadow-lg font-medium overflow-hidden`}
                          style={{
                            top: `${startSlot * 40}px`,
                            height: `${duration * 40 - 4}px`,
                            zIndex: 10,
                          }}
                        >
                          <div className="text-sm font-bold truncate">{schedule.title}</div>
                          <div className="text-xs opacity-95">
                            {formatTime(schedule.start_time)} - {formatTime(schedule.end_time)}
                          </div>
                          {schedule.center && (
                            <div className="text-xs opacity-90 truncate">
                              📍 {schedule.center.name}
                            </div>
                          )}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80" side="top">
                        <div className="space-y-2">
                          <h4 className="text-lg font-semibold text-yoga-terracotta">
                            {schedule.title}
                          </h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-muted-foreground">⏰</span>
                              <span>
                                {formatTime(schedule.start_time)} - {formatTime(schedule.end_time)}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-muted-foreground">📚</span>
                              <span>
                                {schedule.class_type === 'studio'
                                  ? '스튜디오'
                                  : schedule.class_type === 'private'
                                    ? '개인레슨'
                                    : '기타'}
                              </span>
                            </div>
                            {schedule.center && (
                              <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">📍</span>
                                <span>{schedule.center.name}</span>
                              </div>
                            )}
                            {schedule.additional_info && (
                              <div className="flex items-start gap-2 mt-2 pt-2 border-t border-yoga-sand/20">
                                <span className="text-muted-foreground">💡</span>
                                <span className="text-xs text-muted-foreground">
                                  {schedule.additional_info}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-yoga-terracotta border-2 border-yoga-terracotta" />
            <span>스튜디오</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-yoga-sage border-2 border-yoga-sage" />
            <span>개인레슨</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-yoga-sand border-2 border-yoga-sand" />
            <span>기타</span>
          </div>
        </div>

        {/* Debug info */}
        {schedules.length === 0 && (
          <div className="mt-4 text-center text-muted-foreground">
            등록된 수업이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}

export default ScheduleCalendar;
