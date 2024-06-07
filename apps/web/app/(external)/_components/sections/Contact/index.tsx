import ContactForm from './Form';

function Contact(): JSX.Element {
  return (
    <div id="contact-section" className="flex-col mt-10">
      <h1>Contact</h1>
      <p>Send us a message!</p>
      <ContactForm />
    </div>
  );
}

export default Contact;
