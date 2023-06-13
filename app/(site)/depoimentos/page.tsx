import { getTestimonials } from "@/sanity/sanity-utils";
import TestimonialsSection from "./Testimonials.section";

const Testimonials = async () => {
  const projects = await getTestimonials();
  console.log(projects);
  return <TestimonialsSection />;
};

export default Testimonials;
