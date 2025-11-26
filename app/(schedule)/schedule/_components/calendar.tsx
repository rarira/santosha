"use client";

import { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@ui/drawer";
import { useViewport } from "../../../hooks/useViewport";
import type { Tables } from "@/types/supabase";

const DAYS_OF_WEEK = ["일", "월", "화", "수", "목", "금", "토"];
const START_HOUR = 6; // 6 AM
const END_HOUR = 24; // 12 AM (midnight)
const SLOT_DURATION = 30; // minutes

// 수업 타입별 색상 (더 진하게)
const CLASS_TYPE_COLORS = {
  studio:
    "bg-yoga-terracotta hover:bg-yoga-terracotta/90 border-yoga-terracotta",
  private: "bg-yoga-sage hover:bg-yoga-sage/90 border-yoga-sage",
  other: "bg-yoga-sand hover:bg-yoga-sand/90 border-yoga-sand",
} as const;

type Schedule = Tables<"schedules"> & { center: Tables<"centers"> | null };

interface ScheduleCalendarProps {
  schedules: Schedule[];
}

function timeToMinutes(time: string): number {
  const parts = time.split(":").map(Number);
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

function ScheduleDetailPanel({
  schedule,
}: {
  schedule: Schedule | null;
}): React.JSX.Element {
  if (!schedule) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <div className="text-center">
          <p className="text-lg mb-2">수업을 선택하세요</p>
          <p className="text-sm">
            캘린더에서 수업을 클릭하면 상세 정보가 표시됩니다
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-yoga-terracotta">
        {schedule.title}
      </h2>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🕐</span>
          <div>
            <p className="text-sm text-muted-foreground">수업 시간</p>
            <p className="font-medium text-lg">
              {formatTime(schedule.start_time)} -{" "}
              {formatTime(schedule.end_time)}
            </p>
          </div>
        </div>

        {schedule.center && (
          <div className="flex items-center gap-3">
            <span className="text-4xl">📍</span>
            <div>
              <p className="text-sm text-muted-foreground">장소</p>
              <p className="font-medium text-lg">{schedule.center.name}</p>
              {schedule.center.address && (
                <p className="text-sm text-muted-foreground mt-1">
                  {schedule.center.address}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center gap-3">
          <span className="text-4xl">
            {schedule.class_type === "studio"
              ? "🏢"
              : schedule.class_type === "private"
              ? "👤"
              : "📚"}
          </span>
          <div>
            <p className="text-sm text-muted-foreground">수업 유형</p>
            <p className="font-medium text-lg">
              {schedule.class_type === "studio"
                ? "스튜디오"
                : schedule.class_type === "private"
                ? "개인레슨"
                : "기타"}
            </p>
          </div>
        </div>

        {schedule.additional_info && (
          <div className="flex items-start gap-3">
            <span className="text-4xl">ℹ️</span>
            <div>
              <p className="text-sm text-muted-foreground">추가 정보</p>
              <p className="text-sm mt-1 whitespace-pre-wrap">
                {schedule.additional_info}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ScheduleCalendar({
  schedules,
}: ScheduleCalendarProps): React.JSX.Element {
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useViewport();

  const handleScheduleClick = (schedule: Schedule) => {
    setSelectedSchedule(schedule);
    if (isMobile) {
      setIsOpen(true);
    }
  };

  // Group schedules by day of week
  const schedulesByDay = schedules.reduce((acc, schedule) => {
    if (!acc[schedule.day_of_week]) {
      acc[schedule.day_of_week] = [];
    }
    acc[schedule.day_of_week]!.push(schedule);
    return acc;
  }, {} as Record<number, Schedule[]>);

  // Generate time slots
  const timeSlots: string[] = [];
  for (let hour = START_HOUR; hour < END_HOUR; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, "0")}:00`);
    timeSlots.push(`${hour.toString().padStart(2, "0")}:30`);
  }

  return (
    <>
      {/* Desktop layout */}
      <div className="hidden md:block md:px-4 md:max-w-[1600px] md:mx-auto">
        {/* Calendar container - 2 column when schedules exist, centered single column when empty */}
        <div
          className={`${
            schedules.length > 0
              ? "grid md:grid-cols-[1fr_400px] md:gap-6"
              : "flex justify-center"
          }`}
        >
          {/* Calendar */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px] relative">
              {/* Header */}
              <div className="grid grid-cols-7 gap-px bg-yoga-sand/20">
                {DAYS_OF_WEEK.map((day, index) => (
                  <div
                    key={index}
                    className="bg-background p-2 text-center font-medium text-sm"
                  >
                    {day}요일
                  </div>
                ))}
              </div>

              {/* Time grid */}
              <div
                className={`relative grid grid-cols-7 gap-px bg-yoga-sand/20 ${
                  schedules.length === 0 ? "min-h-[600px]" : ""
                }`}
              >
                {/* Days grid */}
                {DAYS_OF_WEEK.map((_, dayIndex) => {
                  const daySchedules = schedulesByDay[dayIndex] || [];

                  return (
                    <div key={dayIndex} className="relative bg-background">
                      {/* Time slot grid lines with time labels for first column (Sunday) */}
                      {schedules.length > 0 &&
                        timeSlots.map((time, index) => (
                          <div
                            key={time}
                            className="border-t border-yoga-sand/10 relative"
                            style={{ height: "40px" }}
                          >
                            {dayIndex === 0 && index % 2 === 0 && (
                              <div className="absolute left-1 top-0 text-[10px] text-muted-foreground/50 font-medium">
                                {time}
                              </div>
                            )}
                          </div>
                        ))}

                      {/* Schedule blocks */}
                      {daySchedules.map((schedule) => {
                        const { startSlot, duration } = getSchedulePosition(
                          schedule.start_time,
                          schedule.end_time
                        );
                        const colorClass =
                          CLASS_TYPE_COLORS[
                            schedule.class_type as keyof typeof CLASS_TYPE_COLORS
                          ];
                        const isSelected = selectedSchedule?.id === schedule.id;

                        return (
                          <button
                            key={schedule.id}
                            onClick={() => handleScheduleClick(schedule)}
                            className={`absolute left-1 right-1 rounded-lg border-2 ${colorClass} transition-all cursor-pointer p-2 text-white shadow-lg font-medium overflow-hidden ${
                              isSelected ? "ring-4 ring-yoga-terracotta/50" : ""
                            }`}
                            style={{
                              top: `${startSlot * 40}px`,
                              height: `${duration * 40 - 4}px`,
                              zIndex: isSelected ? 20 : 10,
                            }}
                          >
                            <div className="text-sm font-bold truncate leading-tight mb-2">
                              {schedule.title}
                            </div>
                            <div className="text-xs opacity-95 leading-tight mb-2">
                              {formatTime(schedule.start_time)} -{" "}
                              {formatTime(schedule.end_time)}
                            </div>
                            {schedule.center && (
                              <div className="text-xs opacity-90 truncate leading-tight">
                                {schedule.center.name}
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {/* No schedules overlay - Desktop */}
              {schedules.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg z-30">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">📅</div>
                    <p className="text-xl font-semibold text-yoga-terracotta mb-2">
                      현재 등록된 수업이 없습니다
                    </p>
                    <p className="text-sm text-muted-foreground">
                      새로운 수업 일정이 곧 업데이트될 예정입니다
                    </p>
                  </div>
                </div>
              )}

              {/* Legend */}
              {schedules.length > 0 && (
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
              )}
            </div>
          </div>

          {/* Right: Detail panel (only when schedules exist) */}
          {schedules.length > 0 && (
            <div className="sticky top-24 h-[calc(100vh-8rem)] bg-background border-2 border-yoga-sand/30 rounded-lg p-6 overflow-y-auto">
              <ScheduleDetailPanel schedule={selectedSchedule} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile: Single column with drawer */}
      <div className="md:hidden w-full overflow-x-auto px-2">
        <div className="min-w-[320px] relative">
          {/* Header */}
          <div className="grid grid-cols-7 gap-px bg-yoga-sand/20">
            {DAYS_OF_WEEK.map((day, index) => (
              <div
                key={index}
                className="bg-background p-2 text-center font-medium text-[10px]"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Time grid */}
          <div
            className={`relative grid grid-cols-7 gap-px bg-yoga-sand/20 ${
              schedules.length === 0 ? "min-h-[600px]" : ""
            }`}
          >
            {/* Days grid */}
            {DAYS_OF_WEEK.map((_, dayIndex) => {
              const daySchedules = schedulesByDay[dayIndex] || [];

              return (
                <div key={dayIndex} className="relative bg-background">
                  {/* Time slot grid lines with time labels for first column (Sunday) */}
                  {schedules.length > 0 &&
                    timeSlots.map((time, index) => (
                      <div
                        key={time}
                        className="border-t border-yoga-sand/10 relative"
                        style={{ height: "40px" }}
                      >
                        {dayIndex === 0 && index % 2 === 0 && (
                          <div className="absolute left-0.5 top-0 text-[8px] text-muted-foreground/50 font-medium">
                            {time}
                          </div>
                        )}
                      </div>
                    ))}

                  {/* Schedule blocks */}
                  {daySchedules.map((schedule) => {
                    const { startSlot, duration } = getSchedulePosition(
                      schedule.start_time,
                      schedule.end_time
                    );
                    const colorClass =
                      CLASS_TYPE_COLORS[
                        schedule.class_type as keyof typeof CLASS_TYPE_COLORS
                      ];

                    return (
                      <button
                        key={schedule.id}
                        onClick={() => handleScheduleClick(schedule)}
                        className={`absolute left-0.5 right-0.5 rounded-lg border-2 ${colorClass} transition-all cursor-pointer p-1 text-white shadow-lg font-medium overflow-hidden`}
                        style={{
                          top: `${startSlot * 40}px`,
                          height: `${duration * 40 - 4}px`,
                          zIndex: 10,
                        }}
                      >
                        <div className="text-[9px] font-bold truncate leading-tight mb-1">
                          {schedule.title}
                        </div>
                        <div className="text-[8px] opacity-95 leading-tight mb-1">
                          {formatTime(schedule.start_time)} -{" "}
                          {formatTime(schedule.end_time)}
                        </div>
                        {schedule.center && (
                          <div className="text-[8px] opacity-90 truncate leading-tight">
                            {schedule.center.name}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* No schedules overlay - Mobile */}
          {schedules.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg z-30">
              <div className="text-center p-6">
                <div className="text-5xl mb-3">📅</div>
                <p className="text-lg font-semibold text-yoga-terracotta mb-1">
                  현재 등록된 수업이 없습니다
                </p>
                <p className="text-xs text-muted-foreground">
                  새로운 수업 일정이 곧 업데이트될 예정입니다
                </p>
              </div>
            </div>
          )}

          {/* Legend */}
          {schedules.length > 0 && (
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
          )}
        </div>
      </div>

      {/* Mobile: Drawer (Bottom Sheet) */}
      {isMobile && selectedSchedule && (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className="max-h-[85vh]">
            <DrawerHeader>
              <DrawerTitle className="text-xl">
                {selectedSchedule.title}
              </DrawerTitle>
            </DrawerHeader>
            <div className="space-y-4 px-4 pb-8 overflow-y-auto">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🕐</span>
                <div>
                  <p className="text-sm text-muted-foreground">수업 시간</p>
                  <p className="font-medium">
                    {formatTime(selectedSchedule.start_time)} -{" "}
                    {formatTime(selectedSchedule.end_time)}
                  </p>
                </div>
              </div>

              {selectedSchedule.center && (
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="text-sm text-muted-foreground">장소</p>
                    <p className="font-medium">
                      {selectedSchedule.center.name}
                    </p>
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
                  {selectedSchedule.class_type === "studio"
                    ? "🏢"
                    : selectedSchedule.class_type === "private"
                    ? "👤"
                    : "📚"}
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">수업 유형</p>
                  <p className="font-medium">
                    {selectedSchedule.class_type === "studio"
                      ? "스튜디오"
                      : selectedSchedule.class_type === "private"
                      ? "개인레슨"
                      : "기타"}
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
    </>
  );
}

export default ScheduleCalendar;
