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

// Generate time slots
function generateTimeSlots(): string[] {
  const timeSlots: string[] = [];
  for (let hour = START_HOUR; hour < END_HOUR; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, "0")}:00`);
    timeSlots.push(`${hour.toString().padStart(2, "0")}:30`);
  }
  return timeSlots;
}

// Calendar Header Component
function CalendarHeader({
  isMobile,
}: {
  isMobile: boolean;
}): React.JSX.Element {
  return (
    <div className="grid grid-cols-7 gap-px bg-yoga-sand/20">
      {DAYS_OF_WEEK.map((day, index) => (
        <div
          key={index}
          className={`bg-background p-2 text-center font-medium ${
            isMobile ? "text-[10px]" : "text-sm"
          }`}
        >
          {isMobile ? day : `${day}요일`}
        </div>
      ))}
    </div>
  );
}

// Schedule Block Component
function ScheduleBlock({
  schedule,
  isSelected,
  isMobile,
  onClick,
}: {
  schedule: Schedule;
  isSelected: boolean;
  isMobile: boolean;
  onClick: () => void;
}): React.JSX.Element {
  const { startSlot, duration } = getSchedulePosition(
    schedule.start_time,
    schedule.end_time
  );
  const colorClass =
    CLASS_TYPE_COLORS[schedule.class_type as keyof typeof CLASS_TYPE_COLORS];

  const styles = isMobile
    ? {
        position: "left-0.5 right-0.5",
        padding: "p-1",
        titleSize: "text-[9px]",
        timeSize: "text-[8px]",
        centerSize: "text-[8px]",
        marginBottom: "mb-1",
      }
    : {
        position: "left-1 right-1",
        padding: "p-2",
        titleSize: "text-sm",
        timeSize: "text-xs",
        centerSize: "text-xs",
        marginBottom: "mb-2",
      };

  return (
    <button
      onClick={onClick}
      className={`absolute ${styles.position} rounded-lg border-2 ${colorClass} transition-all cursor-pointer ${styles.padding} text-white shadow-lg font-medium overflow-hidden ${
        isSelected && !isMobile ? "ring-4 ring-yoga-terracotta/50" : ""
      }`}
      style={{
        top: `${startSlot * 40}px`,
        height: `${duration * 40 - 4}px`,
        zIndex: isSelected && !isMobile ? 20 : 10,
      }}
    >
      <div
        className={`${styles.titleSize} font-bold truncate leading-tight ${styles.marginBottom}`}
      >
        {schedule.title}
      </div>
      <div
        className={`${styles.timeSize} opacity-95 leading-tight ${styles.marginBottom}`}
      >
        {formatTime(schedule.start_time)} - {formatTime(schedule.end_time)}
      </div>
      {schedule.center && (
        <div className={`${styles.centerSize} opacity-90 truncate leading-tight`}>
          {isMobile ? `📍 ${schedule.center.name}` : schedule.center.name}
        </div>
      )}
    </button>
  );
}

// Calendar Grid Component
function CalendarGrid({
  schedulesByDay,
  timeSlots,
  hasSchedules,
  isMobile,
  selectedSchedule,
  onScheduleClick,
}: {
  schedulesByDay: Record<number, Schedule[]>;
  timeSlots: string[];
  hasSchedules: boolean;
  isMobile: boolean;
  selectedSchedule: Schedule | null;
  onScheduleClick: (schedule: Schedule) => void;
}): React.JSX.Element {
  const timeLabelStyle = isMobile
    ? "absolute left-0.5 top-0 text-[8px] text-muted-foreground/50 font-medium"
    : "absolute left-1 top-0 text-[10px] text-muted-foreground/50 font-medium";

  return (
    <div
      className={`relative grid grid-cols-7 gap-px bg-yoga-sand/20 ${
        !hasSchedules ? "min-h-[600px]" : ""
      }`}
    >
      {DAYS_OF_WEEK.map((_, dayIndex) => {
        const daySchedules = schedulesByDay[dayIndex] || [];

        return (
          <div key={dayIndex} className="relative bg-background">
            {/* Time slot grid lines with time labels for first column (Sunday) */}
            {hasSchedules &&
              timeSlots.map((time, index) => (
                <div
                  key={time}
                  className="border-t border-yoga-sand/10 relative"
                  style={{ height: "40px" }}
                >
                  {dayIndex === 0 && index % 2 === 0 && (
                    <div className={timeLabelStyle}>{time}</div>
                  )}
                </div>
              ))}

            {/* Schedule blocks */}
            {daySchedules.map((schedule) => (
              <ScheduleBlock
                key={schedule.id}
                schedule={schedule}
                isSelected={selectedSchedule?.id === schedule.id}
                isMobile={isMobile}
                onClick={() => onScheduleClick(schedule)}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

// Empty State Component
function EmptyState({ isMobile }: { isMobile: boolean }): React.JSX.Element {
  const styles = isMobile
    ? {
        container: "text-center p-6",
        emoji: "text-5xl mb-3",
        title: "text-lg font-semibold text-yoga-terracotta mb-1",
        subtitle: "text-xs text-muted-foreground",
      }
    : {
        container: "text-center p-8",
        emoji: "text-6xl mb-4",
        title: "text-xl font-semibold text-yoga-terracotta mb-2",
        subtitle: "text-sm text-muted-foreground",
      };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg z-30">
      <div className={styles.container}>
        <div className={styles.emoji}>📅</div>
        <p className={styles.title}>현재 등록된 수업이 없습니다</p>
        <p className={styles.subtitle}>
          새로운 수업 일정이 곧 업데이트될 예정입니다
        </p>
      </div>
    </div>
  );
}

// Legend Component
function Legend(): React.JSX.Element {
  return (
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
  );
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

  const timeSlots = generateTimeSlots();
  const hasSchedules = schedules.length > 0;

  return (
    <>
      {/* Desktop layout */}
      <div className="hidden md:block md:px-4 md:max-w-[1600px] md:mx-auto">
        {/* Calendar container - 2 column when schedules exist, centered single column when empty */}
        <div
          className={`${
            hasSchedules
              ? "grid md:grid-cols-[1fr_400px] md:gap-6"
              : "flex justify-center"
          }`}
        >
          {/* Calendar */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px] relative">
              <CalendarHeader isMobile={false} />

              <CalendarGrid
                schedulesByDay={schedulesByDay}
                timeSlots={timeSlots}
                hasSchedules={hasSchedules}
                isMobile={false}
                selectedSchedule={selectedSchedule}
                onScheduleClick={handleScheduleClick}
              />

              {!hasSchedules && <EmptyState isMobile={false} />}

              {hasSchedules && <Legend />}
            </div>
          </div>

          {/* Right: Detail panel (only when schedules exist) */}
          {hasSchedules && (
            <div className="sticky top-24 h-[calc(100vh-8rem)] bg-background border-2 border-yoga-sand/30 rounded-lg p-6 overflow-y-auto">
              <ScheduleDetailPanel schedule={selectedSchedule} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile: Single column with drawer */}
      <div className="md:hidden w-full overflow-x-auto px-2">
        <div className="min-w-[320px] relative">
          <CalendarHeader isMobile={true} />

          <CalendarGrid
            schedulesByDay={schedulesByDay}
            timeSlots={timeSlots}
            hasSchedules={hasSchedules}
            isMobile={true}
            selectedSchedule={selectedSchedule}
            onScheduleClick={handleScheduleClick}
          />

          {!hasSchedules && <EmptyState isMobile={true} />}

          {hasSchedules && <Legend />}
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
