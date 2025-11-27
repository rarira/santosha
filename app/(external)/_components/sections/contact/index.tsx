import Link from "next/link";
import { SECTIONS, CONTACT_INFO } from "@/lib/statics";
import ContactForm from "./form";
import SectionContainer from "../_components/section-container";
import SectionTitle from "../_components/section-title";
import { Button } from "@ui/button";

function ContactSection(): React.JSX.Element {
  const { title, subtitle } = SECTIONS.contact;

  return (
    <SectionContainer sectionName="contact" variant="default">
      <SectionTitle title={title} subtitle={subtitle} variant="default" />
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        <div className="flex-1 space-y-6">
          <div className="p-8 rounded-2xl bg-linear-to-br from-yoga-sand/30 to-yoga-cream/40 backdrop-blur-sm border border-yoga-sand/20">
            <h3 className="text-2xl font-semibold text-yoga-terracotta mb-4">
              {CONTACT_INFO.heading}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {CONTACT_INFO.description}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-yoga-sage font-medium min-w-16">
                  {CONTACT_INFO.businessHours.label}
                </span>
                <span className="text-muted-foreground">
                  {CONTACT_INFO.businessHours.value}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yoga-sage font-medium min-w-16">
                  {CONTACT_INFO.responseTime.label}
                </span>
                <span className="text-muted-foreground">
                  {CONTACT_INFO.responseTime.value}
                </span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-yoga-sand/30">
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-yoga-sage text-yoga-sage hover:bg-yoga-sage hover:text-white transition-colors"
              >
                <Link href={CONTACT_INFO.scheduleButton.href}>{CONTACT_INFO.scheduleButton.text}</Link>
              </Button>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
