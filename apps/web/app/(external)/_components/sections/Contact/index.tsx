import ContactForm from './Form';
import SectionContainer from '../../SectionContainer';
import SectionTitle from '../../SectionTitle';

function Contact(): JSX.Element {
  return (
    <SectionContainer sectionName="contact">
      <SectionTitle title="Contact" subtitle="연락해 주세요" />
      <div className="flex flex-row">
        <div className="flex-1 flex-col">
          <p>Send us a message!</p>
        </div>
        <ContactForm />
      </div>
    </SectionContainer>
  );
}

export default Contact;
