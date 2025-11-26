import ScheduleCalendar from "./_components/calendar";
import { getSchedules } from "@/libs/supabase";

export const dynamic = "force-dynamic";

async function SchedulePage(): Promise<React.JSX.Element> {
  const schedules = await getSchedules();

  // Get the most recent update time
  const getLastUpdatedTime = (): string => {
    if (schedules.length === 0) return "";

    const mostRecentSchedule = schedules.reduce((latest, current) => {
      return new Date(current.updated_at) > new Date(latest.updated_at)
        ? current
        : latest;
    });

    const date = new Date(mostRecentSchedule.updated_at);
    return date.toLocaleString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main className="w-full min-h-screen max-w-100vw md:max-w-(--max-width) bg-background px-4 pb-10 pt-20">
      <div className="mb-6 w-full mx-auto text-center md:mt-8 mt-4">
        <h1 className="text-3xl font-bold text-yoga-terracotta mb-2">
          수업 시간표
        </h1>
        <p className="text-muted-foreground">
          주간 요가 수업 일정을 확인하세요
        </p>
        {schedules.length > 0 && (
          <div className="text-sm text-muted-foreground mt-2">
            마지막 업데이트: {getLastUpdatedTime()}
          </div>
        )}
      </div>
      <ScheduleCalendar schedules={schedules} />
    </main>
  );
}

export default SchedulePage;
