import { Testimonial } from "@/types/Testimonial";
import Section from "../components/Section";
import YouTubeVideo from "./iframe";

import "./styles.css";

const TestimonialsSection = ({ testimonials }: Props) => {
  return (
    <Section title="Depoimentos" fullHeight>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((item) => (
          <YouTubeVideo videoId={item.url} />
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;

type Props = {
  testimonials: Testimonial[];
};
