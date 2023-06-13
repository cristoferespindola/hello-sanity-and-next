import Section from "../components/Section";
import YouTubeVideo from "./iframe";

import "./styles.css";

const TestimonialsSection = () => {
  return (
    <Section title="Depoimentos" fullHeight>
      <div className="row">
        <YouTubeVideo videoId="LVjvX8bWno4" />
        <YouTubeVideo videoId="wXQmVdG0LXM" />
      </div>
      <div className="row">
        <YouTubeVideo videoId="jDLdhZiQ3W4" />
        <YouTubeVideo videoId="_uJUtBMDbq8" />
      </div>
      <div className="row">
        <YouTubeVideo videoId="N2npSevYhNE" />
        <YouTubeVideo videoId="vxAigFLmCFw" />
      </div>
    </Section>
  );
};

export default TestimonialsSection;
