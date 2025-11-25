import ScheduleCalendar from '../../(external)/_components/sections/schedule/calendar';
import ScheduleHeader from './_components/schedule-header';
import { getSchedules } from '@/libs/supabase';

export const dynamic = 'force-dynamic';

async function SchedulePage(): Promise<React.JSX.Element> {
  const schedules = await getSchedules();

  return (
    <div className="min-h-screen bg-background">
      <ScheduleHeader />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-yoga-terracotta mb-2">수업 시간표</h1>
          <p className="text-muted-foreground">주간 요가 수업 일정을 확인하세요</p>
        </div>
        <ScheduleCalendar schedules={schedules} />
      </main>
    </div>
  );
}

export default SchedulePage;
