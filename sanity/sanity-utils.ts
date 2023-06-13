import { createClient, groq } from "next-sanity";
import { Testimonial } from "@/types/Testimonial";
import clientConfig from "./config/client-config";
import { News } from "@/types/News";

export async function getTestimonial(): Promise<Testimonial[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "testimonial"]{
      _id,
      _createdAt,
      name,
      url,
    }`
  );
}

export async function getProject(slug: string): Promise<Testimonial> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "testimonial" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      url
    }`,
    { slug }
  );
}

export async function getPages(): Promise<News[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "news"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPage(slug: string): Promise<News> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "news" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}
