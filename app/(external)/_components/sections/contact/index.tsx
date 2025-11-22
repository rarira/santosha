import ContactForm from './form';
import SectionContainer from '../_components/section-container';
import SectionTitle from '../_components/section-title';

function ContactSection(): React.JSX.Element {
  return (
    <SectionContainer sectionName="contact">
      <SectionTitle title="Contact" subtitle="연락해 주세요" />
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        <div className="flex-1 space-y-6">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-yoga-sand/30 to-yoga-cream/40 backdrop-blur-sm border border-yoga-sand/20">
            <h3 className="text-2xl font-semibold text-yoga-terracotta mb-4">
              함께 요가를 시작해보세요
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              요가에 관심이 있으시거나 궁금한 점이 있으시면 언제든 연락주세요. 친절하고 자세하게
              안내해드리겠습니다.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-yoga-sage font-medium min-w-[4rem]">문의 시간</span>
                <span className="text-muted-foreground">평일 09:00 - 18:00</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yoga-sage font-medium min-w-[4rem]">답변 시간</span>
                <span className="text-muted-foreground">영업일 기준 24시간 이내</span>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
