import ContactForm from './Form';
import SectionContainer from '../_components/SectionContainer';
import SectionTitle from '../_components/SectionTitle';

function ContactSection(): React.JSX.Element {
  return (
    <SectionContainer sectionName="contact">
      <SectionTitle title="Contact" subtitle="연락해 주세요" />
      <div className="flex flex-row">
        <div className="flex-1 flex-col">
          <p>샬랴샬라.. 제발 폼좀 작성해줘</p>
        </div>
        <ContactForm />
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
