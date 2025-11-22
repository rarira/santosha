import ContactForm from './form';
import SectionContainer from '../_components/section-container';
import SectionTitle from '../_components/section-title';

function ContactSection(): React.JSX.Element {
  return (
    <SectionContainer sectionName="contact">
      <SectionTitle title="Contact" subtitle="연락해 주세요" />
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 mb-5 md:mb-0 md:mr-5">
          <p>샬랴샬라.. 제발 폼좀 작성해줘</p>
        </div>
        <ContactForm />
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
