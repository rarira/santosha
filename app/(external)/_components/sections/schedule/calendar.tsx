'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@ui/drawer';
import { useViewport } from '../../../../hooks/useViewport';
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
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useViewport();

  const handleScheduleClick = (schedule: Schedule) => {
    setSelectedSchedule(schedule);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedSchedule(null), 200);
  };
  
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

  // Generate time slots
  const timeSlots: string[] = [];
  for (let hour = START_HOUR; hour < END_HOUR; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
    timeSlots.push(`${hour.toString().padStart(2, '0')}:30`);
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px] md:min-w-0">
        {/* Header */}
        <div className="grid grid-cols-8 gap-px bg-yoga-sand/20">
          <div className="bg-background p-2 text-center font-medium text-[10px] md:text-sm">시간</div>
          {DAYS_OF_WEEK.map((day, index) => (
            <div key={index} className="bg-background p-2 text-center font-medium text-[10px] md:text-sm">
              {day}<span className="hidden sm:inline">요일</span>
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
                className={`border-t border-yoga-sand/20 p-1 text-[9px] md:text-xs text-muted-foreground text-center ${
                  index % 2 === 0 ? 'font-medium' : 'text-[8px] md:text-[10px]'
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

                  return (
                    <button
                      key={schedule.id}
                      onClick={() => handleScheduleClick(schedule)}
                      className={`absolute left-0.5 right-0.5 md:left-1 md:right-1 rounded-lg border-2 ${colorClass} transition-all cursor-pointer p-1 md:p-2 text-white shadow-lg font-medium overflow-hidden`}
                      style={{
                        top: `${startSlot * 40}px`,
                        height: `${duration * 40 - 4}px`,
                        zIndex: 10,
                      }}
                    >
                      <div className="text-[9px] md:text-sm font-bold truncate leading-tight">{schedule.title}</div>
                      <div className="text-[8px] md:text-xs opacity-95 leading-tight">
                        {formatTime(schedule.start_time)} - {formatTime(schedule.end_time)}
                      </div>
                      {schedule.center && (
                        <div className="text-[8px] md:text-xs opacity-90 truncate leading-tight">
                          📍 {schedule.center.name}
                        </div>
                      )}
                    </button>
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

      {/* Desktop: Dialog */}
      {!isMobile && selectedSchedule && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedSchedule.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🕐</span>
                <div>
                  <p className="text-sm text-muted-foreground">수업 시간</p>
                  <p className="font-medium text-lg">
                    {formatTime(selectedSchedule.start_time)} -{' '}
                    {formatTime(selectedSchedule.end_time)}
                  </p>
                </div>
              </div>

              {selectedSchedule.center && (
                <div className="flex items-center gap-3">
                  <span className="text-4xl">📍</span>
                  <div>
                    <p className="text-sm text-muted-foreground">장소</p>
                    <p className="font-medium text-lg">{selectedSchedule.center.name}</p>
                    {selectedSchedule.center.address && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {selectedSchedule.center.address}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <span className="text-4xl">
                  {selectedSchedule.class_type === 'studio'
                    ? '🏢'
                    : selectedSchedule.class_type === 'private'
                      ? '👤'
                      : '📚'}
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">수업 유형</p>
                  <p className="font-medium text-lg">
                    {selectedSchedule.class_type === 'studio'
                      ? '스튜디오'
                      : selectedSchedule.class_type === 'private'
                        ? '개인레슨'
                        : '기타'}
                  </p>
                </div>
              </div>

              {selectedSchedule.additional_info && (
                <div className="flex items-start gap-3">
                  <span className="text-4xl">ℹ️</span>
                  <div>
                    <p className="text-sm text-muted-foreground">추가 정보</p>
                    <p className="text-sm mt-1 whitespace-pre-wrap">
                      {selectedSchedule.additional_info}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Mobile: Drawer (Bottom Sheet) */}
      {isMobile && selectedSchedule && (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className="max-h-[85vh]">
            <DrawerHeader>
              <DrawerTitle className="text-xl">{selectedSchedule.title}</DrawerTitle>
            </DrawerHeader>
            <div className="space-y-4 px-4 pb-8 overflow-y-auto">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🕐</span>
                <div>
                  <p className="text-sm text-muted-foreground">수업 시간</p>
                  <p className="font-medium">
                    {formatTime(selectedSchedule.start_time)} -{' '}
                    {formatTime(selectedSchedule.end_time)}
                  </p>
                </div>
              </div>

              {selectedSchedule.center && (
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="text-sm text-muted-foreground">장소</p>
                    <p className="font-medium">{selectedSchedule.center.name}</p>
                    {selectedSchedule.center.address && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {selectedSchedule.center.address}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <span className="text-3xl">
                  {selectedSchedule.class_type === 'studio'
                    ? '🏢'
                    : selectedSchedule.class_type === 'private'
                      ? '👤'
                      : '📚'}
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">수업 유형</p>
                  <p className="font-medium">
                    {selectedSchedule.class_type === 'studio'
                      ? '스튜디오'
                      : selectedSchedule.class_type === 'private'
                        ? '개인레슨'
                        : '기타'}
                  </p>
                </div>
              </div>

              {selectedSchedule.additional_info && (
                <div className="flex items-start gap-3">
                  <span className="text-3xl">ℹ️</span>
                  <div>
                    <p className="text-sm text-muted-foreground">추가 정보</p>
                    <p className="text-sm mt-1 whitespace-pre-wrap">
                      {selectedSchedule.additional_info}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}

export default ScheduleCalendar;
