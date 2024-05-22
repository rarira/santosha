import ContactForm from './Form';

function Contact() {
  return (
    <div id="contact-section" className="flex-col mt-10 h-[250px]">
      <h1>Contact</h1>
      <p>Send us a message!</p>
      <ContactForm />
    </div>
  );
}

export default Contact;
