import { getTestimonials } from "@/sanity/sanity-utils";
import TestimonialsSection from "./Testimonials.section";

const Testimonials = async () => {
  const testimonials = await getTestimonials();

  return <TestimonialsSection testimonials={testimonials} />;
};

export default Testimonials;
