import "./Section.css";

const Section = ({ children, title, fullHeight, ...props }: SectionProps) => {
  return (
    <section className="u-clearfix u-section-1" id="sec-2022">
      <div
        className={`u-palette-1-base u-shape u-shape-rectangle u-shape-1 ${
          fullHeight ? "full-height" : ""
        }`}
      ></div>
      <div className="u-clearfix u-gutter-30 u-layout-wrap u-layout-wrap-1">
        <div className="u-gutter-0 u-layout">{children}</div>
      </div>
    </section>
  );
};

export default Section;

type SectionProps = {
  children: React.ReactNode;
  title?: string;
  fullHeight?: boolean;
};
