import ScheduleCalendar from './calendar';
import SectionContainer from '../_components/section-container';
import SectionTitle from '../_components/section-title';
import { getSchedules } from '@/libs/supabase';

async function ScheduleSection(): Promise<React.JSX.Element> {
  const schedules = await getSchedules();
  
  console.log('🔍 Server-side schedules data:', JSON.stringify(schedules, null, 2));

  return (
    <SectionContainer sectionName="schedule">
      <SectionTitle title="수업 시간표" subtitle="주간 요가 수업 일정을 확인하세요" />
      <ScheduleCalendar schedules={schedules} />
    </SectionContainer>
  );
}

export default ScheduleSection;
